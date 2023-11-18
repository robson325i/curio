"use client"
import { getServerSession  } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { Navbar } from "@/components/navbar"
import { redirect } from "next/navigation"

const DashboardLayout = async ({ children }: { children: JSX.Element }) => {
  const session = await getServerSession(authOptions)
  if (session) {
    return (
      <SessionProvider session={session}>
        <Navbar />
        {children}
      </SessionProvider>
    )
  } else {
    redirect('/login')
  }
}

export default DashboardLayout