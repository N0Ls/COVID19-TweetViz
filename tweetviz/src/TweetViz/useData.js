import { useState, useEffect } from 'react'
import { csv } from 'd3';
import data from "./Data/1.csv";

const csvUrl = data


export const useData = () =>{
    const [data, setData] = useState(null);

    useEffect(() => {
        const row = d => {
            d.influenceFactor = Math.log10(1+ ( d.retweet_count* 4.2)) * Math.log10(1+(d.favorite_count*1.2)) * Math.log10(1+(d.user_followers_count/(1+d.user_friends_count)));
            d.formatedDate = new Date(Date.parse(d.created_at));
            return d;
        }
        csv(csvUrl, row).then(data => {
        setData(data.filter(d => 
            d.influenceFactor > 15
        ))
        });
    }, []);

    console.log(data?data:"not loaded")

    return data;
}