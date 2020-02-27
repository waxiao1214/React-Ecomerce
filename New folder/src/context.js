import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        products : [],
        detailProduct:detailProduct
    };

    componentDidMount() {
        this.setProducts();
    }
    
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [ ...tempProducts, singleItem ];
        })
        this.setState(() => {
            return { products : tempProducts }
        })
    }

    handleDetail = () => {
        console.log("hello from detail");
    }

    addToCart = () => {
        console.log("hello from add to cart")
    }
    
    tester = () => {
        console.log('State products : ', this.state.products[0].inCart);
        console.log('Data products : ', storeProducts[0].inCart);

        const tempProducts = [...this.state.products];
        tempProducts[0].inCart = true
        this.setState(() => {
            return { proudcts: tempProducts }
        }, () => {
            console.log('State products : ', this.state.products[0].inCart);
            console.log('Data products : ', storeProducts[0].inCart);
        })
     }
    render() {
        return (
            <ProductContext.Provider value = {{ handleDetail:this.handleDetail, addToCart: this.addToCart,...this.state }}>
              { this.props.children }  
              <button onClick = { this.tester }>test me</button>
              { this.props.children }
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
