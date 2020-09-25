require ('dotenv').config(); 
    // dotenv - nos permite utilizar variables de entorno

const app = require('./server');
require('./database');

app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'))
})