"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface courseObject {
    name: string,
    description: string,
    dateStart: Date,
    dateEnd?: Date,
    location: string,
    open: boolean,
    professorId: string
}

export default async function NewCourseAction(course: courseObject) {
    
    const newCourse = await prisma.course.create({
        data: {
            name: course.name,
            description: course.description,
            dateStart: dateS,
            dateEnd: dateE?.toISOString(),
            open: course.open,
            location: course.location,
            professorId: course.professorId
        }
    })
    
    revalidatePath("/dashboard/")
    return newCourse
}