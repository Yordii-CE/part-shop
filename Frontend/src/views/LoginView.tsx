import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Fields from '../components/Fields'
import { login } from '../services/users'
interface Field {
  name: string //minusculas
  type?: string
  value?: string
}
const formFields: Array<Field> = [
  {
    name: 'correo',
    type: 'email',
  },
  {
    name: 'contraseña',
    type: 'password',
  },
]

function LoginView() {
  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    //@ts-ignore
    const { correo, contraseña } = evt.target
    const response = await login(correo.value, contraseña.value)
    if (response.status == 'success') {
      localStorage.setItem('user-token', response.data.token)
      location.href = '/main'
    }

    if (response.status == 'fail') {
      toast(response.data.message, {
        className: 'bg-red-600',
        style: {
          fontSize: 13,
        },
      })
    }
  }
  return (
    <div className="w-96 mt-10 mx-auto">
      <p className="text-lg">Iniciar sesion</p>

      <form className="border p-5" onSubmit={handleSubmit}>
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
          Iniciar sesion
        </Button>
        <Link to={'/signin'}>
          <span className="block text-xs text-blue-500 text-right mt-2">
            Registrate aqui si no tienes una cuenta
          </span>
        </Link>
      </form>
    </div>
  )
}

export default LoginView
