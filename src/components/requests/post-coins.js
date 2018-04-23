export const PostCoins = (user, destination, amount, context, event) => {
  fetch('http://jobcoin.gemini.com/populate/api/transactions?' + "fromAddress=" + user + "&toAddress=" + destination + "&amount=" + amount, {
      method: "POST",
    })
    .then(results => results.json())
    .then(function(results) {
      if (results.status === "OK") {
        context.updateComponents(event);
        context.setState({
          destination: "",
          amount: "",
          error: false,
          message: "Successful Transfer of " + amount + " JobCoin"
        })
      } else {
        context.setState({
          error: results.error,
        })
      }
    })
}
