import { con } from './connection.js'

export async function inserirPedido(pedido) {
    const comando = 
    `
    insert into tb_pedido(nm_cliente, ds_endereco, dt_atendimento, ds_telefone, nm_carro, dt_anoCarro, ds_placa, ds_problema, ds_pecas, vl_orcamento)
                   values( ?,?, ?, ?, ?, ?, ?, ?, ?, ?) `
    const [resposta] = await con.query(comando, [pedido.cliente, pedido.endereco, pedido.atendimento, pedido.telefone, pedido.carro, pedido.anoCarro, pedido.placa, pedido.problema, pedido.pecas, pedido.orcamento]);
    pedido.id =  resposta.insertId;
     
    return pedido;
}