import { useEffect, useState } from "react"
import {getGif} from '../helpers/getGif'

export const useFetchGifs = (categoria) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    

    useEffect( () => {

            getGif(categoria)
                .then( img => {

                    setTimeout( () => {
                        
                        setState({
                            data: img,
                            loading: false
                        });

                    }, 1500);

                })

        }, [ categoria ])

    return state;
}