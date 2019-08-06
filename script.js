class Ninja{
    constructor (name, health = 100, speed = 3, strength = 3){
        this._name = name;
        this._speed = speed;
        this._strength = strength;
        this._health = health;
    }
    sayName(){
        console.log(`${this._name} is a ninja`);
    }
    showStats(){
        console.log(`Name: ${this._name}\nSpeed: ${this._speed}\nstrength: ${this._strength}\nhealth: ${this._health}`);
    }
    drinkSake(){
        this._health += 10;
        console.log(`${this._name} just drank sake.`);
    }  
}
var anisong = new Ninja("Anisong");
anisong.sayName();
anisong.showStats();
anisong.drinkSake();
anisong.showStats();
