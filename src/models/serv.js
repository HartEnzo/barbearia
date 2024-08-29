
const db = [];
let nextId = 1;

const model = (servico, id = nextId++) => {
  if (
    servico.nome != undefined &&
    servico.nome != "" &&
    servico.preco != undefined &&
    servico.preco != "" &&
    servico.barbeiro_id!= undefined &&
    !isNaN(servico.barbeiro_id) &&
    servico.duracao_minutos!= undefined &&
    servico.duracao_minutos <= 0
   
  ) {
    return {
      id,
      nome: servico.nome,
      preco: servico.preco,
      barbeiro_id: servico.barbeiro_id,
      duracao_minutos: servico.duracao_minutos,
      
    };
  }

  return null; 
}

module.exports = model