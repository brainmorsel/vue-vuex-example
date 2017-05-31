const API_ENDPOINT = 'http://127.0.0.1:8001/api'
var SESSION_ID

const ERROR_HTTP = 'HTTPError'


function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(ERROR_HTTP)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

function checkError(response) {
  if (response.error) {
    let error = new Error(response.error)
    error.msg = response.error_msg
    throw error
  }
  return response
}

function post(path, params, options) {
  params = params || {}
  options = options || {}

  let promise = fetch(API_ENDPOINT + path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(checkError)

  return promise
}

const debug = {
  echo: q => post('/debug/echo', {q}),
}

const user = {
  registerRequest: email => post('/user/register-request', {login: email}),
  register: params => post('/user/register', params),
}

export default {
  debug,
  user,
}
