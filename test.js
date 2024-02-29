class Bank {
    constructor(name) {
      this.name = name;
      this.branches = [];
    }
    addBranch(branch) {
      this.branches.push(branch);
    }
    addCustomer(branch , customer) {
        findBranchByName(branch)
      addCustomer(customer);
    }
    addCustomerTransaction(branch, customerId, amount) {
      let foundBranch = this.branches.find((item) => item.name === branch.name);
      branch.addCustomerTransaction(customerId, amount);
    }
    findBranchByName(branch) {
        this.branches.forEach(branchName =>{
            // if(find.branch)
        })
      //   return this.branches.some((branch) => branch.name === branchName);
      // }
    }
  //   checkBranch(branch) {}
  //   listCustomers(branch) {}
   }}
  class Branch {
      constructor (name) {
          this.name = name
          this.customers = []
      }
      getName(){
          return this.name
      }
      getCustomers(){
          return this.customers
      }
      addCustomer(customer){
          this.customers.push(customer)
      }
      addCustomerTransaction(customerId, amount) {
         let foundCustomer = this.customers.find(customer => customer.id === customerId);
         if(foundCustomer) {
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
      getBalance(){
        let balence =0
        this.transactions.forEach(transaction => {
            balence += transaction.amount;
        });
       return balence
      }
      addTransactions(amount) {
          if(amount>0 || this.getBalance()>=amount){
              this.transactions.push(transaction);
              return 'transaction add'
          }else {
            return 'No sufficient balance'
          }
        }
  }
  class Transaction {
      constructor(amount,date) {
          this.amount = amount
          this.date = date
      }
      }