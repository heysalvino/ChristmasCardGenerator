const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set the views directory using path.join for cross-platform compatibility
app.set('views', path.join(__dirname, 'views'));

// Define routes
app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/account', function(req, res) {
    res.render('account_page.html');
});

// Handle 404 - Not Found
app.use(function(req, res, next) {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Handle 500 - Internal Server Error
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).sendFile(path.join(__dirname, 'views', '500.html'));
});

app.listen(port, () => console.log(`App listening on port ${port}`));
