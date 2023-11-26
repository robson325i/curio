import ProfessorPanel from "@/components/professorPanel/professorPanel"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
export const dynamic = 'force-dynamic'

const Dashboard = async () => {
  const session = await getServerSession(authOptions)
  if (session) {
    return (
      <main className="flex flex-col w-full mt-2
        justify-center items-center mx-auto 
        md:flex-row md:items-start max-w-4xl gap-3">
        <ProfessorPanel email={session?.user?.email!} />
      </main>
    )
  }
}

export default Dashboard