import fastify from "fastify";
import cors from '@fastify/cors'
import formBody from '@fastify/formbody'

import { ScheduleRoutes } from "./routes/schedule";

const server = fastify();

const corsOptions = {
  origin: 'https://www.artesvidroswrr.com.br'
}
server.register(cors, corsOptions)
server.register(formBody)

server.register(ScheduleRoutes)

server.listen({
  host: '0.0.0.0',
  port: process.env.PORT ? Number(process.env.PORT) : 3333
})