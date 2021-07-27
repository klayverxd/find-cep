const express = require('express');
const cors = require('cors');
const Correio = require('node-correios');
const consulta = new Correio();
const app = express();
const port = 3333;

app.use(cors())

app.listen(port, () => console.log(`listening on port ${port}`))

app.get('/', (req, res) => {
    const {cepfind} = req.query

	consulta.consultaCEP({cep: cepfind})
	.then(result => {
		console.log(result)
		res.send(result)
	})
	.catch(error => console.log(error));
})
