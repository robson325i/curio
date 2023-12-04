"use client"

import { useState } from "react"
import NewCourseAction from "./newCourseAction"

interface Course {
  name: string,
  description: string,
  location: string,
  dateStart: Date,
  dateEnd: Date | null,
  open: boolean,
  professorId: string
}

const AddCourseTableRow = ({professor, professorId, isAdmin}: {professor: string, professorId: string, isAdmin: boolean}) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [sDate, setSDate] = useState("")
  const [eDate, setEDate] = useState("")
  const [location, setLocation] = useState("")
  const [isOpen, setOpen] = useState(false)

  async function handleClick() {
    let course: Course = {
      name: name.trim(),
      description: description.trim(),
      location: location.trim(),
      dateStart: new Date(sDate.trim()),
      dateEnd: null,
      open: isOpen,
      professorId: professorId
    }

    let valid = !(course.name === "" || course.description === "" || sDate.trim() === "" || course.location === "")
    if (valid) {
      if (eDate.trim() !== "") {
        course.dateEnd = new Date(eDate.trim())
      }
      // course.dateStart.setUTCHours(course.dateStart.getUTCHours() - 3)
      // course.dateEnd?.setUTCHours(course.dateEnd?.getUTCHours() - 3)
      const newcourse = await NewCourseAction(course)
      alert("Curso criado com sucesso!\n" + JSON.stringify(newcourse, null, 2))
    }
    else {
      alert("Todos os campos exeto a data-fim são obrigatórios!")
    }
  }

  return (
    <>
      <tr>
        <td colSpan={8} className="bg-zinc-400 text-zinc-50 font-semibold">
          Adicionar novo curso
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="course-name" className="hidden">
            título do curso a ser criado
          </label>
          <input type="text" name="course-name" id="course-name"
            alt="título do curso a ser criado"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </td>
        <td>
          <label htmlFor="description" className="hidden">
            descrição do curso a ser criado
          </label>
          <input type="text" name="description" id="description"
            alt="descrição do curso a ser criado"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </td>
        <td>
          <label htmlFor="dateStart" className="hidden">
            data de início do curso a ser criado
          </label>
          <input type="datetime-local" name="dateStart" id="dateStart"
            alt="data de início do curso a ser criado"
            onChange={(e) => setSDate(e.target.value)}
            required
          />
        </td>
        <td>
          <label htmlFor="dateEnd" className="hidden">
            data de fim do curso a ser criado
          </label>
          <input type="datetime-local" name="dateEnd" id="dateEnd"
            alt="data de fim do curso a ser criado"
            onChange={(e) => setEDate(e.target.value)}
          />
        </td>
        <td>{professor}</td>
        <td>
          <label htmlFor="open" className="hidden">
            configura a disponibilidade do curso para novas matrículas
          </label>
          <input className="w-6 h-6"
            type="checkbox" name="open" id="open"
            onChange={(e) => setOpen(e.target.checked)}
          />
        </td>
        <td>
          <label htmlFor="location" className="hidden">
            local do curso a ser criado
          </label>
          <input type="text" name="location" id="location"
            alt="local do curso a ser criado"
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </td>
        <td>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-zinc-50 rounded px-2 h-12"
            onClick={handleClick} type="submit"
          >
            adicionar
          </button>
        </td>
      </tr>
    </>
  )
}

export default AddCourseTableRow