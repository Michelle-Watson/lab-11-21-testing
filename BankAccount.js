class InsufficientBalanceError extends Error {}
class IncorrectPinError extends Error {}

export default class BankAccount {
  constructor(pin, notifyBank) {
    this.balance = 0;
    this.pin = pin;
    this.isFrozen = false;
    this.notifyBank = notifyBank;
  }

  deposit(amount) {
    if (this.isFrozen) {
      this.notifyBank("Deposit attempted on frozen account.");
      return;
    }
    this.balance += amount;
  }

  withdraw(amount, pin) {
    if (this.isFrozen) {
      this.notifyBank("Withdrawal attempted on frozen account.");
      return;
    }

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

  freeze() {
    this.isFrozen = true;
  }
}
