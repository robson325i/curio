import EnrollCourseCard from "./enrollCourseCard"

const AvailableCourses = () => {
  return (
    <div className="bg-zinc-50 rounded shadow p-4 mt-4">
      <h3 className="font-semibold text-lg">Cursos disponíveis</h3>
      <hr className="my-2 mb-4" />
      <div className="flex flex-col items-center gap-3">
        <EnrollCourseCard title="Programação com arduino"
          description="Olá mundo" teacher="Selma Gomes"
          dateStart={"30/10/2023"}
          courseId={4} />

        <EnrollCourseCard title="Programação com arduino"
          description="Olá mundo" teacher="Selma Gomes"
          dateStart={"30/10/2023"}
          dateEnd={"30/10/2023"}
          courseId={5} />

        <EnrollCourseCard title="Programação com arduino"
          description="Olá mundo" teacher="Selma Gomes"
          dateStart={"30/10/2023"}
          dateEnd={"30/10/2023"}
          courseId={6} />
      </div>
    </div>
  )
}

export default AvailableCourses