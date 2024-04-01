import { newE2EPage } from '@stencil/core/testing';

describe('cv2rs-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv2rs-ambulance-wl-list></cv2rs-ambulance-wl-list>');

    const element = await page.find('cv2rs-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
