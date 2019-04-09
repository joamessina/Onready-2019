class Vehiculo {

	constructor(marca, modelo, precio){
		this.Marca = marca
		this.Modelo = modelo
		this.Precio = precio
	}
}

class Auto extends Vehiculo {

	constructor(marca, modelo, precio, puertas){
		super(marca, modelo, precio)
		this.Puertas = puertas
	}
	
}