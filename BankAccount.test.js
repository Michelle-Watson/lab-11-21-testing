import { expect, describe, it } from "vitest";
import BankAccount from "./BankAccount.js";

// SLIDE 12: Test Structure
describe("BankAccount", () => {
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

  it("can deposit money (Q2)", () => {
    // Arrange: Create an account with PIN '1234'.
    const account = new BankAccount("1234");

    // Act: Deposit 100 into the account.
    account.deposit(100);

    // Assert: Check if the balance is now 100.
    expect(account.balance).toEqual(100);
  });
});
