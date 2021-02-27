import React from "react";
import {Grid} from "@material-ui/core";
import Product from "./Product/Product";

const products=[
    {id:1,name:"Shoes",description:"Running shoes.",price:"$5",image:'https://assets.ajio.com/medias/sys_master/root/h0e/h57/14092954894366/-473Wx593H-460455972-black-MODEL.jpg'},
    {id:2,name:"Macbook",description:"Apple macbook.",price:"$10",image:'https://cdn03.ciceksepeti.com/cicek/kc3267225-2/XL/codegen-apple-16--macbook-pro-a2141-kilif-kapak-kc3267225-2-b65c056038824f8baa5ac7f0924e203b.jpg'}
]

const Products=()=>{
    return(
        <main>
        <Grid container justify="center" spacing={4}>
            {
                products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))
            }
        </Grid>
    </main>
    )
    
}

export default Products;