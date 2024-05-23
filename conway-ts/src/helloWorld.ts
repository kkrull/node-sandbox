export default class HelloWorld {
  name: string;

  constructor(name: string = 'world') {
    this.name = name;
  }

  message() {
    return `Hello ${this.name}`;
  }
}
