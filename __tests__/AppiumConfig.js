export const e2eiOSConfig = () => {
  const configiOS = {
    browserName: "",
    platformName: "iOS",
    platformVersion: "14.4",
    deviceName: "iPhone 8",
    automationName: "XCUITest",
    connectHardwareKeyboard: true,
    app: "iOSAppPath",
  };
  return configiOS;
};

export const e2eAndroidConfig = () => {
  const configAndroid = {
    browserName: "",
    deviceName: "emulator-5554",
    platformName: "Android",
    platformVersion: "10",
    autoGrantPermissions: true,
    app: "AndroidAppPath(apk file)",
  };
  return configAndroid;
};
