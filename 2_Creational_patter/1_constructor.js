// function Server(name, ip) {
//   this.name = name;
//   this.ip = ip;
// }

// Server.prototype.getUrl = function() {
//   return `http://${this.ip}:80`;
// };

class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }
  getUrl() {
    return `http://${this.ip}:0000`;
  }
}

const aws = new Server("AWS German", "82.21.82.21");
console.log(aws.getUrl());
