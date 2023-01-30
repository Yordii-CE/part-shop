import { createContext, useState } from 'react'
import { services } from '../resources'

interface Field {
  name: string
  type: string
}
type PropName = typeof services[number]
type PropFields = Array<Field>
type PropRows = Array<any>

interface StateContext {
  name: PropName
  setName: (name: PropName) => void
  fields: PropFields
  setFields: (fields: PropFields) => void
  rows: PropRows
  setRows: (row: PropRows) => void
}

export const ResourceContext = createContext<StateContext>({
  name: 'products',
  setName: (name: PropName) => {},
  fields: [],
  setFields: (fields: PropFields) => {},
  rows: [],
  setRows: (rows: PropRows) => {},
})

interface StateProvider {
  name: PropName
  fields: PropFields
  rows: PropRows
}

export const ResourceContextProvider = (props: any) => {
  let [name, setName] = useState<StateProvider['name']>('products')
  let [fields, setFields] = useState<StateProvider['fields']>([])
  let [rows, setRows] = useState<StateProvider['rows']>([])
  return (
    <ResourceContext.Provider
      value={{
        name,
        setName,
        fields,
        setFields,
        rows,
        setRows,
      }}
    >
      {props.children}
    </ResourceContext.Provider>
  )
}
