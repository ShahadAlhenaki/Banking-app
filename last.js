let cutomerId = 0;
class Bank {
  constructor(name) {
    this.name = name;
    this.branches = [];
  }
  addBranch(branch) {
    this.branches.push(branch);
  }
  addCustomer(branch, customerName) {
    let foundBranch = this.findBranchByName(branch.name);
    console.log("foundBranch", foundBranch);

    if (foundBranch) {
      foundBranch.addCustomer(customerName);
      return true;
    }
    return false;
  }
  addCustomerTransaction(branch, customerId, amount) {
    let foundBranch = this.branches.find((item) => item.name === branch.name);
    branch.addCustomerTransaction(customerId, amount);
  }
  findBranchByName(branchName) {
    let foundBranchName = this.branches.find(
      (item) => item.name === branchName
    );

    return foundBranchName;
  }
}
class Branch {
  constructor(name) {
    this.name = name;
    this.customers = [];
  }
  getName() {
    return this.name;
  }
  getCustomers() {
    return this.customers;
  }
  addCustomer(customerName) {
    const customer = new Customer(customerName, ++cutomerId);
    this.customers.push(customer);
  }
  addCustomerTransaction(customerId, amount) {
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
  constructor(name, id) {
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
class Transaction {
  constructor(amount, date) {
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
