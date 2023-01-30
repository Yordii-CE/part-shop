import Crud from '../crud/Crud'
import { useActiveTag } from '../hooks/useActiveTag'

/* import { useContext, useEffect, useRef, useState } from 'react'
import { PageNavsContext } from '../../context/PageNavsContext'
import Table from '../Table'
import Modal from '../Modal'
import { Brand, Classification, Model, Vehicle } from '../../types/vehicles'
import { Button } from '@mui/material'
import { createVehicle, getVehicles } from '../../services/vehicles'
import { getBrands } from '../../services/brands'
import Fields from '../Fields'
import Comboboxes from '../Comboboxes'
import { ComboField } from '../../Interfaces/Comboboxes'
import { ToastContainer, toast } from 'react-toastify'
import { getModels } from '../../services/model'
import { getClassifications } from '../../services/classifications'
import { Provider } from '../../types/admin'
import { getProviders } from '../../services/providers'

const tableHeaders: Array<string> = [
  'Codigo',
  'Nombre',
  'Descripcion',
  'Stock',
  'Precio',

  'Marca',
  'Modelo',
  'Clasificacion',
  'Proveedor',
]

const normalFields: Array<string> = ['Nombre', 'Descripcion', 'Stock', 'Precio']

const comboboxesFields: Array<ComboField> = [
  {
    text: 'Marca',
    options: [],
  },
  {
    text: 'Modelo',
    options: [],
  },
  {
    text: 'Clasificacion',
    options: [],
  },
  {
    text: 'Proveedor',
    options: [],
  },
]
interface State {
  vehicles: Array<Vehicle>
  brands: Array<Brand>
  models: Array<Model>
  classification: Array<Classification>
  providers: Array<Provider>
} */
const VehiclesList = () => {
  /* const { setActiveTag } = useContext(PageNavsContext)
  const [vehicles, setVehicles] = useState<State['vehicles']>([])
  const [brands, setBrands] = useState<State['brands']>([])
  const [models, setModels] = useState<State['models']>([])
  const [classification, setClassification] = useState<State['classification']>(
    []
  )
  const [providers, setProviders] = useState<State['providers']>([])

  useEffect(() => {
    ;(async () => {
      setActiveTag('Lista')
      let user_token = localStorage.getItem('user-token')
      //Vehicles
      const responseVehicles = await getVehicles(user_token)

      let vehicles = responseVehicles.data.vehicles
      if (responseVehicles.status == 'success') {
        setVehicles(vehicles)
      }

      if (responseVehicles.status == 'fail') {
        toast(responseVehicles.data.message)
      }

      //Brands

      const responseBrands = await getBrands(user_token)
      if (responseBrands.status == 'success') {
        let brands = responseBrands.data.brands
        let objMarca = comboboxesFields.find((el) => el.text == 'Marca')
        objMarca ? (objMarca.options = brands) : null

        setBrands(brands)
      }
      if (responseBrands.status == 'fail') {
        toast(responseBrands.data.message)
      }

      //Models
      const responseModels = await getModels(user_token)
      if (responseModels.status == 'success') {
        let models = responseModels.data.models
        let objModelo = comboboxesFields.find((el) => el.text == 'Modelo')
        objModelo ? (objModelo.options = models) : null

        setModels(models)
      }
      if (responseModels.status == 'fail') {
        toast(responseModels.data.message)
      }

      //Classifications
      const responseClassifications = await getClassifications(user_token)
      if (responseClassifications.status == 'success') {
        let classifications = responseClassifications.data.classifications
        let objClasificacion = comboboxesFields.find(
          (el) => el.text == 'Clasificacion'
        )
        objClasificacion ? (objClasificacion.options = classifications) : null

        setClassification(classifications)
      }
      if (responseClassifications.status == 'fail') {
        toast(responseClassifications.data.message)
      }

      //Providers
      const responseProviders = await getProviders(user_token)
      if (responseProviders.status == 'success') {
        let providers = responseProviders.data.providers
        let objProveedor = comboboxesFields.find((el) => el.text == 'Proveedor')
        objProveedor ? (objProveedor.options = providers) : null

        setProviders(providers)
      }
      if (responseProviders.status == 'fail') {
        toast(responseProviders.data.message)
      }
    })()
  }, [])

  const clickOrigin = useRef<HTMLDivElement>(null)

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const {
      //@ts-ignore
      nombre,
      //@ts-ignore
      descripcion,
      //@ts-ignore
      stock,
      //@ts-ignore
      precio,
      //@ts-ignore
      marca,
      //@ts-ignore
      modelo,
      //@ts-ignore
      clasificacion,
      //@ts-ignore
      proveedor,
    } = evt.target

    let user_token = localStorage.getItem('user-token')
    const response = await createVehicle(user_token, {
      name: nombre.value,
      description: descripcion.value,
      stock: stock.value,
      price: precio.value,
      brandId: marca.value,
      modelId: modelo.value,
      classificationId: clasificacion.value,
      providerId: proveedor.value,
    })

    console.log(response)
    if (response.status == 'success') {
      toast('Vehiculo añadido con exito', {
        className: 'bg-green-500',
      })

      const responseVehicle = await getVehicles(user_token)
      let vehicles = responseVehicle.data.vehicles
      setVehicles(vehicles)
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
    alert('Edit product from data base: ' + id)
  }
  const handleDelete = (id: number) => {
    alert('Delete product from data base: ' + id)
  }
 */
  useActiveTag('Lista')
  return <Crud resourceName="products" />
}

export default VehiclesList
