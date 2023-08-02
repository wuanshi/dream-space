

const request = function (url: string, params: object) {
  const options = {
    // credentials: 'include',
    // mode: 'cors',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    method: 'POST',
    body: JSON.stringify(params)
  }
  return fetch('http://127.0.0.1:3000/api' + url, options)
  .then(response => response.json())
  .catch(err => {
    console.log(err);
  })

}

export default request