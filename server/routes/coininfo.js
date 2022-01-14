const express = require('express');
const router = express.Router();
const puppeteer = require('puppeteer');

//url 'https://xangle.io/project/BTC/profile'
const loadJsSite = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const desc = await page.$eval('.desc', el => el.innerText)
    return (desc)
    await browser.close();
};

// GET http://127.0.0.1:5000/api/coninfo/{coinName}
    router.get("/:coinname", async (req, res) => {
    let coinname = req.params.coinname
    loadJsSite(`https://xangle.io/project/${coinname}/profile`)
        .then((data) => {
            console.log(typeof(data))
            res.send(data)
        })
});

module.exports = router;