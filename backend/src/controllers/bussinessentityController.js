const knex = require("../db/conexao");

const criarBussinesEntity = async (req, res) => {

    const { name } = req.body;
  
    try {

      if (!name){
        return res.status(400).json({ mensagem: "Campo name está vazio." });
      };

      const bussines = await knex("bussinessentity")
        .insert({name})
        .returning("*");
  
      return res.status(201).json(bussines);
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
};

const excluirBussinesEntity = async (req, res) => {

    const { id } = req.params;

    try {
      const bussines = await knex("bussinessentity")
        .select("*")
        .where({ id })
        .first();
  
      if (!bussines) {
        return res
          .status(404)
          .json({ mensagem: "Este bussines entity não foi encontrado." });
      }
  
      const bussinessentityExcluido = await knex("bussinessentity").where({ id }).del();
  
      return res.status(204).json();

    } catch (error) {
      return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
};

module.exports = {criarBussinesEntity,excluirBussinesEntity}