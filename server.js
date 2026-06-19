require('dotenv').config();
const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const contactRouter = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});
