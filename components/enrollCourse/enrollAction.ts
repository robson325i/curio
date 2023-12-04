"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export default async function EnrollAction(courseId: number, userId: string) {
  // find related student from user
  const student =  await prisma.student.update({
    where: {userId: userId},
    data: {
      enrolledCourses: {connect: {id: courseId}}
    }
  })
  revalidatePath("/dashboard/aluno")
  return student
}