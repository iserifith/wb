import puppeteer from 'puppeteer';

export class Device {
	status = false;

	async init(id) {
		try {
			const browser = await puppeteer.launch({ headless: false });
			browser.on('disconnected', () => {
				this.status = false;
			});
			const page = await browser.newPage();
			this.page = page;
			page.on('dialog', dialog => {
				dialog.accept();
			});
			await page.goto('https://web.whatsapp.com/');
		} catch (error) {
			console.log(error);
		}

		try {
			await page.setUserAgent(
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36',
			);
			await page.setViewport({ width: 1000, height: 500 });
			await page.goto('https://web.whatsapp.com/');
			await page.waitFor(3000);
			await page.screenshot({ path: 'dist/status/' + id + '.png' });
			page.screenshot({ path: this.path });
			await page.waitForRequest('https://dyn.web.whatsapp.com/wam');
		} catch (e) {
			console.log(e);
			return new Error('Something went wrong, please try again.');
		}
	}

	async getStatus(id) {
		await this.page.screenshot({ path: 'dist/status/' + id + '.png' });
	}
}
