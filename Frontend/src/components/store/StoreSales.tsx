/* import { Button } from '@mui/material'
import { useContext, useEffect, useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { PageNavsContext } from '../../context/PageNavsContext'
import { ComboField } from '../../Interfaces/Comboboxes'
import { getClients } from '../../services/clients'
import { getEmployees } from '../../services/employees'
import { createSale, getSales } from '../../services/sales'
import { getVehicles } from '../../services/vehicles'
import { Client, Employee } from '../../types/admin'
import { Sale } from '../../types/store'
import { Vehicle } from '../../types/vehicles'
import Comboboxes from '../Comboboxes'
import Fields from '../Fields'
import Modal from '../Modal'
import Table from '../Table'

const tableHeaders: Array<string> = [
  'Codigo',
  'Fecha',
  'Cantidad',
  'Empleado',
  'Cliente',
  'Vehiculo',
]
const comboboxesFields: Array<ComboField> = [
  {
    text: 'Empleado',
    options: [],
  },
  {
    text: 'Cliente',
    options: [],
  },
  {
    text: 'Vehiculo',
    options: [],
  },
]
const normalFields: Array<string> = ['Fecha', 'Cantidad']

interface State {
  sales: Array<Sale>
  employees: Array<Employee>
  clients: Array<Client>
  vehicles: Array<Vehicle>
} */

import Crud from '../crud/Crud'
import { useActiveTag } from '../hooks/useActiveTag'

const StoreSales = () => {
  useActiveTag('Ventas')
  return <Crud resourceName="sales" />
  /*   const { setActiveTag } = useContext(PageNavsContext)
  const [sales, setSales] = useState<State['sales']>([])
  const [employees, setEmployees] = useState<State['employees']>([])
  const [clients, setClients] = useState<State['clients']>([])
  const [vehicles, setVehicles] = useState<State['vehicles']>([])
  useEffect(() => {
    ;(async () => {
      setActiveTag('Ventas')
      let user_token = localStorage.getItem('user-token')

      //Providers
      const responseSales = await getSales(user_token)

      if (responseSales.status == 'success') {
        let sales = responseSales.data.sales
        setSales(sales)
      }
      if (responseSales.status == 'fail') {
        toast(responseSales.data.message)
      }

      //Employees
      const responseEmployees = await getEmployees(user_token)
      if (responseEmployees.status == 'success') {
        let employees = responseEmployees.data.employees
        let objEmployee = comboboxesFields.find((el) => el.text == 'Empleado')
        objEmployee ? (objEmployee.options = employees) : null

        setEmployees(employees)
      }
      if (responseEmployees.status == 'fail') {
        toast(responseEmployees.data.message)
      }

      //Clients
      const responseClients = await getClients(user_token)
      if (responseClients.status == 'success') {
        let clients = responseClients.data.clients
        let objClient = comboboxesFields.find((el) => el.text == 'Cliente')
        objClient ? (objClient.options = clients) : null

        setClients(clients)
      }
      if (responseClients.status == 'fail') {
        toast(responseClients.data.message)
      }

      //Vehicles
      const responseVehicles = await getVehicles(user_token)
      if (responseVehicles.status == 'success') {
        let vehicles = responseVehicles.data.vehicles
        let objVehicle = comboboxesFields.find((el) => el.text == 'Vehiculo')
        objVehicle ? (objVehicle.options = vehicles) : null

        setVehicles(vehicles)
      }
      if (responseVehicles.status == 'fail') {
        toast(responseVehicles.data.message)
      }
    })()
  }, [])

  const clickOrigin = useRef<HTMLDivElement>(null)

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const {
      //@ts-ignore
      fecha,
      //@ts-ignore
      cantidad,
      //@ts-ignore
      empleado,
      //@ts-ignore
      cliente,
      //@ts-ignore
      vehiculo,
    } = evt.target

    let user_token = localStorage.getItem('user-token')
    const response = await createSale(user_token, {
      date: fecha.value,
      number: cantidad.value,
      employeeId: empleado.value,
      clientId: cliente.value,
      vehicleId: vehiculo.value,
    })

    console.log(response)
    if (response.status == 'success') {
      toast('Venta añadido con exito', {
        className: 'bg-green-500',
      })

      const responseSales = await getSales(user_token)
      let sales = responseSales.data.sales
      setSales(sales)
    }

    if (response.status == 'fail') {
      toast(response.data.message, {
        style: {
          backgroundColor: 'bg-red-600',
        },
      })
    }
  }

  const handleEdit = (id: number) => {
    alert('Edit sale from data base: ' + id)
  }
  const handleDelete = (id: number) => {
    alert('Delete sale from data base: ' + id)
  }

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div ref={clickOrigin} className="flex justify-end mb-2">
        <Button size="small" sx={{ fontSize: 10 }}>
          Añadir nueva venta
        </Button>
      </div>

      <Modal target={clickOrigin} title="Datos de la venta">
        <form onSubmit={handleSubmit}>
          <Fields fields={normalFields} />
          <Comboboxes fields={comboboxesFields} />

          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{
              fontSize: 10,
              marginTop: 2,
            }}
          >
            Añadir nueva venta
          </Button>
        </form>
      </Modal>

      <Table
        headers={tableHeaders}
        rows={sales}
                handleEdit={handleEdit} 
        handleDelete={handleDelete}
      ></Table>
    </>
  ) */
}

export default StoreSales
