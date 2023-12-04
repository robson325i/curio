import CourseCard from "../courseCard";
import EnrollBtn from "./enrollBtn";

interface cardProps {
  userId: string,
  title: string,
  description: string,
  teacher: string,
  dateStart: Date,
  dateEnd: Date | null,
  courseId: number,
  location: string | null
}

const EnrollCourseCard = ({userId, title, description, teacher, dateStart, dateEnd, courseId, location}: cardProps) => {
  return (
    <CourseCard title={title}
      description={description}
      teacher={teacher}
      dateStart={dateStart}
      dateEnd={dateEnd}
      location={location}
      button={<EnrollBtn userId={userId} courseId={courseId} />}
    />
  )
}

export default EnrollCourseCard