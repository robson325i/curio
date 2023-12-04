import { auth } from "@/lib/auth"
import prisma from "@/lib/prisma"
import EnrolledCourseCard from "./enrolledCourseCard"

const EnrolledCourses = async () => {
  const session = await auth()
  const user = await prisma.user.findFirst({
    where: {email: session?.user?.email},
    include: {student: {include: {enrolledCourses: {include: {professor: {include: {user: {select: {name: true}}}}}}}}}
  })

  if (user?.student) {
    return (
      <div className="bg-zinc-50 rounded shadow p-4 mt-4">
        <h3 className="font-semibold text-lg">Cursos inscritos</h3>
        <hr className="my-2 mb-4" />
        <div className="flex flex-col items-center gap-3">
          {user.student.enrolledCourses.map((course) => {
            return (
              <EnrolledCourseCard
                key={course.id}
                userId={user.id}
                courseId={course.id}
                title={course.name}
                description={course.description}
                teacher={course?.professor?.user.name!}
                dateStart={course.dateStart}
                dateEnd={course.dateEnd}
                location={course.location}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default EnrolledCourses