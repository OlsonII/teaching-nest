import { BankAccount } from "../../src/domain/entity/bank.account";
import { SavingAccount } from "../../src/domain/entity/saving.account";
import { Transaction } from "../../src/domain/entity/transaction";
import { CurrentAccount } from "../../src/domain/entity/current.account";


describe('Bank account tests', () => {

  let bankAccount: BankAccount;

  describe('Savings account', ()=>{

    beforeAll(() => {
      bankAccount = new SavingAccount();
      bankAccount.number = '0000';
      bankAccount.city = 'Valledupar';
      bankAccount.ownerId = '1065';
      bankAccount.balance = 0;
    });

    test('Consign negative or zero', () => {
      const newTransaction: Transaction = new Transaction();
      newTransaction.city = 'Valledupar';
      newTransaction.value = -50000;
      bankAccount.consing(newTransaction);
      expect(bankAccount.balance).toBe(0);
    });

    test('Correct consign', () => {
      const newTransaction: Transaction = new Transaction();
      newTransaction.city = 'Valledupar';
      newTransaction.value = 50000;
      bankAccount.consing(newTransaction);
      expect(bankAccount.balance).toBe(50000);
    });

  });

  describe('Current account', () => {

    beforeAll(() => {
      bankAccount = new CurrentAccount();
      bankAccount.number = '0000';
      bankAccount.city = 'Valledupar';
      bankAccount.ownerId = '1066';
      bankAccount.balance = 0;
    });

    test('Consign negative or zero', () => {
      const newTransaction: Transaction = new Transaction();
      newTransaction.city = 'Valledupar';
      newTransaction.value = -50000;
      bankAccount.consing(newTransaction);
      expect(bankAccount.balance).toBe(0);
    });

    test('Correct consign', () => {
      const newTransaction: Transaction = new Transaction();
      newTransaction.city = 'Valledupar';
      newTransaction.value = 100000;
      bankAccount.consing(newTransaction);
      expect(bankAccount.balance).toBe(100000);
    });
  });

});


