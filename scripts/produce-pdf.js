const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto("http://localhost:8080?resumeonly=true", {
		waitUntil: "networkidle2"
	});


	await page.pdf({
		path: "output/resume.pdf",
		format: "Letter",
		printBackground: true
	});

	await browser.close();
})();