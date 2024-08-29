let nextId = 1;

const model = (body, id = nextId++) => {
  if (
    body.nome != undefined &&
    body.nome != "" 
    
   
  ) {
    return {
      id,
      nome: body.nome,
      
      
    };
  }

  return null; 
}

module.exports = model