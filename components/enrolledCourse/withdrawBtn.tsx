"use client"

import WithdrawAction from "./withdrawAction"

const WithdrawBtn = ({ userId, courseId }: { userId:string, courseId: number }) => {
  async function handleClick () {
    await WithdrawAction(courseId, userId)
  }
  return (
    <button onClick={handleClick}
      className="bg-red-400 hover:bg-red-500 text-zinc-50 rounded px-2 h-12">
      Deixar curso
    </button>
  )
}

export default WithdrawBtn