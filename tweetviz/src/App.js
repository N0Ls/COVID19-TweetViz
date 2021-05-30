import "./App.css";
import "./index.css";

import React, { useEffect, useState } from "react";
import {
  scaleLinear,
  scaleTime,
  min,
  max,
  format,
  forceSimulation,
  forceCollide,
} from "d3";
import { useData } from "./hooks/useData";
import { AxisBottom } from "./components/visualization/AxisBottom";
import { AxisLeft } from "./components/visualization/AxisLeft";
import { Marks } from "./components/visualization/Marks";
import { useStoreContext } from "./store/StoreContext";
import { useStoreDispatchContext } from "./store/StoreDispatchContext";
import { filterObjs } from "./utils/arrays";
import { Tweet } from "./components/visualization/Tweet";

const width = 1500;
const height = 6000;
const margin = { left: 150, right: 20, bottom: 100, top: 50 };

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const xAxisLabelOffset = 60;

const yValue = (d) => d.formatedDate;
const xValue = (d) => d.x;
const veracity = (d) => d.veracity;

const siFormat = format(".2s");
const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace("G", "B");

const App = () => {
  // const [data, setData] = useState(null);
  const [filteredTweets, setFilteredTweets] = useState(null);

  const state = useStoreContext();
  const dispatch = useStoreDispatchContext();

  const data = useData();

  useEffect(() => {
    if (!state.tweets && data) dispatch({ type: "tweets/provide", data: data });
  }, [data]);

  useEffect(() => {
    if (state.tweets) {
      setFilteredTweets(
        filterObjs((tweet) => tweet.type === state.type)(state.tweets)
      );
    }
  }, [state.tweets, state.type]);

  useEffect(() => {
    if (filteredTweets) {
      dispatch({type:"selected/update" , data:filteredTweets[0]})
    }
  }, [filteredTweets]);

  if (!data || !filteredTweets) {
    return <div style={{ color: "white" }}>Loading...</div>;
  }

  // dispatch({ type: "selected/update", data: filteredTweets[0] });

  const toggle = () => {
    dispatch({ type: "type/toggle" });
    setFilteredTweets(
      filterObjs((tweet) => tweet.type === state.type)(state.tweets)
    );
  };

  let simulation = null;

  const yScale = scaleTime()
    .domain([min(filteredTweets, yValue), max(filteredTweets, yValue)])
    .range([0, innerHeight])
    .nice();

  const xScale = scaleLinear()
    .domain([min(filteredTweets, xValue), max(filteredTweets, xValue)])
    .range([0, innerWidth]);

  filteredTweets.map((d) => (d.fy = yScale(yValue(d))));

  if (filteredTweets) {
    simulation = forceSimulation(filteredTweets)
      .force(
        "collide",
        forceCollide((d) => d.influenceNumber*0.4 + 5)
      )
      .stop()
      .tick(240);
  }

  return (
    <>
    <div className="Viz">
      <div className="Infos">
        <button className="switch_button" onClick={toggle}>Switch</button>
        <Tweet d={state.selected}></Tweet>
      </div>
      <div className="Graph">
        <h1 className="title">COVID19 - Tweet Viz : <span className="data_type">{state.type==="claim"?state.type+"s":state.type}</span> </h1>
        <svg width={width} height={height}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            <AxisLeft yScale={yScale} innerWidth={innerWidth} innerHeight={innerHeight}/>
            <Marks
              data={filteredTweets}
              xScale={xScale}
              yScale={yScale}
              xValue={xValue}
              yValue={yValue}
              tooltipFormat={xAxisTickFormat}
              veracity={veracity}
            />
          </g>
        </svg>
      </div>
    </div>
    </>
  );
};

export default App;
