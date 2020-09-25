const mongoose = require('mongoose') // Maneja la base de datos de mongodb

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env; 

    // El utilizar process.env crea una variable dentro del servidor, lo que permite mantener seguro tus datos de usuario e inicio de sesion 

const MONGODB_URL = 'mongodb://' + NOTES_APP_MONGODB_HOST + '/' + NOTES_APP_MONGODB_DATABASE;

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true 
})  

.then(db => console.log('Database is connected'))
.catch(err => console.log(err));

