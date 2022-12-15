const express = require('express');
debugger;
const app = express();
const PORT = process.env.PORT || 5001;

app.get('/', (request, response) => {
	response.send({hi: 'there'});
});

app.listen(PORT);

