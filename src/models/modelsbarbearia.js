const db = [];
let nextId = 1;

const model = (body, id = nextId++) => {
  if (
    body.nome != undefined &&
    body.fotos != undefined &&
    body.nome != "" &&
    Array.isArray(body.fotos) &&
    body.fotos.every(el => el != "") &&
    rede_controller.show(body.rede_id)
   
  ) {
    return {
      id,
      nome: body.nome,
      fotos: body.fotos,
      rede: body.rede.id
      };
  }

  return null; 
}

module.exports = model