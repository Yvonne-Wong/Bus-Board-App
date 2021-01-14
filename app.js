const express = require('express');
const app = express();
const testController = require('./controllers/testController');


var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.get('/', (req, res) => testController(req, res));

app.listen(port, () => {
	console.log(`app is listening to port ${port}`);
});