import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AnimateSharedLayout, motion } from "framer-motion";
import Chart from "react-apexcharts";
import { IoMdClose } from "react-icons/io";
import "./Cards.css";
const Card = (props) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <AnimateSharedLayout>
        {expand ? (
          <ExpandedCard params={props} setExpand={() => setExpand(false)} />
        ) : (
          <CompactCard params={props} setExpand={() => setExpand(true)} />
        )}
      </AnimateSharedLayout>
    </>
  );
};
export default Card;

const ExpandedCard = ({ params, setExpand }) => {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#ffffff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ffffff"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <>
      <motion.div
        className="expanded_card"
        style={{
          background: params.color.backGround,
          boxShadow: params.color.boxShadow,
        }}
        layoutId="expandableCard"
      >
        <div className="expanded_close" onClick={setExpand}>
          <IoMdClose />
        </div>
        <span>{params.title}</span>
        <div className="chartContainer">
          <Chart series={params.series} type="area" options={data.options} />
        </div>
        <span>Last 24 hours</span>
      </motion.div>
    </>
  );
};

const CompactCard = ({ params, setExpand }) => {
  const Icon = params.icon;
  return (
    <>
      <motion.div
        className="compact_card"
        style={{
          background: params.color.backGround,
          boxShadow: params.color.boxShadow,
        }}
        onClick={setExpand}
        layoutId="expandableCard"
      >
        <div className="circular_progress_bar">
          <CircularProgressbar
            value={params.barValue}
            text={`${params.barValue}%`}
          />
          <span className="title">{params.title}</span>
        </div>
        <div className="details">
          <div>
            <Icon />
          </div>
          <span>{params.value} &#2547;</span>
          <span>Last 24 hours</span>
        </div>
      </motion.div>
    </>
  );
};
