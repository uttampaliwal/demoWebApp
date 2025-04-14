const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('This is my demo web application.');
});


app.get('/about', (req, res) => {
  res.send('Hello my name is Uttam Paliwal! I am a software engineer and I love to code!');
});

app.get('/contact', (req, res) => {
  res.send('My Contact Number is 7980827701 and my email is uttam232002@gmail.com ');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
