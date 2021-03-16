
const SUPER_SECRET_USERNAME = 'pinosaur'
const SUPER_SECRET_PASSWORD = 'pinohacks'

// this can be easily replaced with an actual request later
export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username === SUPER_SECRET_USERNAME && password === SUPER_SECRET_PASSWORD) {
      resolve({ accessToken: 'SUPER_SECRET_ACCESS_TOKEN' })
    } else {
      reject(new Error('Invalid Creds'))
    }
  })
}

export const logout = () => {
  localStorage.removeItem('localData')
}

export const register = () => {

}
