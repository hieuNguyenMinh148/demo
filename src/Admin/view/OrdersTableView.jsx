import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../State/store'
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action'
import {
  Avatar, AvatarGroup,
  Button,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material'
import TableContainer from '@mui/material/TableContainer'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'

const OrdersTableView = () => {
  const [anchorEl, setAnchorEl] = React.useState([])
  const open = Boolean(anchorEl)
  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl]
    newAnchorElArray[index] = event.currentTarget
    setAnchorEl(newAnchorElArray)
  }
  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl]
    newAnchorElArray[index] = null
    setAnchorEl(newAnchorElArray)
  }

  const dispatch = useDispatch()
  const { adminOrder } = useSelector(store => store)

  useEffect(() => {
    dispatch(getOrders())
  }, [adminOrder.confirmed, adminOrder.delivered, adminOrder.shipped, adminOrder.deleted])
  console.log('admin orders', adminOrder)

  const handleShipedOrder = (orderId) => {
    dispatch(shipOrder(orderId))
    handleClose()
  }

  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId))
    handleClose()
  }

  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveredOrder(orderId))
    handleClose()
  }

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId))
    handleClose()
  }
  return (
    <div className="p-10">
      <Card clasName="mt-2">
        <CardHeader title="All Orders"/>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">

            <TableHead sx={{ bgcolor: '#efeff0' }}>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Total Price</TableCell>
                <TableCell align="left">Status</TableCell>

              </TableRow>
            </TableHead>

            <TableBody>
              {adminOrder?.orders?.map((item, index) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="" className="">
                    <AvatarGroup max={3} sx={{ justifyContent: 'start' }}>
                      {item.orderItems.map((orderItem) =>
                        <Avatar src={orderItem.product.imageUrl}></Avatar>
                      )}
                    </AvatarGroup>

                  </TableCell>

                  <TableCell align="left" scope="">
                    {item.orderItems.map((orderItem) =>
                      <p>{orderItem.product.title}, </p>
                    )}
                  </TableCell>

                  <TableCell align="left" scope="row">{item.id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left">
                    <span
                      className={`text-white px-5 py-2 rounded-full 
                      ${item.orderStatus === 'CONFIRMED' ? 'bg-[#10cc42]' :
                        item.orderStatus === 'SHIPPED' ? 'bg-[#2d55ff]' :
                          item.orderStatus === 'PLACED' ? 'bg-[#14cdc8]' :
                            item.orderStatus === 'PENDING' ? 'bg-[gray]' : 'bg-[red]'}`}>
                      {item.orderStatus}
                    </span>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


      </Card>
    </div>
  )
}

export default OrdersTableView
