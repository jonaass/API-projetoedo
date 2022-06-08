select *
from tb_administrador
join tb_pedido on tb_administrador.id_administrador = tb_pedido.id_administrador;

insert into tb_pedido(nm_cliente, ds_endereco, dt_atendimento, ds_telefone, nm_carro, dt_anoCarro, ds_placa, ds_problema, ds_pecas, vl_orcamento)
values( 'Roberto', 'rua sei la', '2022-10-03', '4002-8922', 'celtinha rebaixado', '2000-01-01', 'abluablue', 'carro nao funciona ora bolas', 'carburador novo', '3000');
select * from tb_pedido;

