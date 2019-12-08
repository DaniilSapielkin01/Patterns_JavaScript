class Ligth {
  constructor(ligth) {
    this.ligth = ligth;
  }
}

class RedLigth extends Ligth {
  constructor() {
    super("red");
  }
  sign() {
    return "STOP";
  }
}
class YellowLigth extends Ligth {
  constructor() {
    super("yellow");
  }
  sign() {
    return "READY";
  }
}
class GreenLigth extends Ligth {
  constructor() {
    super("green");
  }
  sign() {
    return "GO";
  }
}

class TrafficLigth {
  constructor() {
    (this.states = [new GreenLigth(), new YellowLigth(), new RedLigth()]),
      (this.current = this.states[0]);
  }
  change() {
    const total = this.states.length;
    let index = this.states.findIndex(ligth => ligth === this.current);
    if (index + 1 < total) {
      this.current = this.states[index + 1];
    } else {
      this.current = this.states[0];
    }
  }
  sign() {
    return this.current.sign();
  }
}
const traffic = new TrafficLigth();
console.log(traffic.sign());
traffic.change();
console.log(traffic.sign());
traffic.change();
console.log(traffic.sign());
