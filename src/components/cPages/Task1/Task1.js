import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import styles from '../Task1/Task1.scss';


const Giphy = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const results = async () => {
            const res = await axios('https://api.giphy.com/v1/gifs/trending', {
                params: {
                    api_key: "f254wg9cnrbVs9uGJgvRVasDmzFvMsGG"
                }
        })
            console.log(res);
            setData(res.data.data)
        }

        results(); 
    }, [])

    const gifRender = () => {
        return data.map(gif => {
            return(
                <div key={gif.id} className={styles.bodyContainer}>
                    <img src={gif.images.fixed_height.url}/>
                </div>
            )
            
        })
    }
    return(
        <div className="Giphy">
            {gifRender()}
        </div>
    );
};

export default Giphy;