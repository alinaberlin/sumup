 class Transaction {
  constructor(date, type, status, amount, paymentMethod) {
    this.date = date;
    this.type = type;
    this.status = status;
    this.amount = amount;
    this.paymentMethod = paymentMethod; 
  }

  logTransaction() {
    console.log(this.toString());
  }
  

  toString() {
    return "Date: " + this.date + " Type: " + this.type + " Status: " + this.status + 
    " Amount: " +this.amount + " Payment method: " +this.paymentMethod;
  }
 }
const types = ["payment", "refund", "sale"];
const statuses = ["success", "fail", "inProgress"];
const methods = ["card", "SEPA", "payPal"];
 
 let generateTransaction = function() {
    let type = types[Math.floor((Math.random() * 3))];
    let status = statuses[Math.floor((Math.random() * 3))];
    let paymentMethod = methods[Math.floor((Math.random() * 3))];
    let amount = Math.floor((Math.random() * 100) + 1);
    let transactionDate = new Date();
    let daysInThePast = Math.floor((Math.random() * 180) + 1);
    transactionDate.setDate(transactionDate.getDate() - daysInThePast);
    let transaction = new Transaction(transactionDate, type, status, amount, paymentMethod);
    transaction.logTransaction();
    return transaction;
 }

let generateTransactions = function(nr) {
  return Array.from({length: nr}, () => generateTransaction());
}

generateTransactions(100);

