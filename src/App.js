import React from 'react';
import Cart from "./cart";
import Navbar from './Navbar';
import { firestore } from "./firebase";


class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
        products:[],
        loading:true
    }
    this.db= firestore.collection("products");
  }

  componentDidMount() {
    //fetching all the products from the cloud firestore
    this.db
      //query for fecthing the product which we want as per our query
      // .collection("products") //getting all the products
      // .where('price','>=', 999) // after fetching db we should write query
      // .where('price','>',400)  //specify a condition of fetching from data
      .orderBy('price','asc') //to order the data in some order 'asc'/'desc'
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });

        this.setState({
          products: products,
          loading: false,
        });
      });
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //     products
    // })

    const docRef = this.db.doc(products[index].id);

    docRef
    .update({
      qty:products[index].qty + 1
    })
    .then( () => {
      console.log("Updated Successfully")
    })
    .catch( (error) => {
      console.log("ERROR :",error);
    })
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    
    if( products[index].qty === 0){return;}

    // products[index].qty -= 1;

    // this.setState({
    //     products
    // });   
    const docRef = this.db.doc(products[index].id);

    docRef
    .update({
      qty:products[index].qty - 1
    })
    .then( () => {
      console.log("Updated Successfully")
    })
    .catch( (error) => {
      console.log("ERROR :",error);
    })
  }

  handleDeleteProduct = ( id ) => {
    // const { products } = this.state;

    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //     products: items
    // });
    const docRef = this.db.doc(id);

    docRef
    .delete()
    .then( () => {
      console.log("Deleted Successfully")
    })
    .catch( (error) => {
      console.log("ERROR :",error);
    })

  }

  getCartCount = () => {
    const {products} =this.state;

    let count = 0;

    products.forEach((product) =>{
        count += product.qty;
    })

    return count;
  }
  
  getCartTotal = () => {
    const {products} =this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
      return cartTotal;
    })


    return cartTotal;
  }

  addProduct= () => {
    this.db
      .add({
        img: 'data:image/jpeg;base64,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',
        price: 10000,
        qty: 3,
        title:'Washing Machine'
      })
      .then((docRef)=>{
        console.log("Product added to firebase",docRef);
      })
      .catch((error)=>{
        console.log('ERROR :',error);
      })
  }

  render(){
    const { products , loading} = this.state;
    return (
          <div className="App">
            <Navbar count={this.getCartCount()}/>
            {/* <button onClick={this.addProduct} style={{padding:20 ,fontSize:20}}>Add a product</button> */ /* adding a static product to firebase */ }
            <Cart 
              products = {products}
              onIncreaseQuantity = {this.handleIncreaseQuantity}
              onDecreaseQuantity = {this.handleDecreaseQuantity}
              onDeleteProduct = {this.handleDeleteProduct}
            /> 
            {loading  && <h1>Loading....</h1>} {/* Conditional Rendering */}
            <div style={{padding:10,fontSize:20,fontWeight:'bolder'}}>Total: {this.getCartTotal()}</div>
          </div>
    );
  }
}

export default App;

// {
//   price: 99,
//   title: 'Watch',
//   qty: 1,
//   img: '',
//   id : 1
// },
// {
//   price: 999,
//   title: 'Mobile Phone',
//   qty: 1,
//   img: '',
//   id : 2
// },
// {
//   price: 9999,
//   title: 'Laptop',
//   qty: 1,
//   img: '',
//   id : 3
// }
