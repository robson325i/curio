import './professorTable.css'
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma"
import ProfessorCourseTable from './professorCourseTable'
import { Suspense } from 'react'

const ProfessorPanel = async ({email}: {email: string}) => {
  const professor = await prisma.user.findFirst({
    where: {email: {equals: email}},
    select: {name: true, id: true, role: true}
  })

  let courses

  if (professor?.role === 'ADMIN') {
    courses = await prisma.course.findMany({
      include: {professor: {select: {name: true}}}
    })
  } else {
    courses = await prisma.course.findMany({
      where: {professorId: {equals: professor?.id}},
      include: {professor: {select: {name: true}}}
    })
  }
  
  // console.log(JSON.stringify(professor, null, 2))

  if (professor) {
    return (
      <div className="bg-zinc-50 rounded shadow p-4 mt-4">
        <h3 className="text-lg">Painel do Professor</h3>
        <hr className="my-2 mb-4" />
        <div className="overflow-x-auto">
          <Suspense 
            fallback={
            <p className="text-lg font-semibold p-8 rounded shadow bg-slate-500">
              Carregando...
            </p>
          }>
            <ProfessorCourseTable name={professor.name!} id={professor.id} courses={courses} />
          </Suspense>
        </div>
      </div>
    )
  } else {
    redirect("/login")
  }
}

export default ProfessorPanel