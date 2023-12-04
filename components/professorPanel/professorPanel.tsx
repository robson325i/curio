import './professorTable.css'
import ProfessorCourseTable from './professorCourseTable'
import { redirect } from "next/navigation"
import { Suspense } from 'react'
import prisma from "@/lib/prisma"
import { Prisma } from '@prisma/client'

type Course = Prisma.CourseGetPayload<{
  include: {professor: {include: {user: {select: {name: true}}}}}
}>


const ProfessorPanel = async ({email}: {email: string}) => {
  const user = await prisma.user.findFirst({
    where: { email: {equals: email}},
    include: { professor: true }
  })

  let courses: Course[]

  if (user?.professor?.isAdmin) {
    courses = await prisma.course.findMany({
      include: {professor: {include: {user: {select:{name: true}}}}},
      orderBy: {name: "asc"}
    })
  } else {
    courses = await prisma.course.findMany({
      where: {professorId: {equals: user?.professor?.id}},
      include: {professor: {include: {user: {select:{name: true}}}}},
      orderBy: {name: "asc"}
    })
  }
  
  // console.log(JSON.stringify(professor, null, 2))

  if (user) {
    return (
      <div className="bg-zinc-50 rounded shadow p-4 mt-4">
        <h3 className="text-lg">{"Painel do "}{user.professor?.isAdmin? "Admin" : "Professor"}</h3>
        <hr className="my-2 mb-4" />
        <div className="overflow-x-auto">
          <Suspense 
            fallback={
            <p className="text-lg font-semibold p-8 rounded shadow bg-slate-500">
              Carregando...
            </p>
          }>
            <ProfessorCourseTable name={user.name!} id={user.professor?.id!} isAdmin={user.professor?.isAdmin!} courses={courses} />
          </Suspense>
        </div>
      </div>
    )
  } else {
    redirect("/login")
  }
}

export default ProfessorPanel