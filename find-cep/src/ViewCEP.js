import React from "react"
import './styles/main.css'

export default function ViewCEP({events}) {
	if(!events || events.length === 0) return null

	return (
		<>
			<h1>Dados do CEP encontrado:</h1>
			<ul className="list-group">
				{events.map(item =>
					<li className="list-group-item" key={item.cep}>
						<span>CEP: {item.cep}</span>
						<span>Cidade: {item.localidade}</span>
						<span>Ddd: {item.ddd}</span>
						<span>Logradouro: {item.logradouro}</span>
						<span>Bairro: {item.bairro}</span>
						<span>UF: {item.uf}</span>
					</li>
					)
				}
			</ul>
		</>
	)
}
