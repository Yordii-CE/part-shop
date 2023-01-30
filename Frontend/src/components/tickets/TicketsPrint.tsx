import { useEffect, useState } from 'react'

//Imports of card mui
import { useRef } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import ReactToPrint from 'react-to-print'
import { Button } from '@mui/material'
import { useActiveTag } from '../hooks/useActiveTag'
import { resources } from '../crud/resources'

const Tag = ({ ticket }: any) => {
  const componentRef = useRef<HTMLDivElement>(null)
  return (
    <div>
      <div ref={componentRef}>
        <Card sx={{ maxWidth: 400, border: '1px solid gray' }}>
          <CardContent>
            <Typography
              className="text-center"
              gutterBottom
              variant="h5"
              component="div"
            >
              Autopartes y cristales medina
            </Typography>
            <div className="m-auto w-96 mt-5">
              <p>Fecha de compra: {ticket.date}</p>
              <p>Numero de venta:{ticket.id}</p>
            </div>
            <div className="flex justify-between text-center my-5">
              <p className="w-1/2">Codigo del producto</p>
              <p className="w-1/2">Precio</p>
            </div>
            <div className="flex justify-around text-center">
              <p className="w-1/2">{ticket.product}</p>
              <p className="w-1/2">${ticket.price}</p>
            </div>
            <div className="flex justify-end my-10">
              <div>
                <p>Total:${ticket.price * ticket.amount}</p>
                <p>Cliente da:${ticket.given}</p>
                <p>Cliente recibe:${ticket.changing}</p>
              </div>
            </div>

            <div className="my-5">
              <p>Vendedor: {ticket.employee}</p>
              <p>Cliente: {ticket.client}</p>
            </div>
            <Typography gutterBottom variant="h6" component="div">
              Carretera Estatal Alpuyeca- Jojutla Km.5 Xoxocotla Mor
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Telefonos: 7287383211 7341934097
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

const TicketsReprint = () => {
  useActiveTag('Imprimir')

  const [tickets, setTickets] = useState([])
  useEffect(() => {
    ;(async () => {
      let tk = localStorage.getItem('user-token')
      let response = await resources['tickets'].get(tk)
      setTickets(response.data.tickets)
    })()
  }, [])

  return (
    <div className="grid grid-cols-3 gap-2">
      {tickets.map((el: any, i) => (
        <Tag key={i} ticket={el} />
      ))}
    </div>
  )
}

export default TicketsReprint
