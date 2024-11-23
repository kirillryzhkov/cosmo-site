const express = require('express');
const exphbs = require('express-handlebars');
const db = require('./db/db');

const cookieParser = require('cookie-parser');

const profileRoutes = require('./routes/profileRoutes');
const authRoutes = require('./routes/authRoutes');
const loginRoutes = require('./routes/loginRoutes');
const logout = require('./routes/logout');
const newsRoutes = require('./routes/newsRoutes');
const aboutRoutes = require('./routes/aboutRoutes');

const app = express();

db.conection();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

app.engine(
    'handlebars',
    exphbs.engine({ extname: '.hbs', defaultLayout: 'index' })
);

app.set('view engine', '.hbs');

app.use('/', loginRoutes);
app.use('/', authRoutes);
app.use('/', profileRoutes);
app.use('/', logout);
app.use('/', newsRoutes);
app.use('/', aboutRoutes);

app.get('/', async (req, res) => {
    res.render('index');
});

app.listen(4234, () => {
    console.log(('server run'));
});


