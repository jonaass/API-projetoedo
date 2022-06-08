create database funilaria;

use funilaria;
create table tb_administrador(
id_administrador		int primary key auto_increment,
nm_usuario		varchar(100),
ds_senha		varchar(100)
);

create table tb_pedido(
id_pedido		int primary key auto_increment,
id_administrador	int,
nm_cliente		varchar(100),
ds_endereco		varchar(100),
dt_atendimento		datetime,
ds_telefone		varchar(20),
nm_carro		varchar(100),
dt_anoCarro		datetime,
ds_placa		varchar(100),
ds_problema		varchar(1000),
ds_pecas		varchar(1000),
vl_orcamento	decimal(10,2),
foreign key (id_administrador) references tb_administrador(id_administrador)
);