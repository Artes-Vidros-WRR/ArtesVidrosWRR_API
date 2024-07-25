import fastify from "fastify";
import cors from '@fastify/cors'
import formBody from '@fastify/formbody'

import pingEndpoint from "./utils/pingEndpoint";

import { pingRoutes } from "./routes/ping";
import { ScheduleRoutes } from "./routes/schedule";

const server = fastify();

const corsOptions = {
  origin: 'https://www.artesvidroswrr.com.br'
}
server.register(cors, corsOptions)
server.register(formBody)

server.register(pingRoutes)
server.register(ScheduleRoutes)

server.listen({
  host: '0.0.0.0',
  port: process.env.PORT ? Number(process.env.PORT) : 3333
})

pingEndpoint()