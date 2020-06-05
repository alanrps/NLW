import express from 'express';

const app = express();

app.get('/users', (req,res) => {
    res.send("Hello TypeScript");
})

app.listen(3333);