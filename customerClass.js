// class Customer {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//     this.transactions = [];
//   }
//   getName() {
//     return this.name;
//   }
//   getId() {
//     return this.id;
//   }
//   getTransactions() {
//     return this.transactions;
//   }

//   getBalance(){
//     let balence =0
//     this.transactions.forEach(transaction => {
//         balence += transaction.amount;
//     });
//    return balence
//   }

//   addTransactions(amount) {
//     if(amount>0 || this.getBalance()>=amount){
//         this.transactions.push(amount);
//         return "transaction add"
//     }else {
//       return "No sufficient balance"
//     }
//   }
// }



class Customer {
    constructor(name , id) {
      this.name = name;
      this.id = id;
      this.transactions = [];
    }
    getName() {
      return this.name;
    }
    getId() {
      return this.id;
    }
    getTransactions() {
      return this.transactions;
    }
    getBalance() {
      let balence = 0;
      this.transactions.forEach((transaction) => {
        balence += transaction.amount;
      });
      return balence;
    }
    addTransactions(amount) {
      if (amount > 0 || this.getBalance() >= amount) {
        this.transactions.push(amount);
        return "transaction add";
      } else {
        return "No sufficient balance";
      }
    }
  }
