"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export default async function RemoveCourseAction(courseId: number) {
    const deleted = await prisma.course.delete({
        where: { id: courseId }
    })
    console.log("deleted a course: ", JSON.stringify(deleted, null, 2))
    revalidatePath("/dashboard/")
}