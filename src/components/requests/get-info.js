export const GetInfo = (user, context) => {
  fetch('https://jobcoin.gemini.com/populate/api/addresses/' + user, {
      method: 'GET'
    })
    .then(results => results.json())
    .then(function(results) {
      context.setState({
        balance: results.balance,
        transactions: results.transactions
      })
    })
}
