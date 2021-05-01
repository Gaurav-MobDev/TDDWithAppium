import { Constants } from "../src/utilities";
const { testIds } = Constants;
export default async (driver) => {
  test("SignIn", async () => {
    await driver.waitForElementByAccessibilityId(testIds.email, 80000);
    const emailElement = await driver.elementByAccessibilityId(testIds.email);
    await emailElement.click();
    await emailElement.sendKeys("test@gmail.com");
    const passwordElement = await driver.elementByAccessibilityId(
      testIds.password
    );
    await passwordElement.click();
    await passwordElement.sendKeys("Test@123");
    const login = await driver.elementByAccessibilityId(testIds.login);
    await login.click();
  });
};
