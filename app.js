const express = require ('express');
const session = require ('express-session');
const port = 5555;
const app = express();

const user = require('./user.json');

//console.log(user.name);

app.listen(port, (req,res) => {
    console.log(`Server started in por ${port}`);
})

app.use(session({
    secret: 'stalin',
    resave: true,
    saveUninitialized: true,
}))

app.get('/login',(req,res)=> {
    req.session.user = user;
    res.send('Usuario logueado y guardado en sesion')
})

app.get('/get_user',(req,res)=> {
    //const dataUser = req.session.user;
    //delete req.session.user;
    res.send(req.session.user);
})

app.get('/logout',(req,res)=> {
    req.session.destroy((err)=>{
        console.log('Destruyendo sesión')
    })
    res.send('El usuario ha cerrado sesión, no tiene sesiones activas');
})