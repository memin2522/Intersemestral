const express = require("express");
const controller = require("../controllers/country.controller")
const router = express.Router();


router.get('/:id', controller.getOne);
router.get('/', controller.getAll);
router.post('/', controller.create);

module.exports = router;