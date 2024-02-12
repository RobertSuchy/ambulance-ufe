import { newSpecPage } from '@stencil/core/testing';
import { Cv2_rsAmbulanceWlList } from '../cv2_rs-ambulance-wl-list';

describe('cv2_rs-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv2_rsAmbulanceWlList],
      html: `<cv2_rs-ambulance-wl-list></cv2_rs-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <cv2_rs-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cv2_rs-ambulance-wl-list>
    `);
  });
});
