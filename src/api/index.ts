// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

async function client<Res>(
  endpoint: string,
  { body, ...customConfig }: any = {},
): Promise<Res> {
  const headers = { 'Content-Type': 'application/json' }

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  let data
  try {
    const response = await window.fetch(endpoint, config)
    data = await response.json()
    if (response.ok) {
      return data
    }
    throw new Error(response.statusText)
  } catch (err) {
    return Promise.reject(err.message ? err.message : data)
  }
}

client.get = function <Res>(
  endpoint: string,
  customConfig: any = {},
): Promise<Res> {
  return client(endpoint, { ...customConfig, method: 'GET' })
}

client.post = function <Res, Req>(
  endpoint: string,
  body: Req,
  customConfig: any = {},
): Promise<Res> {
  return client(endpoint, { ...customConfig, body })
}

export default client
