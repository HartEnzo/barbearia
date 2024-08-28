let nextId = 1

const model = (body, id = nextId++) => {
    const telefone = body.telefone
        .replaceAll("-", "")
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll(" ", "")    
    
    const soNumero = true

    telefone.forEach(el => {
        if(isNaN(Number(el))) {
            soNumero = false
        }
    })

        if (body.nome != undefined &&
        body.email != undefined && 
        body.telefone != undefined &&
        body.nome != "" &&
        body.email != "" &&
        body.email.includes("@") &&
        body.telefone != "" &&
        telefone.length >= 11 &&
        telefone.length <=12
        
    ){
        return {
            id,
            telefone: telefone,
            nome: body.nome,
            email: body.email,
            senha: body.senha
        }

    }
}

module.exports = model