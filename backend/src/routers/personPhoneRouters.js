const express = require('express');
const router = express.Router();
const {criarPhonePerson,editarPhonePerson,listarPhonePerson,excluirPhonePerson} = require('../controllers/personphoneController');
const validarRequisicao = require('../middlewares/validarRequisicao');
const PersonPhoneSchema = require('../schema/personPhoneSchema');

router.post('/', validarRequisicao(PersonPhoneSchema), criarPhonePerson);
router.put('/:bussinessentity_id/:phonenumbertype_id/:phonenumber',editarPhonePerson)
router.get('/',listarPhonePerson)
router.delete('/:bussinessentity_id/:phonenumbertype_id/:phonenumber',excluirPhonePerson)

module.exports = router;