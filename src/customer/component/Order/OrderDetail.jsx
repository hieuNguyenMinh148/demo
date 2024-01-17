import React from 'react';
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useSelector } from 'react-redux'

const OrderDetail = () => {
  const { order } = useSelector(store => store)
    return (
        <div className="px:5 lg:px-20">
            <div>
                <h1 className="font-bold text-lg py-7">Delivery Address</h1>
                <AddressCard address={order.order?.shippingAddress}/>
            </div>

            <div className="py-20">
                <OrderTracker activeStep={3}/>
            </div>

            <Grid container className="space-x-5">
                {order.orders?.map((item)=>
                <Grid item container className="shadow-xl rounded-md p-5 border"
                      sx={{alignItems: "center", justifyContent: "space-between"}}>

                    <Grid item xs={6}>
                        <div className="flex items-center space-x-4">
                            <img className="w-[5rem] h-[5rem] object-cover object-top"
                                 src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg" alt=""/>

                            <div className="space-y-2 ml-5">
                                <p className="font-semibold">ADV</p>
                                <p className="space-x-5 opacity-50 text-xs font-semibold">
                                    <span>Color: White</span>
                                    <span>Size: M</span>
                                </p>
                                <p>Seller: asdd</p>
                                <p>$399</p>
                            </div>
                        </div>
                    </Grid>

                    <Grid item>
                        <Box sx={{color:"yellow"}}>
                            <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2 text-2xl"/>
                            <span>Rate & Review Product</span>
                        </Box>
                    </Grid>
                </Grid>)}
            </Grid>

        </div>
    );
};

export default OrderDetail;
