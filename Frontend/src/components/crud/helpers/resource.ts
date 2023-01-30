import axios from 'axios'
type Token = string | null

const getResource = (resource: string) => {
  return async (token: Token) => {
    if (!token) return []
    const result = await axios.get(resource, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return result.data
  }
}

const createResource = (resource: string) => {
  return async (token: Token, data: any) => {
    if (!token) return []
    const result = await axios.post(resource, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return result.data
  }
}

const updateResource = (resource: string) => {
  return async (token: Token, id: number, data: any) => {
    if (!token) return []
    const result = await axios.put(resource + `/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return result.data
  }
}

const deleteResource = (resource: string) => {
  return async (token: Token, id: number) => {
    if (!token) return []
    const result = await axios.delete(resource + `/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return result.data
  }
}

export const generateResources = (resources: Readonly<Array<string>>) => {
  let resMap = resources.map((resource) => ({
    [resource]: {
      get: getResource(resource),
      post: createResource(resource),
      put: updateResource(resource),
      delete: deleteResource(resource),
    },
  }))

  let resReduce = resMap.reduce((acc, el) => ({ ...acc, ...el }), {})
  return resReduce
}
