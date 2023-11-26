import { Navbar } from "@/components/navbar"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"

const DashboardLayout = async ({ children }: { children: JSX.Element }) => {
  const session = await auth()
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