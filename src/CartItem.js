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
        console.log("this",this.state);
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