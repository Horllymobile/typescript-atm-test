import { AccountInterface } from '../interface/account';


export class Account implements AccountInterface {
    private balance: number = 0;
    constructor(
        private firstName: string,
        private lastName: string,
    ){
        
    }


    withDraw(amount: number): void {
        if(amount <= 0){
            console.log(`Invalid ammount to be withdrawn ${amount}`);
            return;
        }else if(amount > this.balance){
            console.log(`Insuficient fund: Transaction failed`);
            return;
        }else if(typeof(amount) !== 'number'){
            console.log(`Invalid ammount to be withdrawn it should number not ${amount}`);
            return;
        }
        this.balance - amount;
        console.log(`Transaction successful you withdraw ${amount}
        your account balance remain ${this.balance}`);
        return;
    }

    deposit(amount: number) {

        if(amount <= 0){
            console.log(`Invalid ammount to be deposit ${amount}`);
            return;
        }

        this.balance + amount;
        console.log(`Transaction successful you deposited ${amount} 
        your account balance remain ${this.balance}`);
        return;

    }

    checkBalance(): string {
        return `You remaining acount balance is ${this.balance}`;
    }
}