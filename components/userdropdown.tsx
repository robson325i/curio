"use client"

import { signOut } from "next-auth/react"

const UserDropdown = () => {
  return (
    <div className="float-right mr-4">
      <button
        className="rounded bg-blue-500 hover:bg-blue-700 text-zinc-50 font-semibold py-2 px-4"
        onClick={() => signOut()}
        >Sair</button>
    </div>
  )
}

export default UserDropdown