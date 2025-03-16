import { defineConfig, devices } from '@playwright/test';
require('dotenv').config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  globalTimeout: 60 * 60 * 1000,
  timeout: 2 * 60 * 1000,
  expect: { timeout: 5_000 },
  retries: process.env.CI ? 1 : 1,
  workers: process.env.CI ? 5 : 5,
  reporter: [['allure-playwright']],
  use: {
    baseURL: process.env.BASE_URL,
    screenshot: process.env.CI ? 'only-on-failure' : 'on',
    video: process.env.CI ? 'off' : 'off',
    trace: process.env.CI ? 'retain-on-failure' : 'on',
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1920, height: 1080 } },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], viewport: { width: 1920, height: 1080 } },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], viewport: { width: 1920, height: 1080 } },
    },
  ],
});
