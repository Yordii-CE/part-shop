import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Fields from '../components/Fields'
import { signin } from '../services/users'
import { ToastContainer, toast } from 'react-toastify'

interface Field {
  name: string //minusculas
  type?: string
  value?: string
}
const formFields: Array<Field> = [
  {
    name: 'nombre',
  },
  {
    name: 'correo',
    type: 'email',
  },
  {
    name: 'contraseña',
  },
]

function SigninView() {
  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    //@ts-ignore
    const { nombre, correo, contraseña } = evt.target
    const response = await signin({
      name: nombre.value,
      email: correo.value,
      password: contraseña.value,
    })
    if (response.status == 'success') {
      toast('Registrado con exito. Prueba a iniciar sesion', {
        className: 'bg-green-500',
      })
      setTimeout(() => {
        location.href = '/login'
      }, 2000)
    }

    if (response.status == 'fail') {
      toast(response.data.message, {
        style: {
          backgroundColor: 'bg-red-600',
        },
      })
    }
  }
  return (
    <div className="w-96 mt-10 mx-auto">
      <p className="text-lg">Registrate</p>

      <form onSubmit={handleSubmit}>
        <Fields fields={formFields} />
        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{
            width: '100%',
            paddingTop: '8px',
            fontSize: 10,
            marginTop: 2,
          }}
        >
          Registrate
        </Button>
      </form>
      <Link to={'/login'}>
        <span className="block text-xs text-blue-500 text-right mt-2">
          Si ya tienes una cuenta, inicia sesion aqui
        </span>
      </Link>
    </div>
  )
}

export default SigninView
