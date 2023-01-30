import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { useContext } from 'react'

import { DeleteAction } from './actions/DeleteAction'
import { UpdateAction } from './actions/UpdateAction'
import { ResourceContext } from './context/resource'
import { upperCamelCase } from './helpers/text'

//Table for Crud
interface Props {
  colSpan: number
}
const EmptyBodyRowsMessage = ({ colSpan }: Props) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan}>
        <p className="text-gray-400 font-thin text-center">
          Aun no hay registros
        </p>
      </TableCell>
    </TableRow>
  )
}
const HeaderFields = ({ fields }: any) => {
  return (
    <TableRow>
      {fields?.map((el: any, i: number) => (
        <TableCell key={i}>
          <b>{upperCamelCase(el.name)}</b>
        </TableCell>
      ))}
      <TableCell sx={{ textAlign: 'center' }}>
        <b>Acciones</b>
      </TableCell>
    </TableRow>
  )
}

const BodyRows = ({ rows }: any) => {
  return rows?.map((el: any, i: number) => {
    const columns = []
    let j = 0
    for (const key in el) {
      columns.push(<TableCell key={j}>{el[key]}</TableCell>)
      j++
    }

    return (
      <TableRow key={i}>
        {columns}
        <TableCell>
          <div className="flex justify-center cursor-pointer">
            <UpdateAction row={el}></UpdateAction>
            <DeleteAction id={el.id}></DeleteAction>
          </div>
        </TableCell>
      </TableRow>
    )
  })
}

const CrudTable = () => {
  const { fields, rows } = useContext(ResourceContext)

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <HeaderFields fields={fields} />
        </TableHead>
        <TableBody>
          {rows.length == 0 ? (
            <EmptyBodyRowsMessage colSpan={fields.length + 1} />
          ) : (
            <BodyRows rows={rows} />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CrudTable
