const db = require('../services/mysql.service')

const getAll = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM country');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: "Pasaron cositas - Internal Server Error" })
    }
}

const getOne = async (req, res) => {
    try {
        const [rows] = await db.query(
            'SELECT * FROM country WHERE id = ?',
            [req.params.id]
        );
        if (!rows[0]) {
            return res.status(404).json({ error: "Not Found" });
        }
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: "Pasaron cositas - Internal Server Error" })
    }
}

const create = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Faltan datos' })
        }
        
        const [rows] = await db.query(
            'SELECT * FROM country WHERE id = ?',
            [req.params.id]
        );
        if (!rows[0]) {
            return res.status(404).json({ error: "Not Found" });
        }
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: "Pasaron cositas - Internal Server Error" })
    }
}



module.exports = { getOne, create, getAll };