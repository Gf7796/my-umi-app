import * as echarts from "echarts";
import {useEffect, useRef} from "react";
import styles from "./echarts.less"
import {getChartData} from "@/pages/echarts/utils/mockData";

function Echarts1() {
  const chartsBox: any = useRef();

  // 获取数据
  function getData() {
    const data = getChartData();
    initCharts(data)
  }

  // 渲染charts
  function initCharts(data: any) {
    let myCharts = echarts.init(chartsBox.current)
    const {grid, xAxis, yAxis, series} = processData(data)
    const option = {
      grid,
      xAxis,
      yAxis,
      series,
      tooltip: {},
      visualMap: {
        min: 0,
        max: 100,
        dimension: 0,
        show: false,
        inRange: {
          color: ['#E9383B', '#FFEE1B', '#0D9937']
        }
      }
    }
    myCharts.setOption(option)
  }

  // 数据处理
  function processData(data: any) {
    const grid: any = [];
    const xAxis: any = [];
    const yAxis: any = [];
    const series: any = [];
    const dataArr: any = [];
    const areaData = data.map((item: any) => item.province);
    const drugName = data[0].data.map((item: any) => item.medicines);
    const len = areaData.length;
    const step = 90 / len;
    const positionMap: any = {
      0: {
        position: "insideLeft"
      },
      1: {}
    };
    const formatterFn = (v: any) => v.value + "%";
    let i: number;
    data.forEach((item1: any) => {
      dataArr.push(item1.data.map((item2: any) => {
        return {
          value: item2.data,
          label: item2.data > 45 ? positionMap[1] : positionMap[0]
        }
      }))
    })
    for (i = 0; i < len; i++) {
      grid.push({
        left: `${10 + (i * step)}%`,
        right: `${90.5 - (i + 1) * step}%`
      })
      xAxis.push({
        gridIndex: i,
        min: 0,
        max: 100,
        show: false,
        splitLine: {
          show: false
        }
      })
      yAxis.push({
        type: 'category',
        data: drugName,
        gridIndex: i,
        scale: true,
        show: i === 0,
      })
      series.push({
        name: areaData[i],
        type: 'bar',
        barWidth: '90%',
        label: {
          show: true,
          formatter: formatterFn,
        },
        xAxisIndex: i,
        yAxisIndex: i,
        data: dataArr[i],
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      })
    }
    grid.push({
      left: "10%",
      right: '0%'
    })
    xAxis.push({
      gridIndex: len,
      data: areaData,
      position: "bottom",
      axisLabel: {
        rotate: 45
      }
    })
    yAxis.push({
      type: 'category',
      gridIndex: len,
      scale: true,
      show: false,
    })
    return {
      grid,
      xAxis,
      yAxis,
      series
    }
  }

  useEffect(() => {
    getData();
  })
  return (
    <div className={styles.container}>
      <div ref={chartsBox} className={styles.echartsBox}/>
    </div>
  )
}

export default Echarts1