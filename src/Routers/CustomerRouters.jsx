import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Navigation from "../customer/component/Navigation/Navigation";
import Footer from "../customer/component/Footer/Footer";
import Cart from "../customer/component/Cart/Cart";
import Product from "../customer/component/Product/Product";
import ProductDetails from "../customer/component/ProductDetails/ProductDetails";
import CheckOut from "../customer/component/CheckOut/CheckOut";
import Order from "../customer/component/Order/Order";
import OrderDetail from "../customer/component/Order/OrderDetail";

const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Navigation/>
            </div>
            <Routes>
                <Route path="/login" element={<HomePage/>}></Route>
                <Route path="/register" element={<HomePage/>}></Route>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product/>}></Route>
                <Route path="/product/:productId" element={<ProductDetails/>}></Route>
                <Route path="/checkout" element={<CheckOut/>}></Route>
                <Route path="/account/order" element={<Order/>}></Route>
                <Route path="/account/order/:orderId" element={<OrderDetail/>}></Route>
            </Routes>

            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default CustomerRouters;
