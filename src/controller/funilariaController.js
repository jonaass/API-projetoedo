import { AlterarPedido, inserirPedido, TodosPedidos } from '../Repository/funilariaRepository.js'

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

        if(!pedido.atendimento){
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

server.get('/pedidos' ,async (req, resp) =>{
    try {
        const resposta = await TodosPedidos();
        resp.send(resposta);
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
} )

server.delete('/pedidos/:id', async (req,resp) =>{
    try {
        
    } 
    catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


server.put('/pedidos/:carro', async (req,resp) => {
    try {
    const { carro } = req.params;
    const pedidos =req.body;
    
    if (!pedidos.cliente) {
        throw new Error('Nome do cliente é obrigatorio!');
    }

    if (!pedidos.endereço) {
        throw new Error('endereço do pedido é obrigatorio!');
    }

    if(!pedidos.atendimento){
      throw new Error ('atendimento do pedido é obrigatorio!')
    }

    if (!pedidos.telefone) {
        throw new Error('telefone do cliente é obrigatorio!');
    }

    if (!pedidos.carro) {
        throw new Error('Nome do Carro é obrigatorio!');
    }

    if (!pedidos.anoCarro) {
        throw new Error('Ano do Carro é obrigatorio!');
    }

    if (!pedidos.placa) {
        throw new Error('Placa do Carro é obrigatorio!');
    }

    if (!pedidos.problema) {
        throw new Error('problema do Carro é obrigatorio!');
    }

    if (!pedidos.peças) {
        throw new Error('peças do Carro é obrigatorio!');
    }

    if (!pedidos.orçamento) {
        throw new Error('orçamento do Carro é obrigatorio!');
    }

const resposta= await AlterarPedido( carro ,pedidos)
if (resposta != 1) {
    throw new Error ('Burro kkk');
}

else{
    resp.status(205).send();
}
    } 
    catch (err) {
 resp.status(400).send({
     erro: err.message
 })       
    }
})

export default server;