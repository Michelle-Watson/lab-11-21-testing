import { expect, describe, it } from "vitest";
import BankAccount from "./BankAccount.js";

// SLIDE 12: Test Structure
describe("BankAccount", () => {
  // Q1. Creating an account: Create an account, then verify that the account balance is 0 and the PIN is set to the pin value that was passed in to the constructor.
  it("is created with correct details (Q1)", () => {
    // Arrange: Set up an initial state
    const account = new BankAccount("1234");

    // Act: Execute the logic that’s being tested
    // Assert: Make an assertion that the result is what you expect
    // Structure: Assert.Act
    expect(account).toBeInstanceOf(BankAccount); // check that account was created

    // Verify that the account balance is 0.
    expect(account.balance).toEqual(0);
    // Verify that the account's PIN is the same as the pin value passed in to the constructor.
    expect(account.pin).toEqual("1234");
  });

  // Q2. Making a deposit: Create an account, call deposit with an amount, then verify that the account's balance increases by the deposited amount.
  it("can deposit money (Q2)", () => {
    // Arrange: Create an account with PIN '1234'.
    const account = new BankAccount("1234");

    // Act: Deposit 100 into the account.
    account.deposit(100);

    // Assert: Check if the balance is now 100.
    expect(account.balance).toEqual(100);
  });

  // Q3. Making a withdrawal:
  // Q3a. a. Create an account, then call withdraw with an amount that is less than or equal to the account balance and the correct pin value. Verify that the account balance is reduced by the withdrawn amount.
  it("can withdraw money with correct PIN and sufficient balance (Q3a)", () => {
    // Arrange: Create an account with PIN '1234'.
    const account = new BankAccount("1234");

    // Act: Deposit 200 into the account.
    account.deposit(200);
    const withdrawnAmount = account.withdraw(100, "1234");

    // Assert: Balance should be reduced by the withdrawn amount (100).
    expect(account.balance).toEqual(100);
    expect(withdrawnAmount).toEqual(100); // The returned amount should match the withdrawn amount.
  });
});
