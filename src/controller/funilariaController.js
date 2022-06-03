import { inserirPedido } from '../Repository/funilariaRepository.js'

import multer from 'multer'
import { Router } from 'express'

const server =Router();

server.post('/pedido' , async (req, resp) =>{
    try {
         const pedido= req.body

         if (!pedido.cliente) {
            throw new Error('Nome do cliente é obrigatorio!');
        }

        if (!pedido.endereço) {
            throw new Error('endereço do pedido é obrigatorio!');
        }

        if(pedido.atendimento){
          throw new Error ('atendimento do pedido é obrigatorio!')
        }

        if (!pedido.telefone) {
            throw new Error('telefone do cliente é obrigatorio!');
        }

        if (!pedido.carro) {
            throw new Error('Nome do Carro é obrigatorio!');
        }

        if (!pedido.anoCarro) {
            throw new Error('Ano do Carro é obrigatorio!');
        }

        if (!pedido.placa) {
            throw new Error('Placa do Carro é obrigatorio!');
        }

        if (!pedido.problema) {
            throw new Error('problema do Carro é obrigatorio!');
        }

        if (!pedido.peças) {
            throw new Error('peças do Carro é obrigatorio!');
        }

        if (!pedido.orçamento) {
            throw new Error('orçamento do Carro é obrigatorio!');
        }

        const PedidoInserido = await inserirPedido(pedido)

        resp.send(PedidoInserido)

    } 
    catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})