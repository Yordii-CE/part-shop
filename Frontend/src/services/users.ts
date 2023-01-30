import axios from 'axios'
import { User } from '../typesa/user'

export const login = async (correo: string, contraseña: string) => {
  const result = await axios.post('/login', {
    email: correo,
    password: contraseña,
  })
  return result.data
}

export const signin = async (user: User) => {
  const result = await axios.post('/signin', user)
  return result.data
}
