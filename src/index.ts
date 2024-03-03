
let cutomerId = 0;
class Bank {
  name: string;
  branches: Branch[];
  constructor(name: string) {
    this.name = name;
    this.branches = [];
  }
  addBranch(branch: Branch): void {
    this.branches.push(branch);
  }
  addCustomer(branch: Branch, customer: Customer) {
    let foundBranch = this.findBranchByName(branch.name);

    if (foundBranch) {
      foundBranch.addCustomer(customer.name);
      return true;
    }
    return false;
  }
  addCustomerTransaction(branch: Branch, customerId: number, amount: number) {
    // let foundBranch = this.branches.find((item) => item.name === branch.name);
    let foundBranch = this.findBranchByName(branch.name);
    if (foundBranch) {
      foundBranch.addCustomerTransaction(customerId, amount);
    }
  }
  findBranchByName(branchName: string) {
    let foundBranchName = this.branches.find(
      (item) => item.name === branchName
    );
    return foundBranchName;
  }

  checkBranch(branch: Branch) {
    if (this.findBranchByName(branch.name)) {
      return true;
    }
    return false;
  }

  listCustomers(branch: Branch, includeTransactions: boolean) {
    if (this.findBranchByName(branch.name)) {
      if (includeTransactions) {
        console.log(branch.getCustomers());
      } else {console.log(branch.getCustomers.name);}
    }
  }
}
// if(includeTransactions){
//   branch.getCustomers()

class Branch {
  name: string;
  customers: Customer[];
  constructor(name: string) {
    this.name = name;
    this.customers = [];
  }
  getName() {
    return this.name;
  }
  getCustomers() {
    return this.customers;
  }
  addCustomer(customerName: string) {
    const customer = new Customer(customerName);
    this.customers.push(customer);
  }
  addCustomerTransaction(customerId: number, amount: number) {
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
  name: string;
  id: number;
  transactions: Transaction[];
  constructor(name: string) {
    this.name = name;
    this.id = ++cutomerId;
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
      const transaction = new Transaction(
        amount,
        new Date().toLocaleDateString()
      );
      this.transactions.push(transaction);
      return "transaction add";
    } else {
      return "No sufficient balance";
    }
  }
}
class Transaction {
  amount: number;
  date: string;
  constructor(amount: number, date: string) {
    this.amount = amount;
    this.date = date;
  }
}


const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const customer1 = new Customer("John")
const customer2 = new Customer("Anna")
const customer3 = new Customer("John")

arizonaBank.addBranch(westBranch)
arizonaBank.addBranch(sunBranch)
arizonaBank.addBranch(westBranch) 

arizonaBank.findBranchByName("bank")
arizonaBank.findBranchByName("sun")

arizonaBank.addCustomer(westBranch, customer1)
arizonaBank.addCustomer(westBranch, customer3)
arizonaBank.addCustomer(sunBranch, customer1)
arizonaBank.addCustomer(sunBranch, customer2)

arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000)
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000)
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000)

customer1.addTransactions(-1000)
console.log(customer1.getBalance())
arizonaBank.listCustomers(westBranch, true)
arizonaBank.listCustomers(sunBranch, true)
