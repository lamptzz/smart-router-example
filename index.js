const { parseAmount, AlphaRouter, routeAmountsToString, Protocol } = require('@thenafi/router-sdk')
const { Token, ChainId, TradeType } = require('thena-sdk-core')

const router = new AlphaRouter({
  chainId: ChainId.BSC,
  rpcUrl: 'https://bsc-dataseed.binance.org',
})

const TOKEN_IN = new Token(
  ChainId.BSC,
  '0xf4c8e32eadec4bfe97e0f595add0f4450a863a11',
  18,
  'THE',
  'THENA'
)

const TOKEN_OUT = new Token(
  ChainId.BSC,
  '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  18,
  'WBNB',
  'WBNB'
)

async function generateRoute() {
  const amountIn = parseAmount('1', TOKEN_IN)
  const route = await router.route(amountIn, TOKEN_OUT, TradeType.EXACT_INPUT, undefined)
  return route
}

async function main() {
  const route = await generateRoute()
  console.log('route', routeAmountsToString(route.route))
  console.log('quoteExactIn', route.quote.toFixed(Math.min(route.quote.currency.decimals, 10)))
  console.log('priceImpact', route.trade.priceImpact.toFixed(2))
}

main()
