// Create an object that represents a cat. It should have properties for `tiredness`, `hunger`, `loneliness` and `happiness`
class Cat {
  constructor() {
    this._tiredness = 0;
    this._hunger = 0;
    this._loneliness = 0;
    this._happiness = 0;
  }

  // Create methods that increase/decrease these properties
  play(tirednessVl, lonelinessVl, hungerVl) {
    this._tiredness += tirednessVl;
    this._loneliness -= lonelinessVl;
    this._hunger += hungerVl;
  }
  sleep(tirednessVl, lonelinessVl) {
    this._tiredness -= tirednessVl;
    this._loneliness += lonelinessVl;
  }

  eat(hungerVl, happinessVl) {
    this._hunger -= hungerVl;
    this._happiness += happinessVl;
  }

  fight(happinessVal) {
    this._happiness -= happinessVal;
  }

  printStatus() {
    const isTired = "The cat is tired";
    const isNotTired = "The cat is not tired";
    const isHungry = "The cat is hungry";
    const isNotHungry = "The cat is not hungry";
    const isLonely = "The cat is lonely";
    const isNotLonely = "The cat is not lonely";
    const isHappy = "The cat is happy";
    const isNotHappy = "The cat is not happy";

    if (this._tiredness > 10) {
      console.log(isTired);
    } else {
      console.log(isNotTired);
    }
    if (this._hunger > 10) {
      console.log(isHungry);
    } else {
      console.log(isNotHungry);
    }
    if (this._loneliness > 10) {
      console.log(isLonely);
    } else {
      console.log(isNotLonely);
    }
    if (this._happiness > 10) {
      console.log(isHappy);
    } else {
      console.log(isNotHappy);
    }
  }

  meow() {
    console.log("MEEEEOOOOOOOW");
  }

  pet() {
    if (this._happiness < 5) {
      console.log("Get away from me!");
    } else {
      meow();
    }
  }
}

const garfield = new Cat();

garfield.play(4);
garfield.fight(3);
garfield.eat(9);
garfield.play(10);
garfield.printStatus();
