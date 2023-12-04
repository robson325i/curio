"use client"

import AddCourseTableRow from './addCourseTableRow'
import RemoveCourseBtn from './removeCourseBtn'
import IsOpenCheckButton from './isOpenCheckButton'
import { Prisma } from '@prisma/client'

type Course = Prisma.CourseGetPayload<{
  include: {professor: {include: {user: {select: {name: true}}}}}
}>

const ProfessorCourseTable = (
  {name, id, isAdmin, courses}: {name: string, id: string, isAdmin: boolean, courses: Course[]}
  ) => {
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
          <th>local</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.dateStart.toLocaleDateString('pt-br') + " " + course.dateStart.toLocaleTimeString("pt-br")}</td>
              <td>{course.dateEnd?.toLocaleDateString('pt-br') + " " + course.dateStart.toLocaleTimeString("pt-br") || "---"}</td>
              <td>{course.professor?.user.name || "---"}</td>
              <td><IsOpenCheckButton courseId={course.id} isOpen={course.open} /></td>
              <td>{course.location || "---"}</td>
              <td><RemoveCourseBtn courseId={course.id} /></td>
            </tr>
          )
        })}
      </tbody>
      <tfoot>
        <AddCourseTableRow professor={name} professorId={id} isAdmin={isAdmin} />
      </tfoot>
    </table>
  )
}

export default ProfessorCourseTable
