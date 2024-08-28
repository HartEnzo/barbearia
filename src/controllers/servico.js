
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
    servico.duracao_minutos!= ""
   
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
};

const store = body => {
    const novo = model(body);

    if(novo) {
        db.push(novo);
        return 201;
    }
    return 400; 
};

const index = () => db;

const show = id => db.find(el => el.id == id)

const update = (id, body ) => {
    const index = db.findIndex(el => el.id == id)
    const novo = model(body, parceInt (id))

    if(novo && index != -1) {
        db[index] = novo; 
        return 200;
    }
    return 400;
};

const destroy = id => {
    const index = db.findIndex(el => el.id == id)

    if(index != -1) {
        db.splice(index, 1)
    }
};

module.exports = {
    store,
    index, 
    show,
    update,
    destroy
};