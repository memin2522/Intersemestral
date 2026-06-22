const express = require("express");
const studentRoutes = require("./routes/student.routes")
const teacherRoutes = require("./routes/teacher.routes")

const PORT = 5000;
const api = express();

api.use(express.json());
api.use("/student", studentRoutes)
api.use("/teacher", teacherRoutes)

api.listen(PORT, ()=>{
    console.log("http://127.0.0.1:5000")
})