class MyMath {
  constructor(initialValue = 0) {
    this.num = initialValue;
  }
  square() {
    return this.num ** 2;
  }
  cube() {
    return this.num ** 3;
  }
}
class Command {
  constructor(subject) {
    //subject - то над чем буедм формировать оболочку
    this.subject = subject;
    this.commandsExecuted = []; //в нем будет храниться список всех вызваных комманд
  }
  execute(command) {
    this.commandsExecuted.push(command); //обра-ся к массиву и push ту команду кот-я была вызв-на
    return this.subject[command]();
  }
}

const x = new Command(new MyMath(5));

console.log(x.execute("square"));
console.log(x.execute("cube"));

console.log(x.commandsExecuted);
