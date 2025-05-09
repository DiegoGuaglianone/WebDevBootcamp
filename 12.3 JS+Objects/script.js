//Objeto
var camareira = {
    name: "Pietra",
    age: 23,
    nationality: "Brazilian",
}

//Construtor (Classe)
function Garcom (name, age, foods){
    this.name = name;
    this.age = age;
    this.foods = foods;
    //Adicionando metodos a uma classe
    this.ask = function(){
        alert("Gostaria de um pedaco de pizza?");
    }
}

//Objeto criado a partir de um construtor
var garcom1 = new Garcom("Diego", 20, "Pizza");

garcom1.ask