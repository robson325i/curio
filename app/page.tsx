import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/authOptions"
import { prisma } from "@/lib/prisma"

const Home = async () => {
  const session = await getServerSession(authOptions)
  
  if (session && session.user?.email) {
    // try get user from database
    let user = await prisma.user.findFirst({
      where: {
        email: {
          equals: session.user.email
        }
      },
      include: {
        professor: true,
        student: true
      }
    })

    if (!user) {
      // didn't find a user on database, so let's create one
      // get user role from email
      if (session.user.email.includes("aluno")) {
        try {
          await prisma.user.create({
            data: {
              student: {create: {}},
              email: session.user.email,
              name: session.user.name!,
              image: session.user.image!
            }
          })
          console.log("usuário aluno criado")
        } catch (e) {
          console.error(e)
        }
      } else {
        try {
          await prisma.user.create({
            data: {
              professor: {create: {}},
              email: session.user.email,
              name: session.user.name!,
              image: session.user.image!
            }
          })
          console.log("usuário professor criado")
        } catch (e) {
          console.error(e)
        }
      }
    } else {
      console.log("usuário encontrado na base de dados: ", JSON.stringify(user, null, 2))
      if (user.professor) {
        redirect("/dashboard/professor")
      } else {
        redirect("/dashboard/aluno")
      }
    }
    
  } else {
    redirect("/login")
  }
}

export default Home