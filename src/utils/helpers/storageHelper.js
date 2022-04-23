export const saveToLocalStorage = (key, value) => {
   try {
      localStorage.setItem(key, JSON.stringify(value))
   } catch (error) {
      console.log(error.message)
   }
}
// eslint-disable-next-line consistent-return
export const getFromLocalStorage = (key) => {
   try {
      const data = JSON.parse(localStorage.getItem(key))

      return data
   } catch (error) {
      console.log(error.message)
   }
}
export const removeFromLocalStorage = (key) => {
   try {
      localStorage.removeItem(key)
   } catch (error) {
      console.log(error.message)
   }
}
