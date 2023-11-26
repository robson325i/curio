import CourseCard from "../courseCard";
import WithdrawBtn from "../withdrawBtn";

interface cardProps {
  title: string,
  description: string,
  teacher: string,
  dateStart: string,
  dateEnd?: string,
  courseId: number
}

const EnrolledCourseCard = ({title, description, teacher, dateStart, dateEnd, courseId}: cardProps) => {
  return (
    <CourseCard title={title}
      description={description}
      teacher={teacher}
      dateStart={dateStart}
      dateEnd={dateEnd}
      button={<WithdrawBtn courseId={courseId} />}
    />
  )
}

export default EnrolledCourseCard