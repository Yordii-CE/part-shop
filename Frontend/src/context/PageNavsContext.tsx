import { createContext, useState } from 'react'

export const PageNavsContext = createContext({
  activeTag: '',
  setActiveTag: (value: string) => {},
})

export const PageNavsContextProvider = (props: any) => {
  let [activeTag, setActiveTag] = useState('')
  return (
    <PageNavsContext.Provider
      value={{
        activeTag,
        setActiveTag,
      }}
    >
      {props.children}
    </PageNavsContext.Provider>
  )
}
