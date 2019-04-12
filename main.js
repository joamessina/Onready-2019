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
	static Agregar(lista, vehiculo){
		lista.push( vehiculo )
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

let v1 = new Auto("Peugeot", 206, 200000, 4)

let v2 = new Moto("Honda", "Titan", 60000, "125c")

let v3 = new Auto("Peugeot", 208, 250000, 5)

let v4 = new Moto("Yamaha", "YBR", 80000.50, "160c")

let vehiculos = new Array()

Vehiculo.Agregar(vehiculos, v1)
Vehiculo.Agregar(vehiculos, v2)
Vehiculo.Agregar(vehiculos, v3)
Vehiculo.Agregar(vehiculos, v4)

vehiculos.forEach(function(vehiculo){
	vehiculo.Mostrar()
})