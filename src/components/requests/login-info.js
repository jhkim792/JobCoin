export const LoginInfo = (address, context) => {
  fetch('https://jobcoin.gemini.com/populate/api/addresses/' + address, {
      method: "GET",
    })
    .then(results => results.json())
    .then(function(results) {
      var unknownUser = (results.balance === "0" && results.transactions.length === 0);
      if (!unknownUser) {
        context.setState({
          login: true,
          user: address
        })
      } else {
        context.setState({
          error: true
        })
      }
    })
}
