const express = require('express');
const router = express.Router();
const {criarBussinesEntity, excluirBussinesEntity} = require('../controllers/bussinessentityController');
const validarRequisicao = require('../middlewares/validarRequisicao');
const bussinesEntitySchema = require('../schema/bussinesEntitySchema');

router.post('/',validarRequisicao(bussinesEntitySchema), criarBussinesEntity);
router.delete('/:id',excluirBussinesEntity)

module.exports = router;