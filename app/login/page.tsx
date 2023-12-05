"use client"
import { signIn } from "next-auth/react"
import Image from "next/image"
import faeterj from '@/public/Faeterj.png'

const Login = () => {
  return (
    <main className="flex items-center justify-center px-4 py-4 w-full sm:h-screen grow">
      <div className="bg-zinc-50 shadow-md rounded p-10 mx-auto">
        <div className="flex gap-4 items-center">
          <Image src={faeterj} alt="Logo FAETERJ" width={72} height={72} className="w-auto h-auto" priority />
          <h1 className="font-semibold text-4xl text-zinc-700">
            Curió
          </h1>
        </div>
        <hr className="w-full my-3" />
        <h3 className="font-semibold text-zinc-400 ml-1 mt-1">Faça login com sua conta institucional</h3>

        <button  onClick={() => signIn("google", { callbackUrl: "/" })}
        className="rounded w-full flex justify-center align-middle border shadow py-3 font-semibold
        bg-zinc-100 hover:bg-zinc-200 mt-4">
          <Image src="/google.svg" alt="Logo Google" width={24} height={24} className="mx-2" />
          Login com Google
        </button>
      </div>
    </main>
  )
}

export default Login