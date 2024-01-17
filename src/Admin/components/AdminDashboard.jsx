import React from 'react'
import { Grid } from '@mui/material'
import Achievement from './DashboardComponents/Achievement'
import MonthlyOverview from './DashboardComponents/MonthlyOverview'

const AdminDashboard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Achievement/>
        </Grid>

        <Grid item xs={12} md={8}>
          <MonthlyOverview/>
        </Grid>

      </Grid>
    </div>
  )
}

export default AdminDashboard
