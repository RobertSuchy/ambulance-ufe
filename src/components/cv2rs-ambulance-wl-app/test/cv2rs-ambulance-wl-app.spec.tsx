import { newSpecPage } from '@stencil/core/testing';
import { Cv2rsAmbulanceWlApp } from '../cv2rs-ambulance-wl-app';

describe('cv2rs-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [Cv2rsAmbulanceWlApp],
      html: `<cv2rs-ambulance-wl-app base-path="/"></cv2rs-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("cv2rs-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [Cv2rsAmbulanceWlApp],
      html: `<cv2rs-ambulance-wl-app base-path="/ambulance-wl/"></cv2rs-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("cv2rs-ambulance-wl-list");
  });
});