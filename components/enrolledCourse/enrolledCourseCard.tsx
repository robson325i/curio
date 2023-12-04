import CourseCard from "../courseCard";
import WithdrawBtn from "./withdrawBtn";

interface cardProps {
  title: string,
  description: string,
  teacher: string,
  dateStart: Date,
  dateEnd: Date | null,
  courseId: number,
  location: string | null
  userId: string
}

const EnrolledCourseCard = ({userId, title, description, teacher, dateStart, dateEnd, courseId, location}: cardProps) => {
  return (
    <CourseCard title={title}
      description={description}
      teacher={teacher}
      dateStart={dateStart}
      dateEnd={dateEnd}
      location={location}
      button={<WithdrawBtn userId={userId} courseId={courseId} />}
    />
  )
}

export default EnrolledCourseCard