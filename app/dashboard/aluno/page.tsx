import AvailableCourses from "@/components/availableCourses"
import EnrolledCourses from "@/components/enrolledCourses"
export const dynamic = 'force-dynamic'

const Dashboard = () => {
  return (
    <main className="flex flex-col w-full mt-2 justify-center items-center mx-auto md:flex-row md:items-start max-w-4xl gap-3">
      <AvailableCourses />
      <EnrolledCourses />
    </main>
  )
}

export default Dashboard