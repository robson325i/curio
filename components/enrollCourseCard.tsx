import CourseCard from "./courseCard";
import EnrollBtn from "./enrollBtn";

interface cardProps {
  title: string,
  description: string,
  teacher: string,
  dateStart: string,
  dateEnd?: string,
  courseId: number
}

const EnrollCourseCard = ({title, description, teacher, dateStart, dateEnd, courseId}: cardProps) => {
  return (
    <CourseCard title={title}
      description={description}
      teacher={teacher}
      dateStart={dateStart}
      dateEnd={dateEnd}
      button={<EnrollBtn courseId={courseId} />}
    />
  )
}

export default EnrollCourseCard