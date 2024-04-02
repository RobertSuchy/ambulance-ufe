/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface Cv2rsAmbulanceWlApp {
        "basePath": string;
    }
    interface Cv2rsAmbulanceWlEditor {
        "entryId": string;
    }
    interface Cv2rsAmbulanceWlList {
    }
}
export interface Cv2rsAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCv2rsAmbulanceWlEditorElement;
}
export interface Cv2rsAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCv2rsAmbulanceWlListElement;
}
declare global {
    interface HTMLCv2rsAmbulanceWlAppElement extends Components.Cv2rsAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLCv2rsAmbulanceWlAppElement: {
        prototype: HTMLCv2rsAmbulanceWlAppElement;
        new (): HTMLCv2rsAmbulanceWlAppElement;
    };
    interface HTMLCv2rsAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLCv2rsAmbulanceWlEditorElement extends Components.Cv2rsAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCv2rsAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLCv2rsAmbulanceWlEditorElement, ev: Cv2rsAmbulanceWlEditorCustomEvent<HTMLCv2rsAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCv2rsAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLCv2rsAmbulanceWlEditorElement, ev: Cv2rsAmbulanceWlEditorCustomEvent<HTMLCv2rsAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCv2rsAmbulanceWlEditorElement: {
        prototype: HTMLCv2rsAmbulanceWlEditorElement;
        new (): HTMLCv2rsAmbulanceWlEditorElement;
    };
    interface HTMLCv2rsAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLCv2rsAmbulanceWlListElement extends Components.Cv2rsAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCv2rsAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLCv2rsAmbulanceWlListElement, ev: Cv2rsAmbulanceWlListCustomEvent<HTMLCv2rsAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCv2rsAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLCv2rsAmbulanceWlListElement, ev: Cv2rsAmbulanceWlListCustomEvent<HTMLCv2rsAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCv2rsAmbulanceWlListElement: {
        prototype: HTMLCv2rsAmbulanceWlListElement;
        new (): HTMLCv2rsAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "cv2rs-ambulance-wl-app": HTMLCv2rsAmbulanceWlAppElement;
        "cv2rs-ambulance-wl-editor": HTMLCv2rsAmbulanceWlEditorElement;
        "cv2rs-ambulance-wl-list": HTMLCv2rsAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface Cv2rsAmbulanceWlApp {
        "basePath"?: string;
    }
    interface Cv2rsAmbulanceWlEditor {
        "entryId"?: string;
        "onEditor-closed"?: (event: Cv2rsAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface Cv2rsAmbulanceWlList {
        "onEntry-clicked"?: (event: Cv2rsAmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "cv2rs-ambulance-wl-app": Cv2rsAmbulanceWlApp;
        "cv2rs-ambulance-wl-editor": Cv2rsAmbulanceWlEditor;
        "cv2rs-ambulance-wl-list": Cv2rsAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cv2rs-ambulance-wl-app": LocalJSX.Cv2rsAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLCv2rsAmbulanceWlAppElement>;
            "cv2rs-ambulance-wl-editor": LocalJSX.Cv2rsAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLCv2rsAmbulanceWlEditorElement>;
            "cv2rs-ambulance-wl-list": LocalJSX.Cv2rsAmbulanceWlList & JSXBase.HTMLAttributes<HTMLCv2rsAmbulanceWlListElement>;
        }
    }
}
