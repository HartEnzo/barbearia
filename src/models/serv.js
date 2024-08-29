
const db = [];
let nextId = 1;

const model = (body, id = nextId++) => {
  if (
    body.nome != undefined &&
    body.nome != "" &&
    body.preco != undefined &&
    body.preco != "" &&
    body.barbeiro_id!= undefined &&
    !isNaN(body.barbeiro_id) &&
    body.duracao_minutos!= undefined &&
    body.duracao_minutos <= 0
   
  ) {
    return {
      id,
      nome: body.nome,
      preco: body.preco,
      barbeiro_id: body.barbeiro_id,
      duracao_minutos: body.duracao_minutos,
      
    };
  }

  return null; 
}

module.exports = model