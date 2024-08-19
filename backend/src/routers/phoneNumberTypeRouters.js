const express = require('express');
const router = express.Router();
const {criarPhoneNumberType,excluirPhoneNumberType} = require('../controllers/phonenumbertypeController');
const validarRequisicao = require('../middlewares/validarRequisicao');
const phonenumbertypeSchema = require('../schema/phonenumbertypeSchema');


router.post('/',validarRequisicao(phonenumbertypeSchema),criarPhoneNumberType);
router.delete('/:id',excluirPhoneNumberType)

module.exports = router;