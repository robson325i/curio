import { prisma } from "@/lib/prisma"

const seedHandler = async (request:Request) => {
    const aluno = await prisma.user.create({
        data: {
            email: "robson.santos.192si@aluno.faeterj-prc.faetec.rj.gov.br",
            name: "Robson Bromberg dos Santos"
        },
    })

    const professor = await prisma.user.create({
        data: {
            email: "fulano.tal@exemplo.com.br",
            name: "Fulano de Tal",
            role: "PROFESSOR"
        }
    })

    const curso = await prisma.course.create({
        data: {
            dateStart: new Date(Date.now()),
            description: "Arduino, eletronica",
            name: "Aprendendo a programar com arduino",
            open: true,
            professor: {
                connect: {id: professor.id}
            }
        }
    })

    return Response.json({ aluno: aluno, professor: professor, curso: curso })
}

export { seedHandler as POST }