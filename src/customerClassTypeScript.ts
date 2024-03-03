// class Customer {
//     name : string
//     id : number
//     transactions : Transaction[]
//     constructor(name : string, id : number) {
//       this.name = name;
//       this.id = id;
//       this.transactions = [];
//     }
//     getName() {
//       return this.name;
//     }
//     getId() {
//       return this.id;
//     }
//     getTransactions() {
//       return this.transactions;
//     }
//     getBalance() {
//       let balence = 0;
//       this.transactions.forEach((transaction) => {
//         balence += transaction.amount;
//       });
//       return balence;
//     }
//     addTransactions(amount: number) {
//       if (amount > 0 || this.getBalance() >= amount) {
//         const transaction = new Transaction(amount, new Date().toLocaleDateString())
//         this.transactions.push(transaction);
//         return "transaction add";
//       } else {
//         return "No sufficient balance";
//       }
//     }
//   }