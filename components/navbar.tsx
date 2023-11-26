"use client"
import Image from "next/image"
import UserDropdown from "./userdropdown"
import { useState } from "react"
import Link from "next/link"
import { Session } from "next-auth"


const LogoName = () => {
  return (
    <Link href={"/"} className="flex items-center gap-4 my-2">
      <Image 
        className="w-auto h-auto"
        src={"/faeterj.png"} width={42} height={42} alt="Logo Faeterj"
      />
      <span className="font-semibold text-2xl max-sm:hidden">
        Curió
      </span>
    </Link>
  )
}

const Navbar = ({session}: {session: Session}) => {
  const [visible, setVisible] = useState(false)
  // console.log(JSON.stringify(session, null, 2))
  if (session?.user) {
    return (
      <nav className="bg-zinc-100">
        <div className="bg-zinc-50 shadow px-4 flex grow items-center justify-between">
          <LogoName />
          <div onClick={() => setVisible(!visible)}
            className="flex gap-2 hover:bg-zinc-200 rounded p-2 hover:cursor-pointer">
            <div className="flex flex-col items-end">
              <span className="font-semibold">
                {session.user.name}
              </span>
              <span className="text-sm">
                {session.user.email}
              </span>
            </div>
            <Image src={session.user.image!}
              className="rounded-full w-auto h-auto" width={42} height={42}
              alt="Icone perfil" />
          </div>
        </div>
        {visible && <UserDropdown />}
      </nav>
    )
  }
}

export { Navbar }