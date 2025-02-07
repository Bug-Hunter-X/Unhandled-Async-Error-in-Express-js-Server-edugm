const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello, world!');
  }).catch(error => {
    console.error(error);
    res.status(500).send('Internal Server Error');
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function someAsyncOperation() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  throw new Error('Something went wrong!');
}