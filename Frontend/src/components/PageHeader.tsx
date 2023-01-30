import { Typography } from '@mui/material'
import { NavLink } from '../Interfaces/NavLinks'
import NavLinks from './NavLinks'

interface Props {
  title: string
  navLinks: Array<NavLink>
}

const PageHeader = ({ title, navLinks }: Props) => {
  return (
    <div className="flex mb-2 pb-3 items-center justify-between border-b">
      <Typography gutterBottom className="text-blue-600/100">
        {title}
      </Typography>
      <div className="flex items-center justify-end w-1/3">
        <NavLinks links={navLinks} />
      </div>
    </div>
  )
}

export default PageHeader
