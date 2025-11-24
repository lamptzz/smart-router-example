const { parseAmount, AlphaRouter, routeAmountsToString, Protocol } = require('@thenafi/router-sdk')
const { Token, ChainId, TradeType } = require('thena-sdk-core')

const router = new AlphaRouter({
  chainId: ChainId.BSC,
  rpcUrl: 'https://bsc-dataseed.binance.org',
})

const TOKEN_IN = new Token(
  ChainId.BSC,
  '0x55d398326f99059ff775485246999027b3197955',
  18,
  'USDT',
  'Tether USD'
)

const TOKEN_OUT = new Token(
  ChainId.BSC,
  '0xf4c8e32eadec4bfe97e0f595add0f4450a863a11',
  18,
  'THE',
  'Thena'
)

// SDK usage
async function generateRoute() {
  const amountIn = parseAmount('100', TOKEN_IN)
  const route = await router.route(amountIn, TOKEN_OUT, TradeType.EXACT_INPUT, undefined)
  return route
}

// API usage
async function fetchQuoteFromAPI() {
  const amountIn = '0.005'
  const response = await fetch(
    `https://api.thena.fi/api/v3/trading-route?chainId=56&tokenIn=${TOKEN_IN.address}&tokenOut=${TOKEN_OUT.address}&amountIn=${amountIn}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const { data } = await response.json()
  return data
}

async function main() {
  const route = await fetchQuoteFromAPI()
  if (!route) {
    console.log('No route found')
    return
  }

  console.log('quote', route.quote)
  console.log('priceImpact', route.priceImpact)
}

main()
