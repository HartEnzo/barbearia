const db = [];
let nextId = 1;

const model = (body, id = nextId++) => {
  if (
    body.nome != undefined &&
    body.foto != undefined &&
    body.bio != undefined &&
    body.nome != "" &&
    body.foto != "" &&
    body.bio != "" &&
    barbearia_controller.show(body.barbearia_id)
   
  ) {
    return {
      id,
      nome: body.nome,
      foto: body.foto,
      barbearia_id: body.barbearia_id,
      bio: body.bio,
      
    };
  }
}

module.exports = model