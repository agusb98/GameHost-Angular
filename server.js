//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/heroku'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/heroku/'}),
);

// Start the app by listening on the default Heroku port
<<<<<<< HEAD
app.listen(process.env.PORT || 8080);
=======
app.listen(process.env.PORT || 8080);
>>>>>>> 3a0e7f1bfce73b6ca93a01ec308a26473660488c
