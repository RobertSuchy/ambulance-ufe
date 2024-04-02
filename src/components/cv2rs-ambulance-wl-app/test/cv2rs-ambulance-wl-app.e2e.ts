import { newE2EPage } from '@stencil/core/testing';

describe('cv2rs-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv2rs-ambulance-wl-app></cv2rs-ambulance-wl-app>');

    const element = await page.find('cv2rs-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
