import { newSpecPage } from '@stencil/core/testing';
import { Cv2rsAmbulanceWlList } from '../cv2rs-ambulance-wl-list';

describe('cv2rs-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv2rsAmbulanceWlList],
      html: `<cv2rs-ambulance-wl-list></cv2rs-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as Cv2rsAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
