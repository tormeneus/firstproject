const {Builder, By, Key, until} = require('selenium-webdriver');

(async function firstScript() {
  try {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('http://localhost:3000/');
    await driver.getTitle();

    driver.manage().setTimeouts({implicit: 1000})
    driver.manage().window().maximize();

    //Finding the right buttons  
    let incButton = await driver.findElement(By.name('increment'));
    let decButton = await driver.findElement(By.name('decrement'));
    let resButton = await driver.findElement(By.name('reset'));

    for (let cycle = 0; cycle < 5; cycle++) {

        //Random numbers for clicking the buttons
        let incNum = Math.floor(Math.random() * 20);;
        let incDec = Math.floor(Math.random() * 20);;

        //Resetting counter
        await resButton.click();
    
        //Clicking buttons
        for (let i = 0; i < incNum; i++) {
            await incButton.click();
        }

        for (let i = 0; i < incDec; i++) {
            await decButton.click();
        }

        //Finding the result
        let res = await driver.findElement(By.css('h1')).getText();

        //Checking the result and texting to console
        res == incNum - incDec 
            ? console.log(`Iteration #${cycle + 1}. Success. Incr: ${incNum}. Decr: ${incNum}. Res: ${res}`) 
            : console.log(`Iteration #${cycle + 1}. Error. Incr: ${incNum}. Decr: ${incNum}. Res: ${res}`);
    }

    //Closing browser window
    await driver.quit();
    
  } catch (error) {
    console.log(error)
  }
})();