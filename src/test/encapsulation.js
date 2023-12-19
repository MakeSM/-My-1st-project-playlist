class CoffeeMachine {
   _waterAmount = 0; //количество воды внутри

   set waterAmount(value) {
      if (value < 0) throw new Error('Отрицательное количество воды');
      this._waterAmount = value;
   }

   get waterAmount() {
      return this.waterAmount;
   }

   constructor(power) {
      this._power = power;
   }
}

// создаем новую кофеварку
let coffeeMachine = new CoffeeMachine(100);

// устанавливаем количество воды
coffeeMachine.waterAmount = -10; // Error: Отрицательное количество воды
