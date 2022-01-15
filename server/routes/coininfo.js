const express = require('express');
const router = express.Router();
const puppeteer = require('puppeteer');

//url 'https://xangle.io/project/BTC/profile'
const loadJsSite = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    if (page.$('.desc')) {
        const desc = await page.$eval('.desc', el => el.innerText)
        await browser.close();
        return (desc)
    }
    else if (page.$('.description')) {
        const desc = await page.$eval('.description', el => el.innerText)
        await browser.close();
        return (desc)
    }
    else {
        console.log('no matching for selector')
    }
};

// GET http://127.0.0.1:5000/api/coninfo/{coinName}
router.get("/:coinname", async (req, res) => {
    let coinname = req.params.coinname
    loadJsSite(`https://xangle.io/project/${coinname}/profile`)
        .then((data) => {
            console.log(typeof (data))
            res.send(data)
        })
});

module.exports = router;