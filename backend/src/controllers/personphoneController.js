const knex = require("../db/conexao");

const criarPhonePerson = async (req, res) => {

    const { bussinessentity_id, phonenumbertype_id, phonenumber } = req.body;
  
    try {

        const bussines = await knex("bussinessentity").select("*").where("id",bussinessentity_id).first();
        const phoneType = await knex("phonenumbertype").select("*").where("id",phonenumbertype_id).first();

        if(!bussines){
            return res.status(404).json({ mensagem: "Este bussines entity não foi encontrado." });
        };

        if (!phoneType) {
            return res.status(404).json({ mensagem: "Este phone number type não foi encontrado." });
        };

        const personPhone = await knex("personphone")
        .insert({bussinessentity_id,phonenumbertype_id,phonenumber})
        .returning("*");
  
      return res.status(201).json(personPhone);
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
};

const editarPhonePerson = async (req, res) => {

    const { bussinessentity_id, phonenumbertype_id, phonenumber } = req.params;
    const { phonenumberNovo } = req.body;
    
    try {
        const personPhone = await knex("personphone").select("*").where({bussinessentity_id, phonenumbertype_id,phonenumber}).first();
        
        if(!personPhone){
            return res.status(404).json({ mensagem: "Este person Phone não foi encontrado." });
        };

        if(!phonenumberNovo){
            return res.status(400).json({ mensagem: "Phone Number está vazio." });
        };

        const personPhoneEditado = await knex("personphone").update('phonenumber',phonenumberNovo).where({bussinessentity_id,phonenumbertype_id,phonenumber}).returning("*");
  
      return res.status(200).json(personPhoneEditado);
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
};

const listarPhonePerson = async (req,res) => {

    try {
        const phonePerson = await knex("personphone").select("*")
  
        return res.status(200).json(phonePerson);
    } catch (error) {
      return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
}

const excluirPhonePerson = async (req, res) => {

    const { bussinessentity_id, phonenumbertype_id, phonenumber } = req.params;

    try {

        const personPhone = await knex("personphone").select("*").where({ bussinessentity_id, phonenumbertype_id, phonenumber }).first();
  
        if (!personPhone) {
            return res.status(404).json({ mensagem: "Este person phone não foi encontrado." });
        };
  
      const personPhoneExcluido = await knex("personphone").where({ bussinessentity_id, phonenumbertype_id, phonenumber }).del();
  
      return res.status(204).json();

    } catch (error) {
      console.log(error);
      return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
};

module.exports = {criarPhonePerson,editarPhonePerson,listarPhonePerson,excluirPhonePerson}