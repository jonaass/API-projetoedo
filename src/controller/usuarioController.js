import { login } from '../Repository/usuarioRepository.js'

import { Router } from 'express';
const server = Router();


server.post('/usuario/login', async (req, resp) => {
    try {
        const { nome, senha } = req.body;

      const resposta = await  login(nome,senha);
      if (!resposta) {
          throw new Error('Eu to louco');
      }

      resp.send(resposta)

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

export default server;