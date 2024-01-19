import storageConfig from '../config/storage'

export class AccessTokenStorage {
  /** @private */
  static STORAGE_KEY = `${storageConfig.APP_STORAGE_KEY}:token`

  /**
   * @param {string} value
   */
  static set(value) {
    localStorage.setItem(this.STORAGE_KEY, value)
  }

  static get() {
    return localStorage.getItem(this.STORAGE_KEY)
  }

  static delete() {
    localStorage.removeItem(this.STORAGE_KEY)
  }
}
