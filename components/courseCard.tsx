"use client"

import { useState } from "react"

interface menuProps {
  desc: string,
  dateStart: Date,
  dateEnd: Date | null,
  location: string | null
}

interface cardProps {
  title: string,
  description: string,
  teacher: string,
  dateStart: Date,
  dateEnd: Date | null,
  button: JSX.Element,
  location: string | null
}

const ExpandedMenu = ({desc, dateStart, dateEnd, location}: menuProps) => {
  const dayStart = dateStart.toLocaleDateString("pt-br")
  const timeString = dateStart.toLocaleTimeString("pt-br")
  const dayEnd = dateEnd?.toLocaleDateString("pt-br")
  let dayString
  if (dayStart === dayEnd) {
    dayString = dayStart
  } else {
    dayString = dayEnd? dayStart + " - " + dayEnd : dayStart
  }
  return (
    <>
      <hr className="mt-2 mb-3" />
      <div className="grid grid-cols-2 text-sm max-w-sm">
        <span className="justify-self-auto">{desc}</span>
        <span className="justify-self-end">
          {dayString}
          {location && <><br />{location}</>}
          <br />
          {timeString}
        </span>
      </div>
    </>
  )
}

const CourseCard = ({title, description, teacher, dateStart, dateEnd, button, location}: cardProps) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div
      className="w-full bg-zinc-100 rounded p-2 shadow hover:shadow-lg hover:bg-slate-200">
      
      <div className="flex justify-between gap-5 items-center">
        <div className="flex flex-col gap-1">
          <span className="font-semibold">{title}</span>
          <span className="text-sm">{teacher}</span>
        </div>
        {button}
      </div>
      
      <button className="mx-auto text-sm text-center w-full underline font-light"
        onClick={() => setExpanded(!expanded)}>
        {expanded? "Mostrar menos" : "Mostrar mais"}
      </button>
      {expanded && <ExpandedMenu desc={description} dateStart={dateStart} dateEnd={dateEnd} location={location} />}
    </div>
  )
}

export default CourseCard