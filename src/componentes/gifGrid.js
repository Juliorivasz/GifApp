import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './gifGridItem';

export const GifGrid = ({ categoria }) => {

    const {data, loading} = useFetchGifs(categoria);
    
  return (
    <>
        <h1 >{categoria}</h1>
        
        {loading && <p className='animate__animated animate__hinge'>Loading...</p>}
        
        <div className='card-grid'>
            {
                    data.map( ( img ) => (
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                    ))
                    
            }
        </div>
    </>
  )
}

