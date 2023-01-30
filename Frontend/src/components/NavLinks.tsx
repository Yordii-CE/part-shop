import { Chip } from '@mui/material'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PageNavsContext } from '../context/PageNavsContext'
import { NavLink } from '../Interfaces/NavLinks'

import '../css/Scroll.css'

type props = {
  links: Array<NavLink>
}
/* flex bg-sky overflow-x-scroll  */
const NavLinks = ({ links }: props) => {
  const { activeTag } = useContext(PageNavsContext)
  return (
    <div className="horizontal-child scrollbar-hide">
      <div className="flex slide">
        {links.map(({ title, page }, i) => (
          <Link key={i} to={page.toString()}>
            {activeTag == title ? (
              <Chip
                className="cursor-pointer"
                color="primary"
                size="small"
                label={title}
                style={{ marginLeft: 10 }}
              />
            ) : (
              <Chip
                className="text-white cursor-pointer"
                variant="outlined"
                color="primary"
                size="small"
                label={title}
                style={{ marginLeft: 10 }}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NavLinks
