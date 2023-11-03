"use client"

import { useState } from "react"
import EnrollBtn from "./enrollBtn"
import WithdrawBtn from "./withdrawBtn"

interface menuProps {
  desc: string,
  dateStart: string,
  dateEnd?: string
}

interface cardProps {
  title: string,
  description: string,
  teacher: string,
  isEnrolle: boolean,
  dateStart: string,
  dateEnd?: string,
  courseId: number
}

const ExpandedMenu = ({desc, dateStart, dateEnd}: menuProps) => {
  return (
    <>
      <hr className="mt-2 mb-3" />
      <div className="flex justify-between text-sm">
        <span>{desc}</span>
        {dateEnd? <span> {dateStart.toString()} - {dateEnd.toString()}</span> : <span>{dateStart.toString()}</span>}
      </div>
    </>
  )
}

const CourseCard = ({title, description, teacher, isEnrolle, dateStart, dateEnd, courseId}: cardProps) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div
      className="w-full bg-zinc-100 rounded p-2 shadow hover:shadow-lg hover:bg-slate-200">
      
      <div className="flex justify-between gap-5 items-center">
        <div className="flex flex-col gap-1">
          <span className="font-semibold">{title}</span>
          <span className="text-sm">{teacher}</span>
        </div>
        {isEnrolle? <WithdrawBtn courseId={courseId} /> : <EnrollBtn courseId={courseId} />}
      </div>
      
      <button className="mx-auto text-sm text-center w-full underline font-light"
        onClick={() => setExpanded(!expanded)}>
        {expanded? "Mostrar menos" : "Mostrar mais"}
      </button>
      {expanded && <ExpandedMenu desc={description} dateStart={dateStart} dateEnd={dateEnd} />}
    </div>
  )
}

export default CourseCard