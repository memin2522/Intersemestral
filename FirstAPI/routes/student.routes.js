const express = require("express");
const controller = require("../controller/student.controller")
const router = express.Router();

/*
Agregar y consultar estudiantes de una pagina
2 Funciones -> Expongo mi recurso con GET y POST
*/
// http://localhost:5000/stuent/student/<Id del usuario>
router.get('/:id', controller.getOne);
router.post('/', controller.create);

module.exports = router;