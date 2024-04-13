/**
 * global theme-cache.
 *
 * @author tangjiahui
 * @date 2024/04/13
 */
import type { ThemeKey } from '../index';

type ThemeCacheType = Map<ThemeKey, string>;
type ThemeCacheProps = {
  /**
   * style attributes 'id', which also a value for 'className'.
   */
  id: string;
  /**
   * set 'className' at.
   */
  effectDom?: HTMLElement;
  /**
   * mount 'style' at.
   */
  mountDom?: HTMLElement;
};

export class ThemeCache {
  private style: HTMLStyleElement | undefined;
  private cache: ThemeCacheType = new Map();
  private mountDom: HTMLElement;
  private effectDom: HTMLElement;
  private id: string;

  constructor(props: ThemeCacheProps) {
    this.mountDom = props.mountDom || document.head;
    this.effectDom = props.effectDom || document.body;
    this.id = props.id;
  }

  /**
   * add a new variable.
   * @param key variable-key
   * @param value variable-value
   */
  public add(key: ThemeKey, value: string) {
    // if 'key' and 'value' exist, don't generate continue.
    if (this.cache.get(key) === value) {
      return;
    }
    this.cache.set(key, value);
    this.flush();
  }

  /**
   * get variable value.
   * @param key
   */
  public get(key: ThemeKey): string {
    return this.cache.get(key) || this.getFromRoot(key);
  }

  /**
   * remove a cache.
   * @param key
   */
  public remove(key?: ThemeKey): void {
    if (!key) {
      this.cache.clear();
      this.flush();
      return;
    }

    if (this.cache.has(key)) {
      this.cache.delete(key);
      this.flush();
    }
  }

  /**
   * update cache to style tag.
   * @private
   */
  private flush() {
    const className = this.getClassName();
    if (!this.cache.size) {
      this.effectDom.classList.remove(className);
      this.unmountStyle();
      return;
    }

    if (!this.effectDom.classList.contains(className)) {
      this.effectDom.classList.add(className);
    }
    this.getStyle().innerHTML = this.generateStyleText();
  }

  /**
   * get the default value from ':root'.
   * @param key variable-key
   * @private
   */
  private getFromRoot(key: ThemeKey): string {
    const root = document.querySelector(':root');
    if (!root) {
      return '';
    }
    return getComputedStyle(root).getPropertyValue(key);
  }

  /**
   * generate style text from cache.
   * @private
   */
  private generateStyleText(): string {
    let str: string = '';
    this.cache.forEach((v, k) => {
      str += `${k}:${v};`;
    });
    return str ? `.${this.getClassName()}{${str}}` : '';
  }

  /**
   * generate className.
   * @private
   */
  private getClassName(): string {
    return this.id;
  }

  /**
   * get style tag.
   * @private
   */
  private getStyle(): HTMLStyleElement {
    if (!this.style) {
      this.style = document.createElement('style');
      this.style.setAttribute('id', this.id);
      this.mountDom.appendChild(this.style);
    }
    return this.style;
  }

  /**
   * unmount style tag.
   * @private
   */
  private unmountStyle() {
    if (this.style) {
      this.mountDom.removeChild(this.style);
      this.style = undefined;
    }
  }
}
