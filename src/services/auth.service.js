
/* placeholder creds */
const SUPER_SECRET_USERNAME = 'pinosaur'
const SUPER_SECRET_PASSWORD = 'pinohacks'

/* placeholder login request - saves JWT to localStorage on success */
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

/* clears localStore */
export const clearCreds = () => {
  localStorage.removeItem('localData')
}

export const register = () => { }
