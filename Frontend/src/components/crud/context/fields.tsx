import { createContext, useState } from 'react'

interface Field {
  name: string
  type: string
}

interface StateContext {
  fields: Array<Field>
  setFields: (fields: Array<Field>) => void
}

export const FieldsContext = createContext<StateContext>({
  fields: [{ name: 'aa', type: 'int' }],
  setFields: (fields: Array<Field>) => {},
})

interface StateProvider {
  fields: Array<Field>
}

export const FieldsContextProvider = (props: any) => {
  let [fields, setFields] = useState<StateProvider['fields']>([
    { name: 'aa', type: 'int' },
  ])
  return (
    <FieldsContext.Provider
      value={{
        fields,
        setFields,
      }}
    >
      {props.children}
    </FieldsContext.Provider>
  )
}
