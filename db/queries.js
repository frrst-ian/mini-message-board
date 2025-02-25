const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages ORDER BY posted_at DESC");
    return rows;
}

async function getMessageById(id) {
    const { rows } = await pool.query("SELECT FROM * messages WHERE id = $1", [id]);
    return rows[0];
}

async function insertMessage(username, messages) {
    const { rows } = await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2) RETURNING *", [username, messages]);
    return rows[0];
};



module.exports = {
    getAllMessages,
    getMessageById,
    insertMessage
}