const express = require("express")
const servico_controller = require("./controllers/servico.js")
const cep_endereco = require("./middlewares/cep_endereco.js")
const app = express()
const port = 3000;

app.use(express.json());
// app.use(cep_endereco) // midleware de uso global

//Barbearia
app.post("/barbearia", cep_endereco, (req, res) => {
    console.log(req.body)
    res.json();
});



//servico
app.post("/servico", (req, res) => {
    const servico = req.body;
    const code = servico_controller.store(servico);
    res.status(code).json();
    
});

app.get("/servico", (req, res) => {
    res.json(servico_controller.index());
});

app.get("/servico/:id", (req, res) => {
    const servico = servico_controller.show(req.params.id);
    res.json(servico);
});

app.put("/servico/:id", (req,res) => {
    const servico = req.body 
    const code = servico_controller.update(req.params.id, servico)
    res.status(code).json()
});

app.delete("/servico/:id", (req, res) => {
    servico_controller.destroy(req.params.id)
    res.json()
});

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})


