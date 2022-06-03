import 'dotenv/config'

import usuarioController from './controller/usuarioController.js'
import funilariaController from './controller/funilariaController.js'


import express from 'express'
import cors from 'cors'

const server=express();
server.use(cors());
server.use(express.json());

server.use(usuarioController);
server.use(funilariaController)

server.listen(process.env.PORT, () => console.log(`API online ${process.env.PORT}`))
