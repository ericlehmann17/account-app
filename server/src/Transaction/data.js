// creating in-memory database for demonstration and testing
transactions = []
//note - tabnine pretty much wrote all the transaction data code
// after I wrote the account data code. pretty impressive
for(var i=0; i<100; i++){
  transaction = {
    id: i.toString(),
    accountId: (Math.floor(i/10)%10).toString(),
    amount: (i%15) * 50,
    date: new Date(2018, 1, i%30, 0, 0, 0, 0),
    type: i % 2 == 0 ? 'withdraw' : 'deposit'
  }
  transactions.push(transaction);
}

module.exports = transactions;