import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
const getScreenshotOptions = ({ context, url }) => {
  return {
    fullPage: false, // Do not take the full page screenshot. Default is 'true' in Storyshots.
  }
}
initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl: 'http://localhost:9009',
    getScreenshotOptions,
  }),
})
