module.exports = class HelloWorld {
  constructor(name = 'world') {
    this.name = name;
  }

  message() {
    return `Hello ${this.name}`;
  }
};
