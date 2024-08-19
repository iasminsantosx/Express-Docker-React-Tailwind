const express = require('express');
const router = express.Router();
const {criarBussinesEntity, excluirBussinesEntity} = require('../controllers/bussinessentityController');

router.post('/', criarBussinesEntity);
router.delete('/:id',excluirBussinesEntity)

module.exports = router;