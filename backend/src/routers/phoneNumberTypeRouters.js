const express = require('express');
const router = express.Router();
const {criarPhoneNumberType,excluirPhoneNumberType} = require('../controllers/phonenumbertypeController');

router.post('/', criarPhoneNumberType);
router.delete('/:id',excluirPhoneNumberType)

module.exports = router;