import { exportAllDeclaration } from '@babel/types';
import wd from 'wd'
jasmine.DEFAULT_TIMEOUT_INTERVAL = 6000;

const PORT = 4723

const config = {
  platformName : 'android',
  deviceName : 'da7061d3',
  app : 'F:/MSC/sliit/academic/1ys1EM\0(Enterprise\0Mobility)/Labs/lab5/appium_test_app/android/app/build/outputs/apk/debug/app-debug.apk'
};

const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll (async () => {
await driver.init(config);
await driver.sleep(3000);
})

test( 'my first appium test', async () => {

  expect(await driver.hasElementByAccessibilityId('name')).toBe(true);

  const elementName = await driver.hasElementByAccessibilityId('name')

  await elementName.click();
  await elementName.type("Hasarinda");



}

)