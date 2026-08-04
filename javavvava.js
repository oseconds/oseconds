function metricsTest() {
  const message = "hello metrics plugin";

  console.log(message);

  return message;
}

metricsTest();

class SignalRack {
  constructor() {
    this.signal = [];
  }

  process(input) {
    return input.map(value => value * 0.5);
  }
}

const rack = new SignalRack();
console.log(rack.process([1,2,3]));