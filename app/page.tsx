import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import { prisma } from "@/lib/prisma"
import { Role } from "@prisma/client"

const Home = async () => {
  const session = await getServerSession(authOptions)
  
  if (session && session.user?.email) {
    // try get user from database
    let user = await prisma.user.findFirst({
      where: {
        email: {
          equals: session.user.email
        }
      }
    })

    if (!user) {
      // get user role from email
      let role: Role = session.user.email.includes("aluno")? "STUDENT" : "PROFESSOR"
      try {
        user = await prisma.user.create({
          data: {
            email: session.user.email,
            name: session.user.name!,
            role: role
          }
        })
      } catch (e) {
        console.error(e)
      }
    }

    if (user?.role === "STUDENT") {
      redirect("/dashboard/aluno")
    }
    else if (user?.role === "ADMIN" || user?.role === "PROFESSOR") {
      redirect("/dashboard/professor")
    }
    
  } else {
    redirect("/login")
  }
}

export default Home