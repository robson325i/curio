"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface courseObject {
    name: string,
    description: string,
    dateStart: string,
    dateEnd?: string,
    open: boolean,
    professorId: string
}

export default async function NewCourseAction(course: courseObject) {
    let dateS = new Date(course.dateStart)
    let dateE: Date | undefined

    if (course.dateEnd) {
        dateE = new Date(course.dateEnd)
    }
    const newCourse = await prisma.course.create({
        data: {
            name: course.name,
            description: course.description,
            dateStart: dateS.toISOString(),
            dateEnd: dateE?.toISOString(),
            open: course.open,
            professorId: course.professorId
        },
        select: {
            id: true,
            name: true,
            dateStart: true,
            dateEnd: true,
            open: true
        }
    })
    
    revalidatePath("/dashboard/")
    return newCourse
}