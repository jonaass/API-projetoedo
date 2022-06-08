import {con} from './connection.js'

export async function login(nome,senha) {
    const comando = 
    `select id_administrador 		id,
    nm_usuario		        nome,
    ds_senha			    senha
    from tb_administrador
    where nm_usuario 		    = ?
    and ds_senha			= ?`
    

    const [linha]= await con.query(comando, [nome, senha])
    return linha[0];
    
}