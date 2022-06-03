import 'dotenv/config'

import usuarioController from './controller/usuarioController.js'


import express from 'express'
import cors from 'cors'

const server=express();
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT, () => console.log(`API on na pista ${process.env.PORT}`))
