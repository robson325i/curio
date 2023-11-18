import EnrolledCourseCard from "./enrolledCourseCard"

const EnrolledCourses = () => {
  return (
    <div className="bg-zinc-50 rounded shadow p-4 mt-4">
      <h3 className="font-semibold text-lg">Cursos inscritos</h3>
      <hr className="my-2 mb-4" />
      <div className="flex flex-col items-center gap-3">
        <EnrolledCourseCard title="Programação com arduino"
          description="Lorem ipsum dolor sit amet"
          teacher="Selma Gomes"
          dateStart={"30/10/2023"}
          courseId={1} />

        <EnrolledCourseCard title="Programação com arduino"
          description="Olá mundo" teacher="Selma Gomes"
          dateStart={"30/10/2023"}
          dateEnd={"30/10/2023"}
          courseId={2} />

        <EnrolledCourseCard title="Programação com arduino"
          description="Olá mundo" teacher="Selma Gomes"
          dateStart={"30/10/2023"}
          dateEnd={"30/10/2023"}
          courseId={3} />
      </div>
    </div>
  )
}

export default EnrolledCourses