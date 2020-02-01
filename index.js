const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://github.com/pratikn0708?tab=repositories', {waitUntil: 'networkidle2'});
    
    // to take screenshot of website
    await page.screenshot({ path: 'myRepo.png' });
    // to generate PDF of webpage 
    await page.pdf({path: 'myRepos.pdf', format: 'A4'});

    // await browser.waitForTarget(() => false);  To wait for user to close window browser.

    // to print all the headings from website.
    const results = await page.evaluate(() => {
        const headingsFromWeb = document.querySelectorAll('.wb-break-all');
        const headingsList = [...headingsFromWeb];
        return headingsList.map(h => h.innerText);
    });

    console.log(results);
    
    
    await browser.close();
})();

// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
  

//   await browser.close();
// })();