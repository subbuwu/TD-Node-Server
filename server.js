const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
      <form method="POST" action="/submit">
        <label for="name">UserName:</label>
        <input type="text" id="name" name="name" required>
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" required>
        <input type="submit" value="Submit">
      </form>
    `);
  });
  
  app.post('/submit', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    res.send(`
      <h1>Submitted Data:</h1>
      <div>The Name Given : ${name}</div>
      <span>The Age Given : ${age}</span>
    `);
  });
  
  app.listen(port, () => {
    console.log(`The Server is successfully running on port ${port}`);
  });