import { FastifyReply, FastifyRequest } from "fastify"

import { prisma } from "../lib/prisma"

type TypedFastifyRequest = FastifyRequest<{
    Body: {
        category: "budget" | "execution",
        name: string,
        adress: string,
        contact: string,
        date: string
   };
   Params: {
        id: string
   }
}>

const listEvents = async (req: FastifyRequest, reply: FastifyReply) => {

    const events = await prisma.schedule.findMany()

    return reply.status(200).send(events)
}

const createEvent = async (req:TypedFastifyRequest, reply:FastifyReply) => {

    const {
        category,
        name,
        adress,
        contact,
        date
    } = req.body

    let filteredCategory

    switch (category) {
        case "budget":
            filteredCategory = "orçamento"
            break;
    
        case "execution":
            filteredCategory = "instalação"
            break;
    }

    try {
        await prisma.schedule.create({
            data: {
                category: filteredCategory,
                name,
                adress,
                contact,
                date
            }
        })
        return reply.status(201).send()
    } catch (error) {
        return reply.status(500).send(`Internal Server Error: ${error}`)
    }

}

const editEvent = async (req: TypedFastifyRequest, reply: FastifyReply) => {

    const { id } = req.params
    const parsedId = parseInt(id, 10)

    const {
        category,
        name,
        adress,
        contact,
        date
    } = req.body

    try {
        const updatedData = await prisma.schedule.update({
            where: {id: parsedId},
            data: {
                category,
                name,
                adress,
                contact,
                date
            }
        })

        return reply.status(200).send(updatedData)
    } catch (error) {
        return reply.status(500).send(`Internal Server Error: ${error}`)
    }

}

const deleteEvent = async (req: TypedFastifyRequest, reply: FastifyReply) => {

    const { id } = req.params
    const parsedId = parseInt(id, 10)

    try {
        await prisma.schedule.delete({
            where: { id: parsedId }
        })
        return reply.status(204).send()
    } catch (error) {
        return reply.status(404).send(`Internal Server Error ${error}`)
    }

}

export default { 
    listEvents,
    createEvent,
    editEvent,
    deleteEvent
}