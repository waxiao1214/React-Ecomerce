import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button'; 

export default class Details extends Component {
    render () {
        return (
            <ProductConsumer>
                { (value ) => {
                    console.log(value.detailProject);
                }}
            </ProductConsumer>

        );
    }
}