import { FastifyInstance } from "fastify"

import schedulleController from "../controllers/schedulle.controller"

export async function ScheduleRoutes(server: FastifyInstance) {
    server.get('/list', schedulleController.listEvents)
    server.post('/create', schedulleController.createEvent)
    server.put('/edit/:id', schedulleController.editEvent)
    server.delete('/delete/:id', schedulleController.deleteEvent)
}
