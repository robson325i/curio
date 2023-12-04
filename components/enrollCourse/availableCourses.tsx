import { auth } from "@/lib/auth"
import prisma from "@/lib/prisma"
import EnrollCourseCard from "./enrollCourseCard"

const AvailableCourses = async () => {
  const session = await auth()
  const user = await prisma.user.findFirst({
    include: { student: { include: { enrolledCourses: true }}},
    where: { email: { equals: session?.user?.email! }}
  })
  
  if (user?.student) {
    let ids: number[] = []
    user.student.enrolledCourses.map((course) => {
      ids.push(course.id)
    })

    const availableCourses = await prisma.course.findMany({
      where: {
        AND: [
          { open: true },
          { id: { notIn: ids} }
        ]
      },
      include: { professor: { include: { user: true }}}
    })

    console.log(JSON.stringify(availableCourses, null, 2))

    return (
      <div className="bg-zinc-50 rounded shadow p-4 mt-4">
        <h3 className="font-semibold text-lg">Cursos disponíveis</h3>
        <hr className="my-2 mb-4" />
        <div className="flex flex-col items-center gap-3">
          {availableCourses.map((course) => {
            return (
              <EnrollCourseCard userId={user.id} title={course.name}
                description={course.description} teacher={course.professor?.user.name || ""}
                dateStart={course.dateStart}
                dateEnd={course.dateEnd}
                location={course.location}
                courseId={course.id} key={course.id}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default AvailableCourses