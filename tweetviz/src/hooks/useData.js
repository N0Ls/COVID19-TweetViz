import { useState, useEffect } from "react";
import { csv } from "d3";
import csvUrl from "../data/data.csv";
import { filterObjs } from '../utils/arrays'

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.formatedDate = new Date(Date.parse(d.created_at));
      return d;
    };
    csv(csvUrl, row).then((data) => {
      setData(
        filterObjs(d => parseFloat(d.influenceNumber) > 5 &&
        d.formatedDate.getFullYear() > 2019)(data));
    });
  }, []);

  return data;
};
