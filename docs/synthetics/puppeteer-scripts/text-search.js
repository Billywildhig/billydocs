async function testPage(page) {
    await page.goto('https://sematext.com/');
    await page.waitForXPath('//*[contains(., "Sematext provides Monitoring & Alerting")]');
    await page.screenshot({ path: 'screenshot.jpg' });
}

module.exports = testPage;