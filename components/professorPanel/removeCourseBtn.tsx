import RemoveCourseAction from "./removeCourseAction"
const RemoveCourseBtn = ({ courseId }: { courseId: number }) => {
  return (
    <button className="bg-red-400 hover:bg-red-500 text-zinc-50 rounded px-2 h-12"
      onClick={() => {
        alert("removing courseId: ".concat(courseId.toString()))
        RemoveCourseAction(courseId)
        }
      }>
      remover
    </button>
  )
}

export default RemoveCourseBtn