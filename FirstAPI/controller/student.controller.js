const students = [
    { "id": 1, "name": "Wendy" },
    { "id": 2, "name": "Lindarys" }
]

const getOne = (req, res) => {
    const result = students.find((student) => {
        return student.id == req.params.id
    });

    if(!result){
        return res.status(404).json({ error: 'No encontrado' })
    }
    res.json(result)
}

const create = (req, res) =>{
    const {id , name} = req.body;
    if(!id || !name){
        return res.status(400).json({ error: 'Faltan datos' })
    }
    students.push({"id": id, "name": name});
    res.status(201).json({message: "Todo Bien"})
}

module.exports = { getOne, create };