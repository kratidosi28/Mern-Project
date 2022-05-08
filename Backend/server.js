// PARSE .ENV
require('dotenv').config();

// FOR SERVER
// CHECK WITH PROTOCOL TO USE
const SHOULD_RUN_ON_HTTP = process.env.SHOULD_RUN_ON_HTTP;
const http = (SHOULD_RUN_ON_HTTP == 'true') ? require('http') : require('https');

const express = require('express') // NODE FRAMEWORK
const bodyParser = require('body-parser') // TO PARSE POST REQUEST
const cors = require('cors') // ALLOW CROSS ORIGIN REQUESTS

// ---------------------------    SERVER CONFIGS ----------------------------------

const port = process.env.PORT || 5000
const app = express();
require('./Configs/globals'); // GLOBAL SETTINGS FILES

const server = http.createServer(app);

// --------------------------   LANGUAGE    ----------------------------------------
// Define unique Key - pair in Locales / Messsages.js
// It will add entry in respective json files
/* By default language is set to english  User can change by  passing  language in
    Header :
    Accept-Language : 'en'
    Query : 
    url?lang=en
*/
const language = require('i18n');
language.configure({
    locales:['en'],
    defaultLocale : 'en',
    autoReload  : true,
    directory   : __dirname + '/Locales',
    queryParameter  : 'lang',
    objectNotation : true,
    syncFiles   : true,
});

// ------------------------      GLOBAL MIDDLEWARES -------------------------
app.use(bodyParser.json()) // ALLOW APPLICATION JSON
app.use(bodyParser.urlencoded({ extended: false })) // ALLOW URL ENCODED PARSER
app.use(cors()) // ALLOWED ALL CROSS ORIGIN REQUESTS
app.use(express.static(__dirname + '/Assets')); // SERVE STATIC IMAGES FROM ASSETS FOLDER
app.use(language.init); // MULTILINGUAL SETUP
app.set('view engine', 'ejs'); //Set ejs view engine
app.set('views', __dirname + '/Views');

// ------------------------    RESPONSE HANDLER    -------------------
app.use((req, res, next) => {
    const ResponseHandler = require('./Configs/responseHandler')
    res.handler = new ResponseHandler(req, res);
    next()
})

// --------------------------    ROUTES    ------------------
const appRoutes = require('./Routes')
appRoutes(app)


// --------------------------    GLOBAL ERROR HANDLER    ------------------
app.use ((err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }
    res.handler.serverError(err)
})


// --------------------------    START SERVER    ---------------------
server.listen(port, () => {
    console.log(chalk.greenBright(`\nServer started on ${chalk.white.bold(port)} :) \n`))
})

// sequelize.query('SELECT * FROM users LIMIT 10')
//     .then(results => {
//         console.log("TCL: results", results)
//     })
