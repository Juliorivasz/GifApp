import React, { useState } from 'react';
import AddCategoria from './appCategoria';
import { GifGrid } from './gifGrid';


const GifExpertApp = ()=> {

    const [categorias, setCategorias] = useState([]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategoria 
                categorias={categorias}
                setCategorias={setCategorias}
            />
            <hr />
            <ol>
                { categorias.map(e => 
                    <GifGrid
                        key={e}
                        categoria={e}/>)
                }
            </ol>
        </>
    )
}

export default GifExpertApp;