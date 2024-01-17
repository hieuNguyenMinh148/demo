import React from 'react'
import { TrendingUp } from '@mui/icons-material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CallIcon from '@mui/icons-material/Call'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import { Avatar, Card, CardContent, CardHeader, Grid, IconButton } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const salesData = [
  { state: '245k', title: 'Sales', color: 'primary', icon: <TrendingUp sx={{ fontSize: '1.75rem' }}/> },
  { state: '12.5k', title: 'Customers', color: 'success', icon: <AccountCircleIcon sx={{ fontSize: '1.75rem' }}/> },
  { state: '1.5k', title: 'Products', color: 'warning', icon: <CallIcon sx={{ fontSize: '1.75rem' }}/> },
  { state: '88k', title: 'Revenue', color: 'info', icon: <CurrencyExchangeIcon sx={{ fontSize: '1.75rem' }}/> }
]

const renderStats = () => {
  return salesData.map((item, index) => {
    <Grid item sx={12} sm={3} key={index}>
      <Box sx={{ display: 'flex', allignItems: 'center' }}>
        <Avatar variant="rounded"
                sx={{ mr: 3, width: 44, height: 44, boxShadow: 3, color: 'white', background: `$(item.color` }}>
          {item.icon}
        </Avatar>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="caption">{item.title}</Typography>
          <Typography variant="h6">{item.state}</Typography>
        </Box>
      </Box>
    </Grid>
  })
}

const MonthlyOverview = () => {
  return (
    <Card>
      <CardHeader title="Monthly Overview"
                  action={
                    <IconButton>
                      <MoreVertIcon/>
                    </IconButton>
                  }
                  subheader={
                    <Typography variant="body2">
                      <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        Total 48.5% groth
                      </Box>
                      this month
                    </Typography>
                  }
                  titleTypographyProps={{
                    sx: {
                      mb: 2.5,
                      lineHeight: '2rem !important',
                      letterSpacing: '.15px !important'
                    }
                  }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5,0]}>
          {renderStats()}
        </Grid>
      </CardContent>

    </Card>
  )
}

export default MonthlyOverview
