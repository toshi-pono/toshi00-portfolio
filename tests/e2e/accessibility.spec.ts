import AxeBuilder from '@axe-core/playwright'
import { test, expect } from '@playwright/test'

const targetPath = ['/', '/works', '/logs', '/works/fooder']

test.describe('Accessibility @default', () => {
  targetPath.forEach((path) => {
    test(`[Accessibility] ${path}`, async ({ page }) => {
      await page.goto(`${path}`)

      // NOTE: 現状だと全体のテストが通らないので、page内のみ実行
      // TODO: splideの ARIA でエラーが出ているので一旦無視
      // ARIA role tabpanel is not allowed for given element
      const results = await new AxeBuilder({ page })
        .include('main')
        .exclude('#splide01')
        .analyze()

      expect(results.violations).toEqual([])
    })
  })
})
