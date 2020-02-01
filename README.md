# Puppeteer-Example
It is an app to take PDF, screenshots and headings of the given web Link.

What Puppeteer can do?
Most things that you can do manually in the browser can be done using Puppeteer! Here are a few examples to get you started:

Generate screenshots and PDFs of pages.
Crawl a SPA (Single-Page Application) and generate pre-rendered content (i.e. "SSR" (Server-Side Rendering)).
Automate form submission, UI testing, keyboard input, etc.
Create an up-to-date, automated testing environment. Run your tests directly in the latest version of Chrome using the latest JavaScript and browser features.
Capture a timeline trace of your site to help diagnose performance issues.
Test Chrome Extensions.
Give it a spin: https://try-puppeteer.appspot.com/

Getting Started
Installation
To use Puppeteer in your project, run:
npm i puppeteer
# or "yarn add puppeteer"
Note: When you install Puppeteer, it downloads a recent version of Chromium (~170MB Mac, ~282MB Linux, ~280MB Win) that is guaranteed to work with the API. To skip the download, see Environment variables.

puppeteer-core
Since version 1.7.0 we publish the puppeteer-core package, a version of Puppeteer that doesn't download Chromium by default.

npm i puppeteer-core
# or "yarn add puppeteer-core"
puppeteer-core is intended to be a lightweight version of Puppeteer for launching an existing browser installation or for connecting to a remote one. Be sure that the version of puppeteer-core you install is compatible with the browser you intend to connect to.
