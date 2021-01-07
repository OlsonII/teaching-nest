import { BankAccount } from "../../src/domain/entity/bank.account";
import { SavingAccount } from "../../src/domain/entity/saving.account";
import { Transaction } from "../../src/domain/entity/transaction";
import { CurrentAccount } from "../../src/domain/entity/current.account";


describe('Bank account tests', () => {

  let bankAccount: BankAccount;

  describe('Savings account', ()=>{

    beforeEach(() => {
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

    test('Consignación posterior a la inicial correcta', () => {

      const newTransaccion: Transaction = new Transaction();
      newTransaccion.city = "Valledupar";
      newTransaccion.value = 50000;
      bankAccount.consing(newTransaccion);
      newTransaccion.city = "Valledupar";
      newTransaccion.value = 20000;
      bankAccount.remove(newTransaccion);
      newTransaccion.city = "Valledupar";
      newTransaccion.value = 49950;
      bankAccount.consing(newTransaccion);
      expect(bankAccount.balance).toBe(79950);
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


