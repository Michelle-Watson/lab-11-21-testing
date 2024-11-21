import { expect, describe, it } from "vitest";
import BankAccount from "./BankAccount.js";

describe("BankAccount", () => {
  it("is created with correct details", () => {
    const account = new BankAccount("1234");

    expect(account).toBeInstanceOf(BankAccount);
    expect(account.balance).toEqual(0);
    expect(account.pin).toEqual("1234");
  });
});
