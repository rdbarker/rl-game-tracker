import puppeteer from 'puppeteer';
import { RANK_BASE_URL } from '$lib/scripts/api';
import { createRanks } from '$lib/model/rank';

export async function get({ request, params }) {
	const url = `${RANK_BASE_URL}${params.platform}/${params.id}`;
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url, {
		waitUntil: 'networkidle2'
	});
	let bodyHTML = await page.evaluate(() => document.querySelector('body').innerText);
	const json = JSON.parse(bodyHTML);
	await browser.close();
	return { body: createRanks(json) };
}
