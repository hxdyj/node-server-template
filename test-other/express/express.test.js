const path = require('path')

var express = require('express');
var app = express();
var admin = express(); // the sub app

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'jade')
admin.get('/', function (req, res) {
    console.log("admin.mountpath", admin.mountpath); // /admin
    res.send('Admin Homepage');
})


var secret = express();
secret.get('/', function (req, res) {
    console.log("secret.mountpath", secret.mountpath); // /secr*t
    res.send('Admin Secret');
});


admin.use('/secr*t', secret); // load the 'secret' router on '/secr*t', on the 'admin' sub app
app.locals.title = "express"
app.locals.strftime = require('strftime');

admin.on('mount', function (parent) {
    console.log('Admin Mounted');
    console.log("parent:", parent.locals.title); // refers to the parent app
});

app.use(['/adm*n', '/manager'], admin); // load the 'admin' router on '/adm*n' and '/manager', on the parent app






app.use('/', express.static(path.join(__dirname, '/public'), {
    dotfiles: 'allow'
})); //app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send(app.locals.title);
})

app.get("*", function (req, res) {
    res.render('index', {
        title: '404',
        message: '404'
    });
});

var server = app.listen(3000);