import { Chart } from 'react-google-charts'
import ContainerPage from '../components/ContainerPage'
import PageHeader from '../components/PageHeader'
const DashboardView = () => {
  return (
    <ContainerPage>
      <PageHeader title={'Estadisticas generales'} navLinks={[]} />
      <Chart
        chartType="Bar"
        data={[
          ['Mes', 'Ventas', 'Devoluciones'],
          ['2014', 100, 400],
          ['2015', 1170, 460],
          ['2016', 660, 1120],
          ['2017', 1030, 540],
        ]}
        width="80%"
        height="400px"
        legendToggle
      />
    </ContainerPage>
  )
}

export default DashboardView
