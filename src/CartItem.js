import React from "react";

class CartItem extends React.Component{ //inherits properties from React.component

    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this)
    }

    increaseQuantity = () => {
        //this is first way to modify state of a component
        // this.setState({
        //     qty: this.state.qty + 1
        // });
        
        //this is second way to modify state of a component Using the prevState
        this.setState((prevState) => {
            return{
                qty:prevState.qty + 1
            }
        });

    }

    decreaseQuantity = () => {
        const { qty } = this.state;

        if( qty==0 ){
            return;
        }
        this.setState((prevState) =>{
            return{
                qty: prevState.qty - 1
            }
        })
    }

    render(){
        const { price , title , qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize:25} }>{title}</div>
                    <div style={ {color:'#777'} }>Rs:{price}</div>
                    <div style={ {color:'#777'} }>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {/* BUTTONS */}
                        <img alt="increase" 
                        className="action-icons" 
                        src="plus.png"
                        onClick={this.increaseQuantity}
                        />
                        <img alt="decrease" 
                        className="action-icons" 
                        src="minus.png"
                        onClick={this.decreaseQuantity}
                        />
                        <img alt="delete" 
                        className="action-icons" 
                        src="delete.png"
                        
                        />
                    </div>
                </div>
            </div>
        );
    }

}

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;