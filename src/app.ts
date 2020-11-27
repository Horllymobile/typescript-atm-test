import { Account } from './classes/account.js';

console.log('Open you account: ')

const firstName: string = prompt('Enter You First Name')!;
const lastName: string = prompt('Last Name')!;

const account = new Account(firstName, lastName);

console.log(`
    Chose bellow option
    Enter (1) Withdraw Fund 
    Enter (2) Deposit Fund
    Enter (3) To Check Account Balance
`);

const option: any = prompt('Enter Option Your Option Here');

if (+option === 1) {
    const amount: any = prompt('Enter amount to be withdrawn: ')!
    account.withDraw(+amount);
} else if (+option === 2) {
    const amount: any = prompt('Enter amount to be deposited: ')!
    account.deposit(+amount);
} else if (+option === 3) {
    console.log(account.checkBalance())
}else{
    console.log('Invalid option provided');
}
