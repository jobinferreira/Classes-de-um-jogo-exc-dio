class hero {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    atacar() {
        let ataque;
        switch(this.profissao) {
            case 'Mago':
                ataque = 'magia';
                console.log(`O ${this.profissao} atacou usando ${ataque}`);
                break;
            case 'Guerreiro':
                ataque = 'espada';
                console.log(`O ${this.profissao} atacou usando ${ataque}`);
                break;
            case 'Monje':
                ataque = 'cajado';
                console.log(`O ${this.profissao} atacou usando ${ataque}`);
                break;
            case 'Ninja':
                ataque = 'shuriken';
                console.log(`O ${this.profissao} atacou usando ${ataque}`);
                break;
        }
    }
}

const Hero1 = new hero('Kurato', 22, 'Mago');
const Hero2 = new hero('Kurato', 22, 'Guerreiro');
const Hero3 = new hero('Kurato', 22, 'Monje');
const Hero4 = new hero('Kurato', 22, 'Ninja');

Hero1.atacar()
Hero2.atacar()
Hero3.atacar()
Hero4.atacar()