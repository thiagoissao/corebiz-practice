import fetch from 'isomorphic-unfetch'

const baseURL = 'https://corebiz-test.herokuapp.com/api/v1'

const customFetch = async (endpoint, options) => {
  const headers = {
    'Content-Type': 'application/json',
  }

  const response = await fetch(`${baseURL}/${endpoint}`, {
    ...options,
    headers
  })

  if (response.ok) {
    return {
      ok: true,
      data: await response.json()
    }
  }
  return await response.json()
}

const post = (endpoint, data) =>
  customFetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(data)
  })

export const postNewsletter = body => post('newsletter', body)
export const getProducts = () => customFetch('products')
