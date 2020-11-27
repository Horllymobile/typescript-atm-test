export class Account {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = 0;
    }
    withDraw(amount) {
        if (amount <= 0) {
            console.log(`Invalid ammount to be withdrawn ${amount}`);
            return;
        }
        else if (amount > this.balance) {
            console.log(`Insuficient fund: Transaction failed`);
            return;
        }
        else if (typeof (amount) !== 'number') {
            console.log(`Invalid ammount to be withdrawn it should number not ${amount}`);
            return;
        }
        this.balance - amount;
        console.log(`Transaction successful you withdraw ${amount}
        your account balance remain ${this.balance}`);
        return;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log(`Invalid ammount to be deposit ${amount}`);
            return;
        }
        this.balance + amount;
        console.log(`Transaction successful you deposited ${amount} 
        your account balance remain ${this.balance}`);
        return;
    }
    checkBalance() {
        return `You remaining acount balance is ${this.balance}`;
    }
}
