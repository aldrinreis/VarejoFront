const axios = require("axios");
module.exports = class Services {
  //VERIFICAR USUÁRIO
  static async UsuarioLogin(req, res) {
    let valores = req.body;
    const options = {
      url: "https://aa753737-afdc-4441-a956-b6ece5340cb9-00-32lbywu1n5hi4.worf.replit.dev/login",
      method: "POST",
      data: valores,
    };
    axios(options).then((usuario) => {
      if (usuario != undefined) {
        return res.render("logado");
      }
    });
  }

  //Create usuário
  static async UsuarioCreate(req, res) {
    let valores = req.body;
    const options = {
      url: "https://aa753737-afdc-4441-a956-b6ece5340cb9-00-32lbywu1n5hi4.worf.replit.dev/add_usuario",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }
};
