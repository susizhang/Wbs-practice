class cat {
  constructor(name, status) {
    (this._name = name), (this._status = status);
    //   (this._tiredness = tired),
    //   (this._hunger = hungry),
    //   (this._loneliness = lonely),
    //   (this._happiness = happy);
  }
  sleep() {
    console.log("Paws is really " + this._status);
  }
}

const Paws = new cat("Paws", "Happy");
Paws.sleep();
