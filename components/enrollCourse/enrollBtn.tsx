"use client"

import EnrollAction from "./enrollAction"

const EnrollBtn = ({ userId, courseId }: { userId: string, courseId: number}) => {
  async function handleClick() {
    // alert("Inscrevendo em curso id: " + courseId)
    await EnrollAction(courseId, userId)
  }
  return (
    <button onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-600 text-zinc-50 rounded px-2 h-12">
      Inscrever-se
    </button>
  )
}

export default EnrollBtn