import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import RegisterForm from "./RegisterForm";
import {useLocation} from "react-router-dom";
import LoginForm from "./LoginForm";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    outline: "none",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AuthModal = ({handleClose, open}) => {
    const location = useLocation();
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {location.pathname === "/login" ? <LoginForm/> : <RegisterForm/>}
                </Box>
            </Modal>
        </div>
    );
};

export default AuthModal;