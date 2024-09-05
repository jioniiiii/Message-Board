const pool = require('./pool');

//retrive all from db
async function getAllMessages() {
  try {
    const result = await pool.query('SELECT * FROM messages ORDER BY added DESC');
    return result.rows;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
}

//insert into db
async function insertMessage(text, username) {
  try {
    await pool.query('INSERT INTO messages (text, username) VALUES ($1, $2)', [text, username]);
  } catch (error) {
    console.error('Error inserting message:', error);
    throw error;
  }
}

module.exports = {
  getAllMessages,
  insertMessage,
};