import { stringToDate } from '../dist'
describe('getTimeZone', () => {
  describe('Valid date', () => {
    const date = stringToDate('2018-02-13 10:22:35')
    it('should return object of Date', () => {
      expect(date instanceof Date).toBe(true)
    })
    it('should return 2018', () => {
      expect(date.getFullYear()).toBe(2018)
    })
    it('should return 1', () => {
      expect(date.getMonth()).toBe(1)
    })
    it('should return 13', () => {
      expect(date.getDate()).toBe(13)
    })
    it('should return 10', () => {
      expect(date.getHours()).toBe(10)
    })
    it('should return 22', () => {
      expect(date.getMinutes()).toBe(22)
    })
    it('should return 35', () => {
      expect(date.getSeconds()).toBe(35)
    })
  })
  describe('Invalid date', () => {
    const date = stringToDate('qwerty')
    it('should return null', () => {
      expect(date).toBe(null)
    })
  })
})
