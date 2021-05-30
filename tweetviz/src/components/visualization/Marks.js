import { rgb } from "d3-color";
import { useStoreContext } from "../../store/StoreContext";
import { useStoreDispatchContext } from "../../store/StoreDispatchContext";

export const Marks = ({ data, xScale, xValue, yScale, yValue, veracity }) => {
  const state = useStoreContext();
  const dispatch = useStoreDispatchContext();

  const colors = {
    blue: rgb(118, 203, 236),
    rose: rgb(236, 99, 147),
    default: rgb(155, 155, 155),
  };

  const getColor = (str) => {
    switch (str) {
      case "fake":
        return colors.rose;
      case "real":
        return colors.blue;
      default:
        return colors.default;
    }
  };

  const select = (d) => {
    dispatch({ type: "selected/update", data: d });
  };

  return data.map((d) => (
    <circle
      className="mark"
      key={yValue(d) + d.influenceNumber}
      cx={isNaN(xScale(xValue(d))) ? 0 : xScale(xValue(d))}
      cy={yScale(yValue(d))}
      r={d.influenceNumber * 0.4}
      style={{ fill: state.selected && d.id === state.selected.id ? 'transparent' : getColor(veracity(d)),
    stroke: state.selected && d.id === state.selected.id ? getColor(veracity(d)) : '' }}
      onClick={() => select(d)}
    />
  ));
};