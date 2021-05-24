import { useState, useEffect } from 'react'
import { csv } from 'd3';
import data from "./Data/data.csv";

const csvUrl = data


export const useData = () =>{
    const [data, setData] = useState(null);

    useEffect(() => {
        const row = d => {
            d.formatedDate = new Date(Date.parse(d.created_at));
            return d;
        }
        csv(csvUrl, row).then(data => {
        setData(data.filter(d => 
            parseFloat(d.influenceNumber) > 5 && d.formatedDate.getFullYear() > 2019 && d.type === "news"
        ))
        });
    }, []);

    console.log(data?data[0]:"not loaded")

    return data;
}