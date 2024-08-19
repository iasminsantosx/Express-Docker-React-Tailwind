const knex = require("../db/conexao");

const criarPhoneNumberType = async (req, res) => {

    const { name } = req.body;
  
    try {

      if (!name){
        return res.status(400).json({ mensagem: "Campo name está vazio." });
      };

      const phoneType = await knex("phonenumbertype")
        .insert({name})
        .returning("*");
  
      return res.status(201).json(phoneType);
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
};

const excluirPhoneNumberType = async (req, res) => {

    const { id } = req.params;

    try {
      const phoneType = await knex("phonenumbertype")
        .select("*")
        .where({ id })
        .first();
  
      if (!phoneType) {
        return res
          .status(404)
          .json({ mensagem: "Este phone number type não foi encontrado." });
      }
  
      const phoneTypeExcluido = await knex("phonenumbertype").where({ id }).del();
  
      return res.status(204).json();

    } catch (error) {
      return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
};

module.exports = {criarPhoneNumberType,excluirPhoneNumberType}