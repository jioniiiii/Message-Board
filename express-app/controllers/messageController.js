const db = require('../db/queries');

//controller func to get all
async function AllMessages(req, res) {
  try {
    const messages = await db.getAllMessages();
    res.render('index', { messages });
  } catch (error) {
    console.error('Error retrieving messages:', error);
    res.status(500).send('Error retrieving messages');
  }
}

//controller func to handle new msg
async function Message(req, res) {
  const { messageText, messageUser } = req.body;
  try {
    await db.insertMessage(messageText, messageUser);
    res.redirect('/');
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).send('Error creating message');
  }
}

module.exports = {
  AllMessages,
  Message,
};