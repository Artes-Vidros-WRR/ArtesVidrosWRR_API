import { FastifyInstance } from "fastify"

import pingController from "../controllers/ping.controller"

export async function pingRoutes(server: FastifyInstance) {
    server.get('/ping', pingController.returnStatus)
}
