// @ts-check
import { test, expect } from '@playwright/test';

test('has shows random fact and image', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  const text = await page.getByTestId('fact')
  const image = await page.getByRole('img')

  await expect(text).not.toBeEmpty();

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith('blob:http://localhost:8080')).toBeTruthy()
});
