"use client"

import AddCourseTableRow from './addCourseTableRow'
import RemoveCourseBtn from './removeCourseBtn'

interface Course {
    professor: {
      name: string | null;
  } | null;
  id: number;
  name: string;
  description: string;
  dateStart: Date;
  dateEnd: Date | null;
  open: boolean;
  professorId: string | null;
}

const ProfessorCourseTable = async ({name, id, courses}: {name: string, id: string, courses: Course[]}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>curso</th>
          <th>descrição</th>
          <th>data-início</th>
          <th>data-fim</th>
          <th>professor</th>
          <th>disponível</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.dateStart.toLocaleDateString('pt-br')}</td>
              <td>{course.dateEnd?.toLocaleDateString('pt-br') || "---"}</td>
              <td>{course.professor?.name || "---"}</td>
              <td>{course.open? "aberto" : "fechado"}</td>
              <td><RemoveCourseBtn courseId={course.id} /></td>
            </tr>
          )
        })}
      </tbody>
      <tfoot>
        <AddCourseTableRow professor={name} professorId={id} />
      </tfoot>
    </table>
  )
}

export default ProfessorCourseTable
