const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const topPage = await page.goto('https://t0m0120.github.io/recolog/');

  const firstPageLink = await page.$('.post-card');
  await firstPageLink.click();

  await page.screenshot({path: 'screenshot/top.png', fullPage: true});

  await browser.close();
})();