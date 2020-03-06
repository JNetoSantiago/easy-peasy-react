import React, { createContext, useMemo, useContext } from 'react'
import apisauce from 'apisauce'

const ApiContext = createContext(null)

const baseURL = 'https://jsonplaceholder.typicode.com/'
const api = apisauce.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 60000
})

export function ApiProvider(props) {
  const { children } = props

  const apiSetup = useMemo(() => {
    return {
      api
    }
  }, [api])
  
  return <ApiContext.Provider value={apiSetup}>{ children }</ApiContext.Provider>
}

export function useApi() {
  const context = useContext(ApiContext)

  if(!context) {
    throw new Error('useApi must be within a ApiProvider')
  }

  const { api } = context

  return api
}

export default ApiContext