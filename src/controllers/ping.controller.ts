import { FastifyReply, FastifyRequest } from "fastify"

const returnStatus = async (req: FastifyRequest, reply: FastifyReply) => {

    return reply.status(200).send()
}

export default {
    returnStatus
}