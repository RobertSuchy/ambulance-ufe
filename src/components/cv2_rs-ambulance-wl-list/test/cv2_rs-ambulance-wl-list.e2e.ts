import { newE2EPage } from '@stencil/core/testing';

describe('cv2_rs-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv2_rs-ambulance-wl-list></cv2_rs-ambulance-wl-list>');

    const element = await page.find('cv2_rs-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
