import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"

const Home = async () => {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/dashboard")
  }
  else {
    redirect("/login")
  }
}

export default Home