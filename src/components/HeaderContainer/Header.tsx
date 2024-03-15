import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {authService} from "../../services";
import {authActions} from "../../store/slices/AuthSlice";
import {AppBar, Button, Container, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const {currentUser} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const access = authService.getAccessToken()
    const navigate = useNavigate()

    useEffect(() => {
        if(access && !currentUser){
            dispatch(authActions.me())
        }
    }, []);

    return (
        <AppBar position="static" color={'secondary'}>
            <Container maxWidth="xl" sx={
                {'display':'flex', 'justifyContent':'space-between'}
            }>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                        }}
                    >
                        CARS
                    </Typography>
                </Toolbar>
                <Toolbar>
                    <Button
                        color={'inherit'}
                        onClick={()=>navigate('/login')}
                    >
                        LOGIN
                    </Button>
                    <Button
                        color={'inherit'}
                        onClick={()=>navigate('/register')}
                    >
                        REGISTER
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
        // <div className={css.Header}>
        //     <div>
        //         <h2>Cars</h2>
        //     </div>
        //
        //     <div>
        //         {currentUser
        //             ?
        //         <div>{currentUser.username} -- {currentUser.last_login}</div>
        //             :
        //             <div>
        //                 <Link to={'/login'}>LOGIN</Link>
        //                 <Link to={'/register'}>REGISTER</Link>
        //             </div>
        //         }
        //     </div>
        // </div>
    );
};

export default Header;