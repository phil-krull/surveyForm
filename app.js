const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 8888;

const app = express();

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const allUsers = [
    {
        name: 'Phil',
        location: 'Tulsa',
        language: 'JavaScript',
        comment: 'JS rocks!!!'
    }
];

// ES6 arrow function
app.get('/', (req, res)=>{
    res.render('index');
});

app.post('/submit', (req, res)=>{
    console.log('-'.repeat(90));
    console.log(`Form Submitted!`);
    console.log(req.body);
    res.redirect('/success');
})

app.get('/success', (req, res)=>{
    res.render('success', {users: allUsers});
})

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}!`)
});