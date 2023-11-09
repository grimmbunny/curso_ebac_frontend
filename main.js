function Animal(nome, tipo, som) {
        this.nome = nome;
        this.tipo = tipo;
        this.som = som;
        this.SomAnimal = function() {
            console.log(this.nome +" "+ "diz" +" " + som);
        }
    }

    const Cachorro = new Animal("cachorro", "canino", "auau");
    const Gato = new Animal("gato", "felino", "miau");
    const Rato = new Animal("rato", "roedor", "squeak");

    console.log(Cachorro);
    console.log(Gato);
    console.log(Rato);


    Cachorro.SomAnimal();
    Gato.SomAnimal();
    Rato.SomAnimal();