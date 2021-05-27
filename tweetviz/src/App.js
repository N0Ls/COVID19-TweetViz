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
import { filterObjs } from "./utils/arrays"

const width = 3000;
const height = 5000;
const margin = { left: 250, right: 20, bottom: 100, top: 50 };

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
        filterObjs(tweet => tweet.type === state.type)(state.tweets)
      );
    }
  }, [state.tweets]);

  if (!data || !filteredTweets) {
    return <div style={{ color: "white" }}>Loading...</div>;
  }

  const toggle = () => {
    dispatch({ type: "type/toggle" });
    setFilteredTweets(
      filterObjs(tweet => tweet.type === state.type)(state.tweets)
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
        forceCollide((d) => d.influenceNumber + 10)
      )
      .stop()
      .tick(240);
  }

  return (
    <>
      <button onClick={toggle}>Switch</button>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight}
            tickFormat={xAxisTickFormat}
          />
          <AxisLeft yScale={yScale} />
          <text
            className="axis-label"
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            textAnchor="middle"
          >
            Population
          </text>
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
    </>
  );
};

export default App;
