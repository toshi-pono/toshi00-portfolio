import { setTimeout } from 'timers/promises'

import fetch from 'node-fetch'

import { logs } from '../../src/data/logs'
import { works } from '../../src/data/works'

const TIME_OUT = 1000
const skipURL = ['https://marketplace.visualstudio.com']

async function urlTest(url: string): Promise<boolean> {
  if (skipURL.some((s) => url.startsWith(s))) {
    console.log(`Skip   : --- ${url}`)
    return true
  }
  const res = await fetch(url)

  if (res.status === 200) {
    console.log(`Success: ${res.status} ${url}`)
    return true
  }
  console.log(`Error  : ${res.status} ${url}`)
  return false
}

async function main() {
  let success = true
  for (const log of logs) {
    if (log.links === undefined) continue
    for (const link of log.links) {
      const result = await urlTest(link.url)
      if (!result) success = false
      await setTimeout(TIME_OUT)
    }
  }

  for (const work of works) {
    for (const link of work.links) {
      const result = await urlTest(link.url)
      if (!result) success = false
      await setTimeout(TIME_OUT)
    }
  }

  if (success) {
    console.log('All success')
  } else {
    console.error('Some error')
    process.exit(1)
  }
}

main()
