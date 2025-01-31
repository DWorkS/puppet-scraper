import { WaitForOptions } from 'puppeteer';

export const DEFAULT_CONCURRENT_PAGES = 3;

export const DEFAULT_EVALUATION_RETRIES = 10;

export const DEFAULT_PAGE_OPTIONS: WaitForOptions = {
  waitUntil: 'networkidle0',
};
