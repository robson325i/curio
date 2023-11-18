"use client"

import prisma from "@/lib/prisma"
import { useSession } from "next-auth/react"
import CourseCard from "./courseCard"

const ProfessorPanel = async () => {
  const { data: session } = useSession()

  const professor = await prisma.user.findFirst({
    where: { email: {equals: session?.user?.email}}
  })

  if (professor) {
    const courses = await prisma.course.findMany({
      where: {professorId: {equals: professor?.id}},
      include: {professor: {select: {name: true}}}
    })
    return (
      <div className="bg-zinc-50 rounded shadow p-4 mt-4">
        <h3 className="font-semibold text-lg">Painel do Professor</h3>
        <hr className="my-2 mb-4" />
        <div className="flex flex-col items-center gap-3">
          {courses.map((course) => {
            if (course.professor) {
              return (
                <CourseCard
                  dateStart={course.dateStart.toDateString()}
                  dateEnd={course.dateEnd?.toDateString()}
                  description={course.description}
                  teacher={course.professor?.name!}
                  title={course.name}
                  button={<button>Teste</button>}
              />)
            }
          })}

          {() => {
            if (!courses) {
              return <></>
            }
            return (
              <CourseCard
                dateStart=""
                description=""
                title="Nenhum curso cadastrado"
                teacher=""
                button={<button>criar novo curso</button>}
              />
            )
          }}
          
        </div>
      </div>
    )
  }
}

export default ProfessorPanel