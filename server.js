
var express = require('express');
var app = express();
var port = process.env.port || 3000;
var hbs = require('hbs');
//hbs.registerPartials(__dirname+'/views/partials');
hbs.registerPartials(__dirname+ '/views/partials');
hbs.registerHelper('currentDate', () => {
    return new Date().toString();
});

app.set('view engine', hbs);

app.use(function(req, res, next){
      //res.render('maintain.hbs');
      next();
});

app.get('/', (req, res) => {
    res.render('Home.hbs',{

        title:'Home page'
    });
});
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title:'About page'
    });
});
app.listen(port, function(){
    console.log('-------application started------'+port);
});