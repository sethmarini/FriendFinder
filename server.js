var express    = require('express'),
    bodyParser = require('body-parser'),
    path       = require('path'),
    PORT       = process.env.PORT || 8080,
    app        = express(); 

app.use(express.static('app/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());  
app.use(bodyParser.text());    

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log('Listening on PORT: ' + PORT);
});
