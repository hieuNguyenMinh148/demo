import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, findProducts } from '../../State/Product/Action'
import {
  Avatar,
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

const ProductsTableView = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(store => store)
  console.log('products -----', products)

  useEffect(() => {
    const data = {
      category: 'mens_kurta',
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000,
      minDiscount: 0,
      sort: 'price_low',
      pageNumber: 0,
      pageSize: 10,
      stock: ''
    }
    dispatch(findProducts(data))
  }, [products.deletedProduct])
  return (
    <div className="p-5 text-white">
      <Card clasName="mt-2">
        <CardHeader title="Recent Products"/>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">

            <TableHead sx={{ bgcolor: '#efeff0' }}>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {products?.products?.content?.slice(0, 5).map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="right">
                    <Avatar src={item.imageUrl}></Avatar>
                  </TableCell>
                  <TableCell align="left" scope="row">{item.title}</TableCell>
                  <TableCell align="left">{item.category.name}</TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


      </Card>


    </div>
  )
}

export default ProductsTableView
