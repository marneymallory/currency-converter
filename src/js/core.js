/* eslint-disable prefer-destructuring */
const API_KEY = process.env.API_KEY

/* eslint-enable prefer-destructuring */

export default class Convert {
  static currencyConvert(currency, amount) {
    return fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${currency}/${amount}`
    )
      .then(response => {
        if (!response.ok) {
          console.log(response)
          throw Error(response.statusText)
        }
        return response.json()
      })
      .catch(error => error)
  }
}
