import { newSpecPage } from '@stencil/core/testing';
import { Cv2_rsAmbulanceWlList } from '../cv2_rs-ambulance-wl-list';

describe('cv2_rs-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv2_rsAmbulanceWlList],
      html: `<cv2_rs-ambulance-wl-list></cv2_rs-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as Cv2_rsAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
