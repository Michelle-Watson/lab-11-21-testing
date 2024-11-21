class InsufficientBalanceError extends Error {}
class IncorrectPinError extends Error {}

export default class BankAccount {
  constructor(pin) {
    this.balance = 0;
    this.pin = pin;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount, pin) {
    try {
      if (pin !== this.pin) {
        throw new IncorrectPinError("Withdrawal failed: incorrect PIN.");
      }

      if (this.balance < amount) {
        throw new InsufficientBalanceError(
          "Withdrawal failed: insufficient balance."
        );
      }

      this.balance -= amount;
      return amount;
    } catch (error) {
      console.error(error);
    }
  }
}
