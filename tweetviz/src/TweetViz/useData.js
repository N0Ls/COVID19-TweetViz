import { useState, useEffect } from 'react'
import { csv } from 'd3';

const csvUrl = "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/639388c2cbc2120a14dcf466e85730eb8be498bb/iris.csv"


export const useData = () =>{
    const [data, setData] = useState(null);

    useEffect(() => {
        const row = d => {
            d.sepal_length = +d.sepal_length;
            d.sepal_width = +d.sepal_width;
            d.petal_length = +d.petal_length;
            d.petal_width = +d.petal_width;
            
            let color = 'black';
            switch(d.species){
                case 'setosa' :
                    color = 'Aquamarine';
                    break;
                case 'versicolor' :
                    color = 'Indigo';
                    break;
                case 'virginica' : 
                    color = 'HotPink';
                    break;
                default : color = 'black'
            }
            d.Color = color;

        return d;
        }
        csv(csvUrl, row).then(setData);
    }, []);

    return data;
}