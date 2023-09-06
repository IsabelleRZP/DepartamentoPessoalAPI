const express = require('express')
const router = express.Router();
const controller = require('../controllers/folha-controller')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.get('/', controller.post)
router.get('/:id', controller.update)
router.get('/:id', controller.delete)

module.exports = router;