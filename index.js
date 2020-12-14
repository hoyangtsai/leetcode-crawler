const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');

const projectRoot = path.resolve(__dirname);

(async() => {
    const browser = await puppeteer.launch({
        headless: true, // 开启界面
        // devtools: true, // 自动开启 F12
    });

    const page = await browser.newPage(); // 新建页面
    // await page.waitFor(500); // 暂停 500ms

    await page.goto('https://leetcode.com/'); // 打开页面
    const cookie = {
        name: "LEETCODE_SESSION",
        value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMTE2MzE5IiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI1OGY2N2ExN2U3NWZiZTEyMTc5ZTkxYmIzYmQyY2RkMDI4MWY3NWY5IiwiaWQiOjExNjMxOSwiZW1haWwiOiJob3lhbmcudEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImhveWFuZ3RzYWkiLCJ1c2VyX3NsdWciOiJob3lhbmd0c2FpIiwiYXZhdGFyIjoiaHR0cHM6Ly9hc3NldHMubGVldGNvZGUuY29tL3VzZXJzL2hveWFuZ3RzYWkvYXZhdGFyXzE1NTIwMjY5NDIucG5nIiwicmVmcmVzaGVkX2F0IjoxNTk5NDk5NDAxLCJpcCI6IjE5My4xMTAuMjAyLjE5NCIsImlkZW50aXR5IjoiNTFmOTNkN2Y0NzRhZWZkN2VkN2MyZTBmNzBhZDcwZmUiLCJzZXNzaW9uX2lkIjo5NTgyOTMsIl9zZXNzaW9uX2V4cGlyeSI6MTIwOTYwMH0.J8eQteeCHGYjXS5_1HpCdqgM7IYU1gqIc6s3zs5hcpg",
        domain: ".leetcode.com",
        path: "/",
        expires: new Date('2020/09/22').getTime()
    };
    
    await page.setCookie(cookie); // 设置cookie

    await page.goto(
      'https://leetcode.com/problems/number-of-islands/solution/',
      { waitUntil: 'networkidle0' }
    );
    page.waitFor(1000);

    // const content = await page.content();
    // await fs.outputFile(path.join(projectRoot, 'output', 'number-of-islands.html'), content);
    await browser.close();
})();