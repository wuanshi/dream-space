

const request = function (baseUrl, url: string, params: object) {
  const options = {
    // credentials: 'include',
    // mode: 'cors',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    method: 'POST',
    body: JSON.stringify(params)
  }
  return fetch(baseUrl + url, options)
  .then(response => response.json())
  .catch(err => {
    console.log(err);
  })
}

function post(url: string, params: object) {
  return request('http://127.0.0.1:3000/api', url, params)
}

function cpost(url: string, params: object) {
  return request('http://127.0.0.1:3000', url, params)
}

export {
  post,
  cpost
}