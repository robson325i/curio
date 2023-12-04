"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export default async function SetCourseIsOpenAction(open: boolean, courseId: number) {
    await prisma.course.update({
        where: { id: courseId},
        data: {
            open: open
        }
    })

    revalidatePath("/dashboard/")
}