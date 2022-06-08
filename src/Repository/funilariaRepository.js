import { con } from './connection.js'

export async function inserirPedido(pedido) {
    const comando = 
    `
    insert into tb_pedido(
        nm_cliente,
        ds_endereco,
        dt_atendimento,
        ds_telefone, 
        nm_carro,
        dt_anoCarro,
         ds_placa,
        ds_problema,
         ds_pecas,
        vl_orcamento) 
        values( ?,?, ?, ?, ?, ?, ?, ?, ?, ?)`

    const [resposta] = await con.query(comando, [pedido.cliente, pedido.endereco, pedido.atendimento, pedido.telefone, pedido.carro, pedido.anoCarro, pedido.placa, pedido.problema, pedido.pecas, pedido.orcamento]);
    pedido.id =  resposta.insertId;
     
    return pedido;
}

export async function TodosPedidos() {
    const comando =
    `
    select 
    id_pedido           id,
    nm_cliente          nome,
    ds_endereco		    endereco,
    dt_atendimento		atendimento,
    ds_telefone		    telefone,
    nm_carro		    Carro,
    dt_anoCarro		    anoCarro,
    ds_placa		    placa,
    ds_problema		    problema,
    ds_pecas		    pecas,
    vl_orcamento	    orcamento
    from tb_pedido `
    
    const [linhas] = await con.query(comando);
    return linhas;
}

export async function RemoverPedido(id) {
    const comando = 
    `
    DELETE FROM tb_pedido
  WHERE id_pedido = ?
    `
    const [resposta] = await con.query(comando,[id]);
    return resposta.affectedRows
}

export async function AlterarPedido(pedido,id) {
const comando =
`UPDATE tb_pedido
set
nm_cliente      = ?,
ds_endereco     = ?,
dt_atendimento  = ?,
ds_telefone     = ?,
nm_carro        = ?,
dt_anoCarro     = ?,
ds_placa        = ?,
ds_problema     = ?,
ds_pecas        = ?,
vl_orcamento    = ?
WHERE id_pedido = ? 
`

const [resposta] = await con.query(comando, [pedido.cliente, pedido.endereco, pedido.atendimento, pedido.telefone, pedido.carro, pedido.anoCarro, pedido.placa, pedido.problema, pedido.pecas, pedido.orcamento, id])
return resposta.affectedRows;

}

//pedido.id = resposta.insertId;
//return pedido;

