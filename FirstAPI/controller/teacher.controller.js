const teachers = []

const getOne = (req, res) => {
    const result = teachers.find((teacher) => {
        return teacher.id == req.params.id
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
    teachers.push({"id": id, "name": name});
    res.status(201).json({message: "Todo Bien"})
}

const getAll = (req, res) => {
    res.json(teachers)
}

module.exports = { getOne, create, getAll };