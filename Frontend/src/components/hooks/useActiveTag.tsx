import { useContext, useEffect } from 'react'
import { PageNavsContext } from '../../context/PageNavsContext'

export const useActiveTag = (title: string) => {
  const { setActiveTag } = useContext(PageNavsContext)
  useEffect(() => {
    ;(async () => {
      setActiveTag(title)
    })()
  })
}
