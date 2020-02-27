import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import logo from './../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button'

export default class Navbar extends Component {
    render () {
        return (
            <NavWrapper className = "navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* { https://www.iconfinder.com/icons/1243689/cal_phone_icon Creative Commons (Attribution 3.0 Unported); https://www.iconfinder.com/Makoto_msk } */}
                <Link to = '/'>
                    <img src = { logo } alt="store" className = 'navbar-brand'/>
                </Link>
                <ul className = "ul.navbar-nav align-items-center">
                    <li className = "nav-item ml-5">
                        <Link to="/" className = "nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className = "ml-auto">
                    <ButtonContainer>
                        <span>
                            <i className = "fas fa-cart-plus" />
                        </span>
                        
                        My cart
                    </ButtonContainer>
                </Link>
                Products
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background:var(--mainBlue);
    .nav-link {
        color:var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform:capitalize !important;
    }
`