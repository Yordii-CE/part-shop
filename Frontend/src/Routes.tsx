import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginView from './views/LoginView'
import MainView from './views/MainView'
import _404 from './views/404'
import StoreView from './views/StoreView'
import ProductsView from './views/ProductsView'
import AdminView from './views/AdminView'
import TagsView from './views/TagsView'
import ReportsView from './views/ReportsView'
import TicketsView from './views/TicketsView'

import ProductsList from './components/product/ProductsList'
import ProductsCompatibility from './components/product/ProductsCompatibility'
/* import ProductsInventory from './components/product/ProductsInventory' */
import ProductsBrands from './components/product/ProductsBrands'
import ProductsModels from './components/product/ProductsModels'
import ProductsClassifications from './components/product/ProductsClassifications'

import StoreSales from './components/store/StoreSales'
import StoreQuotes from './components/store/StoreQuotes'
import StoreRepayments from './components/store/StoreRepayments'

import AdminProviders from './components/admin/AdminProviders'
import AdminEmployees from './components/admin/AdminEmployees'
import AdminClients from './components/admin/AdminClients'
/* 
import TagsEdit from './components/tags/TagsEdit'
import TagsPrint from './components/tags/TagsPrint'
import TagsCreate from './components/tags/TagsCreate' */

import TicketsConsult from './components/tickets/TicketsConsult'
import TicketsPrint from './components/tickets/TicketsPrint'

import DashboardView from './views/DashboardView'
import SigninView from './views/SigninView'

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginView />}></Route>
        <Route path="/login" element={<LoginView />}></Route>
        <Route path="/signin" element={<SigninView />}></Route>
        <Route path="/main" element={<MainView />}>
          <Route index element={<DashboardView />}></Route>
          <Route path="dash" element={<DashboardView />}></Route>
          <Route path="store" element={<StoreView />}>
            <Route index element={<StoreSales />}></Route>
            <Route path="sales" element={<StoreSales />}></Route>
            <Route path="quotes" element={<StoreQuotes />}></Route>
            <Route path="repayments" element={<StoreRepayments />}></Route>
          </Route>

          <Route path="products" element={<ProductsView />}>
            <Route index element={<ProductsList />}></Route>
            <Route path="list" element={<ProductsList />}></Route>
            <Route
              path="compatibility"
              element={<ProductsCompatibility />}
            ></Route>
            {/*        <Route path="inventory" element={<ProductsInventory />}></Route> */}
            <Route path="brands" element={<ProductsBrands />}></Route>

            <Route path="models" element={<ProductsModels />}></Route>
            <Route
              path="classifications"
              element={<ProductsClassifications />}
            ></Route>
          </Route>

          <Route path="admin" element={<AdminView />}>
            <Route index element={<AdminEmployees />}></Route>
            <Route path="employees" element={<AdminEmployees />}></Route>
            <Route path="clients" element={<AdminClients />}></Route>
            <Route path="providers" element={<AdminProviders />}></Route>
          </Route>

          <Route path="tags" element={<TagsView />}>
            {/*             <Route index element={<TagsCreate />}></Route>
            <Route path="create" element={<TagsCreate />}></Route>
            <Route path="print" element={<TagsPrint />}></Route>
            <Route path="edit" element={<TagsEdit />}></Route> */}
          </Route>
          <Route path="tickets" element={<TicketsView />}>
            <Route index element={<TicketsConsult />}></Route>
            <Route path="consult" element={<TicketsConsult />}></Route>
            <Route path="print" element={<TicketsPrint />}></Route>
          </Route>
          <Route path="reports" element={<ReportsView />}></Route>
        </Route>
        <Route path="*" element={<_404 />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
