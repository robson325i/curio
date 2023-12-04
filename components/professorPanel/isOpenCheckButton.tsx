"use client"

import SetCourseIsOpenAction from "./setCourseIsOpenAction"
const IsOpenCheckButton = ({courseId, isOpen} : {courseId: number, isOpen: boolean}) => {
  const handleClick = async () => {
    await SetCourseIsOpenAction(!isOpen, courseId)
  }
  return (
    <input className="w-6 h-6"
      type="checkbox" name="open" id="open"
      checked={isOpen} onClick={handleClick}
    />
  )
}

export default IsOpenCheckButton