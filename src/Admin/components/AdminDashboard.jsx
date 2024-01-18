import React from 'react'
import { Grid } from '@mui/material'
import Achievement from './DashboardComponents/Achievement'
import MonthlyOverview from './DashboardComponents/MonthlyOverview'
import OrdersTableView from '../view/OrdersTableView'
import ProductsTable from './ProductsTable'
import ProductsTableView from '../view/ProductsTableView'

const AdminDashboard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <div className="shadow-lg shadow-gray-500">
            <Achievement/>
          </div>

        </Grid>

        <Grid item xs={12} md={8}>
          <div className="shadow-lg shadow-gray-500">
            <MonthlyOverview/>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-500">
            <OrdersTableView/>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-500">
            <ProductsTableView/>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default AdminDashboard
