import React from "react"
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

        const [item,setItem] = useState({})
        const {idProd} = useParams()
    
        useEffect(()=>{
           
            if(!idProd){
                console.log("no hay categoria");
            }
            else{
                console.log(idProd);
            }
    

            const getProduct = () => {
                return new Promise((res,rej) => {
                    const item = item.find((prod) => prod.id === + idProd)
                    setTimeout(()=>{
                        res(item)
                    },1000)
                })
                
            }
    
            getProduct()                                                                    //Este then y chatch sirven para que funcione todo el setTimeout porque sino nunca se sabe si salió bien o mal
            .then((res)=>{
                setItem(res)
            })
            .catch((error)=>{
                console.log(error)
            })
        },[idProd])
    
        return (
            <>
                <div>
                {<ItemDetail item = {item}/>}
                </div>
            </>
            
        )
    }



export default ItemDetailContainer