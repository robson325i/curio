import { getServerSession  } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { Navbar } from "@/components/navbar"
import { redirect } from "next/navigation"

export const metadata = {
  title: 'Andorinha',
  description: 'Sistema de matrícula de alunos',
}

const DashboardLayout = async ({ children }: { children: JSX.Element }) => {
  const session = await getServerSession(authOptions)
  if (session) {
    return (
      <>
        <Navbar session={session} />
        {children}
      </>
    )
  } else {
    redirect('/login')
  }
}

export default DashboardLayout