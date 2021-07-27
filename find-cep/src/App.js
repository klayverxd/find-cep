import { React, useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewCEP from './ViewCEP.js';

function App() {
	const [events, setEvents] = useState([])

	function toArray(obj) {
		const arr = [obj]
		return arr
	}

	function submitHandler(e) {
		e.preventDefault();

		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData)

		fetch(`http://localhost:3333?cepfind=${data.txtCEP}`)
		.then(res => res.json())
		.then(data => {
			const array = toArray(data)
			setEvents(array)
		})
		.catch(error => console.log(error))
	}

  return (
		<div className="container">
			<h1>Buscar CEP</h1>
			<form onSubmit={submitHandler}>
				<div className="form-group">
					<input type="text" name='txtCEP' className="form-control"></input>
				</div>

				<button type='submit' name='Search' className="btn btn-primary">Search</button>
			</form>

			<ViewCEP events={events} />
		</div>
  );
}

export default App;
