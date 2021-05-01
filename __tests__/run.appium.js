import wd from "wd";
import SignIn from "./SignIn.appium";
import { e2eiOSConfig } from "./AppiumConfig";
const PORT = 4723;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

let config = e2eiOSConfig;

const driver = wd.promiseChainRemote("localhost", PORT);
beforeAll(async () => {
  await driver.init(config());
});

afterAll(async () => {
  await driver.sleep(5000);
  await driver.quit();
});

afterEach(async () => {
  await driver.launchApp();
});
describe("Guest context", () => {
  SignIn(driver);
});
