import { Button, CardActions } from '@mui/material'
import Barcode from 'react-jsbarcode'
import ContainerPage from '../components/ContainerPage'
import ContainerTagPage from '../components/ContainerTagPage'
import PageHeader from '../components/PageHeader'

//Imports of card mui
import { useEffect, useRef, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { resources } from '../components/crud/resources'
import ReactToPrint from 'react-to-print'

const Tag = ({ tag }: any) => {
  const componentRef = useRef<HTMLDivElement>(null)
  return (
    <div>
      <div ref={componentRef}>
        <Card sx={{ maxWidth: 345 }}>
          <Barcode className="mx-auto" value={tag.code} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {tag.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {tag.description}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <ReactToPrint
        trigger={() => <Button size="small">Imprimir</Button>}
        content={() => componentRef.current}
      />
    </div>
  )
}

const TagsView = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    ;(async () => {
      let tk = localStorage.getItem('user-token')
      let response = await resources['products'].get(tk)
      setProducts(response.data.products)
    })()
  }, [])
  return (
    <ContainerPage>
      <PageHeader title={'Etiquetas'} navLinks={[]} />
      <ContainerTagPage>
        <div className="grid grid-cols-4 gap-5">
          {products.map((el: any, i) => (
            <Tag key={i} tag={el} />
          ))}
        </div>
      </ContainerTagPage>
    </ContainerPage>
  )
}

export default TagsView
