# Introduction

The starter code contains a class called `BankAccount.js` which implements a bank account that holds a balance and can have money deposited and withdrawn.

Unlike a credit account, there must be sufficient balance to cover the amount of a withdrawal.

The bank account has a PIN as a security feature. To make a withdrawal, the correct PIN must be provided.

Your task is to write a test suite, `BankAccount.test.js`, that verifies that this code works as specified.

## Running the Tests

Ensure npm packages are installed, then run `npm run test`.

## Requirements

In `BankAccount.test.js`, write tests to verify that these requirements are met.

Each test will start by creating an account, execute an operation, then make assertions about the result(s).

The first test is included in the starter code as an example.

1. **Creating an account:** Create an account, then verify that the account balance is 0 and the PIN is set to the `pin` value that was passed in to the constructor.
2. **Making a deposit:** Create an account, call `deposit` with an `amount`, then verify that the account's balance increases by the deposited amount.
3. **Making a withdrawal:**

- a. Create an account, then call `withdraw` with an `amount` that is less than or equal to the account balance and the correct `pin` value. Verify that the account balance is reduced by the withdrawn amount.
- b. Create an account, then call `withdraw` with an `amount` that is greater than the account balance. Verify that the account balance doesn't change.
- c. Create an account, then call `withdraw` with an incorrect `pin` value. Verify that the account balance doesn't change.

Use Test-Driven Development (TDD) to add functionality for an account to be frozen, meaning all transactions (deposits and withdrawals) will fail. Following the TDD approach, you should write the test first, then add code to make the test pass.

4. **Freezing an account**:

- a. Create an account, call the method to freeze the account, then verify that the account is frozen.
- b. Add an assertion to the first test (creating an account) which verifies that a newly-created account is not frozen.

When you run the new test, it will fail. That's expected! Next, implement the account freezing functionality.

Add a class property `isFrozen`. Add a class method that sets the `isFrozen` class property to `true` (if the account is frozen) or `false` (if it's unfrozen).

Run the tests again and verify that they pass.

## Diving Deeper

The client requests additional functionality: they must be notified when a deposit or withdrawal is attempted on a frozen account.

Add a class property `notifyBank`. This property will hold a function that can be called to notify the bank of certain operations. Assign the property to a value passed in to the constructor.

Write a test to verify that `notifyBank` is called at the correct time. Using a [mock function](https://vitest.dev/api/mock.html#mock-functions), you can assert that the function has been called using [`toHaveBeenCalled`](https://vitest.dev/api/expect.html#tohavebeencalled).

5. **Notifying the bank**:

- Import the `vi` utility from `vitest`.
- Use `vi.fn()` create a mock function (to be used in place of `notifyBank`) and store it in a variable.
- Create a `BankAccount` instance, passing the mock function as the second argument to the constructor.
- Freeze the account.
- Call `deposit`. Verify that the account balance is unchanged, and that the mock function is called.
- Call `withdraw`. Verify that the account balance is unchanged, and that the mock function is called.

Update the code so that `notifyBank` is called when a deposit or withdrawal is attempted on a frozen account.
