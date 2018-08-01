import React from "react";
import * as d3 from "d3";
import chroma from "chroma-js";
import PropTypes from "prop-types";

class BarChart extends React.Component {

  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired
  }

  constructor(props){
    super(props);
    this.state = {
      widthScale: d3
        .scaleBand()
        .domain(d3.range(0, props.data.length))
        .range([0, props.width]),

      heightScale: d3
        .scaleLinear()
        .domain([0, d3.max(props.data)])
        .range([0, props.height])
    };
    this.color = chroma.scale(["yellow", "green"]).mode("hsl");
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    let { widthScale, heightScale } = prevState;

    widthScale.domain(d3.range(0, nextProps.data.length));
    heightScale.domain([0, d3.max(nextProps.data)]);

    prevState = { ...prevState, widthScale, heightScale };
    return prevState;
  }

  prepareBar = (d, i) => {
    const { color, props: { height }, state: { heightScale, widthScale } } = this;
    return (
      <rect
        x={widthScale(i)}
        y={height - heightScale(d)}
        width={widthScale.bandwidth()}
        height={heightScale(d)}
        style={{fill:color(d)}}
        key={i}
      />
    )
  };

  render() {
    const { prepareBar, props: { data, height, width } } = this;
    return (
      <svg height={height} width={width}>
        <g
        >
          {data.map(prepareBar)}
        </g>
      </svg>
    );
  }
}

export default BarChart;
