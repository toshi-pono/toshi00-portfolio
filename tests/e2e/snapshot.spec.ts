import { test } from '@playwright/test'

const targetPath = ['/', '/works', '/logs', '/works/fooder']

test.describe('SnapShot @shot', () => {
  targetPath.forEach((path) => {
    test(`[SnapShot] ${path}`, async ({ page, browserName, isMobile }) => {
      await page.goto(`${path}`, { waitUntil: 'networkidle' })

      await page.screenshot({
        path: `test-results/snap/${path.replaceAll('/', '')}-${browserName}${
          isMobile ? '-m-' : ''
        }.png`,
      })
    })
  })
})
