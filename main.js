class Vehiculo {

	constructor(marca, modelo, precio){
		this.Marca = marca
		this.Modelo = modelo
		this.Precio = precio
	}
	Mostrar(){

		let msg = "";
		for(let prop in this){

			msg += `${prop}: ${this[prop]} // `

		}
		console.log(msg)
	}
}

class Auto extends Vehiculo {

	constructor(marca, modelo, precio, puertas){
		super(marca, modelo, precio)
		this.Puertas = puertas
	}
	
}

class Moto extends Vehiculo {

	constructor(marca, modelo, precio, cilindrada){
		super(marca, modelo, precio)
		this.Cilindrada = cilindrada
	}
	
}