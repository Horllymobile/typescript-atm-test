import { Account } from './classes/account.js';
console.log('Open you account: ');
const firstName = prompt('Enter You First Name');
const lastName = prompt('Last Name');
const account = new Account(firstName, lastName);
console.log(`
    Chose bellow option
    Enter (1) Withdraw Fund 
    Enter (2) Deposit Fund
    Enter (3) To Check Account Balance
`);
const option = prompt('Enter Option Your Option Here');
if (+option === 1) {
    const amount = prompt('Enter amount to be withdrawn: ');
    account.withDraw(+amount);
}
else if (+option === 2) {
    const amount = prompt('Enter amount to be deposited: ');
    account.deposit(+amount);
}
else if (+option === 3) {
    console.log(account.checkBalance());
}
else {
    console.log('Invalid option provided');
}
