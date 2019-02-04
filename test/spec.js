const assert = require("assert");
const path = require("path");
const Application = require("spectron").Application;
const electronPath = require("electron");

const app = new Application({
  path: electronPath,
  args: [path.join(__dirname, "..")]
});

describe("timer", function() {
  this.timeout(10000);
  beforeEach(() => {
    return app.start();
  });

  afterEach(() => {
    if (app && app.isRunning()) {
      return app.stop();
    }
  });
  
  it('shows an initial window', async () => {
    const count = await app.client.getWindowCount();
    return assert.equal(count, 1);
  });

  it('has the correct title', async () => {
    const title = await app.client.waitUntilWindowLoaded().getTitle();
    return assert.equal(title, 'Timer');
  });

  it('does not have the developer tools open', async () => {
    const devToolsAreOpen = await app.client
      .waitUntilWindowLoaded()
      .browserWindow.isDevToolsOpened();
    return assert.equal(devToolsAreOpen, false);
  });

  it('has a button with the text "Copy from Clipboard"', async () => {
    const h1Text = await app.client
      .getText('#h1');
    return assert.equal(h1Text, 'Timer');
  });
});
