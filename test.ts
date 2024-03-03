
// class Customer {
//   name : string
//   id : number
//   constructor(name : string , id : number) {
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
//   getBalance() {
//     let balence = 0;
//     this.transactions.forEach((transaction) => {
//       balence += transaction.amount;
//     });
//     return balence;
//   }
//   addTransactions(amount) {
//     if (amount > 0 || this.getBalance() >= amount) {
//       this.transactions.push(amount);
//       return "transaction add";
//     } else {
//       return "No sufficient balance";
//     }
//   }
// }


let cutomerId = 0;
class Bank {
  name : string
  branches : Branch[]
  constructor(name : string) {
    this.name = name;
    this.branches = [];
  }
  addBranch(branch : Branch): void{
    this.branches.push(branch);
  }
  addCustomer(branch : Branch, customerName : string) {
    let foundBranch = this.findBranchByName(branch.name);
    console.log("foundBranch", foundBranch);

    if (foundBranch) {
      foundBranch.addCustomer(customerName);
      return true;
    }
    return false;
  }
  addCustomerTransaction(branch : Branch, customerId : number , amount :number ) {
    // let foundBranch = this.branches.find((item) => item.name === branch.name);
    let foundBranch = this.findBranchByName(branch.name);
    if(foundBranch){
      foundBranch.addCustomerTransaction(customerId, amount);
  }}
  findBranchByName(branchName : string) {
    let foundBranchName = this.branches.find(
      (item) => item.name === branchName
    );

    return foundBranchName;
  }
}
class Branch {
  name : string
  customers : Customer[]
  constructor(name : string) {
    this.name = name;
    this.customers = [];
  }
  getName() {
    return this.name;
  }
  getCustomers() {
    return this.customers;
  }
  addCustomer(customerName : string) {
    const customer = new Customer(customerName, ++cutomerId);
    this.customers.push(customer);
  }
  addCustomerTransaction(customerId : number, amount: number) {
    let foundCustomer = this.customers.find(
      (customer) => customer.id === customerId
    );
    if (foundCustomer) {
      foundCustomer.addTransactions(amount);
      return true;
    } else {
      return false;
    }
  }
}
class Customer {
  name : string
  id : number
  transactions : Transaction[]
  constructor(name : string, id : number) {
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
  addTransactions(amount: number) {
    if (amount > 0 || this.getBalance() >= amount) {
      const transaction = new Transaction(amount, new Date().toLocaleDateString())
      this.transactions.push(transaction);
      return "transaction add";
    } else {
      return "No sufficient balance";
    }
  }
}
class Transaction {
  amount : number
  date : string
  constructor(amount : number, date : string) {
    this.amount = amount;
    this.date = date;
  }
}

const riyadh = new Bank("Riyadh");
const westBank = new Branch("West Bank");

riyadh.addBranch(westBank);
console.log(riyadh.name);

riyadh.addCustomer(westBank, "John");
riyadh.addCustomer(westBank, "Sky");
riyadh.addCustomer(westBank, "Smith");

console.log(westBank.getCustomers());
