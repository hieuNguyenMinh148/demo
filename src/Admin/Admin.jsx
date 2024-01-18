import React, { useState } from 'react'
import {
  CssBaseline, Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon, ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import ArchiveIcon from '@mui/icons-material/Archive'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AdminDashboard from './components/AdminDashboard'
import CreateProductForm from './components/CreateProductForm'
import ProductsTable from './components/ProductsTable'
import OrdersTable from './components/OrdersTable'
import CustomersTable from './components/CustomersTable'

const menu = [
  { name: 'Dashboard', path: '/admin', icon: <SpaceDashboardIcon/> },
  { name: 'Products', path: '/admin/products', icon: <SpaceDashboardIcon/> },
  { name: 'Customers', path: '/admin/customers', icon: <SpaceDashboardIcon/> },
  { name: 'Orders', path: '/admin/orders', icon: <SpaceDashboardIcon/> },
  { name: 'AddProduct', path: '/admin/product/create', icon: <SpaceDashboardIcon/> },
  { name: 'Orders', path: '/admin/orders', icon: <SpaceDashboardIcon/> },
]

const Admin = () => {

  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'))
  const [sideBarVisible, setSideBarVisible] = useState(false)
  const navigate = useNavigate()

  const drawer = (
    <Box sx={{
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%'
    }}>
      {/*{isLargeScreen && <Toolbar/>}*/}
      <List>
        {menu.map((item, index) => <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
          <ListItemButton>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText>{item.name}</ListItemText>
          </ListItemButton>
        </ListItem>)}
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon/>
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (

    <div className="flex h-[100vh]">
      <CssBaseline/>
      <div className=" shadow-lg shadow-gray-500 w-[15%] h-full fixed top-0">
        {drawer}
      </div>

      <div className="w-[85%] h-full ml-[15%]">
        <Routes>
          <Route path="/" element={<AdminDashboard/>}></Route>
          <Route path="/product/create" element={<CreateProductForm/>}></Route>
          <Route path="/products" element={<ProductsTable/>}></Route>
          <Route path="/orders" element={<OrdersTable/>}></Route>
          <Route path="/customers" element={<CustomersTable/>}></Route>
        </Routes>
      </div>
    </div>

  )
}

export default Admin
