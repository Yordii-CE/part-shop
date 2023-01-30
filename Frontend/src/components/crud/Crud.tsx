import CrudTable from './Table'
import { useResource } from './hooks/useResource'
import { services } from './resources'
import { CreateAction } from './actions/CreateAction'

interface Props {
  resourceName: typeof services[number]
}
const Crud = ({ resourceName }: Props) => {
  useResource(resourceName)
  return (
    <>
      <CreateAction>Añadir registro</CreateAction>
      <CrudTable></CrudTable>
    </>
  )
}

export default Crud
