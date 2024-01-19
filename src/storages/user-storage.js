import storageConfig from '../config/storage'

export class UserStorage {
  /** @private */
  static STORAGE_KEY = `${storageConfig.APP_STORAGE_KEY}:user`

  /**
   * @param {object} value
   */
  static set(value) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(value))
  }

  static get() {
    const user = localStorage.getItem(this.STORAGE_KEY)

    if (!user) {
      return null
    }

    return JSON.parse(user)
  }

  static delete() {
    localStorage.removeItem(this.STORAGE_KEY)
  }
}
