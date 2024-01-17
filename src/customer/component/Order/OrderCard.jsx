import React from 'react';
import {Grid} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {useNavigate} from "react-router-dom";

const OrderCard = () => {
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-md hover:shadow-2xl border">
            <Grid container spacing={2} sx={{justifyContent: "space-between"}}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer">
                        <img className="w-[5rem] h-[5rem] object-cover object-top"
                             src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg" alt=""/>
                        <div className="ml-5 space-y-2">
                            <p className="">ADV</p>
                            <p className="opacity-50 text-xs font-semibold">Size</p>
                            <p className="opacity-50 text-xs font-semibold">Color</p>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={2}>
                    <p>$299</p>
                </Grid>

                <Grid item xs={4}>
                    {true && <div>
                        <p>
                            <CheckCircleOutlineIcon sx={{width: "15px", height: "15px"}}
                                                    className="text-green-600 mr-2 text-sm"/>
                            <span>
                            Delivered On March 03
                        </span>
                        </p>

                        <p className="text-xs">
                            Your Item Has Been Delivered
                        </p>
                    </div>}

                    {false && <p>
                        <span>
                            Expected Delivery On Mar 03
                        </span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    );
};

export default OrderCard;
