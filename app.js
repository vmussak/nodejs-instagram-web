const server = require('./server'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = server.app,
    express = server.express;

require('./config/environment/settings.js');
require('validation-functions');
require('devbox-linq');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.set('views', path.join(__dirname, 'src/web/views'));
app.use(express.static(path.join(__dirname, 'src/web/public')));
app.set("view engine", "vash");

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/cadastro', (req, res) => {
    res.render('cadastro');
})

app.get('/perfil/:nome', (req, res) => {
    res.render('perfil', {
        nome: 'Vinicius Mussak',
        user: req.params.nome,
        imagemPerfil: 'http://www2.uol.com.br/guiadolitoral/imgnoticia/conheca-a-historia-por-tras-da-iconica-foto-de-einstein-mostrando-a-lingua-4030-f1.jpg',
        frase: 'viniciusmussak.net',
        quantidadePublicacoes: 100,
        posts: [
            {
                id: 10,
                url: 'http://cdn.playbuzz.com/cdn/abf3729d-f708-4872-a2d6-a5e4a33edf51/c38d8bea-51c7-48ce-8e4c-4420f6ea356b_560_420.jpg'
            },
            {
                id: 11,
                url: 'http://linenlaceandlove.com/wp-content/uploads/2012/04/autumn-dress-fall-girl-leaves-umbrella-Favim.com-41733.jpg'
            }
        ]
    });
})

app.get('/feed', (req, res) => {
    res.render('feed');
})

app.listen(global.configs.port, () => {
    console.log('Servidor rodando em localhost: ' + global.configs.port);
});