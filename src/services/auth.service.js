
const SUPER_SECRET_USERNAME = 'pinosaur'
const SUPER_SECRET_PASSWORD = 'pinohacks'

// this can be easily replaced with an actual request later
export const checkCreds = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username === SUPER_SECRET_USERNAME && password === SUPER_SECRET_PASSWORD) {
      const token = { accessToken: 'SUPER_SECRET_ACCESS_TOKEN' }
      resolve(token)
      localStorage.setItem('localData', JSON.stringify(token))
    } else {
      reject(new Error('Invalid Creds'))
    }
  })
}

export const clearCreds = () => {
  localStorage.removeItem('localData')
}

export const register = () => {

}
