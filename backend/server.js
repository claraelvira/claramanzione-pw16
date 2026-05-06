const express = require('express');
const app = express();

app.use(express.json());

let pazienti = [];

app.get('/pazienti', (req, res) => {
    res.json(pazienti);
});

app.post('/pazienti', (req, res) => {
    pazienti.push(req.body);
    res.json({
        message: 'Paziente aggiunto'
    });
});

app.listen(3000, () => {
    console.log('Server avviato');
});
