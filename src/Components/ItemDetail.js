import React from 'react';
import {Link} from "react-router-dom"

const ItemDetail = ({item}) => {
  return (
    <>
       <div className="card">
              <div className="card-body">
                  <img className="imagen" src={item.img}/>
                  <h5 className="card-title">{item.nombre}</h5>
                  <p className="card-text">{item.info}</p>
                  <Link to={`/productos/${item.categoria}/${item.id}`} className="btn btn-primary">Detalles</Link>
              </div>
        </div>
      </>
    )
  }

export default ItemDetail