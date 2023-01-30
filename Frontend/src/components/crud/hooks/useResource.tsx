import { useContext, useEffect } from 'react'
import { ResourceContext } from '../context/resource'
import { resources, services } from '../resources'

type ResourceName = typeof services[number]

export const useResource = (name: ResourceName) => {
  const { setName, setFields, setRows } = useContext(ResourceContext)

  useEffect(() => {
    setName(name)
    ;(async () => {
      let tk = localStorage.getItem('user-token')

      let response = await resources[name].get(tk)
      let rows = response.data[name]
      let fields = response.data.fields

      //MMap for dates

      rows = rows.map((row: any) => {
        if (row.date) {
          row.date = row.date.split(' ')[0]
        }
        return row
      })

      //Elimino postfijo 'Id'
      fields = fields.map((field: any) => {
        if (field.name.slice(-2) == 'Id') {
          field.name = field.name.substring(0, field.name.length - 2)
        }
        return field
      })

      setRows(rows)
      setFields(fields)
    })()
  }, [])

  //return { rows }
}
