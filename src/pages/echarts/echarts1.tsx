import * as echarts from "echarts";
import {useEffect, useRef} from "react";

function Echarts1 () {
    const chartsBox: any = useRef();

    function initCharts() {
        const myEcharts = echarts.init(chartsBox.current);

        const option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
                }
            ]
        }

        myEcharts.setOption(option)

    }

    useEffect(() => {
        initCharts()
    }, [])
    return (
        <>
            <div ref={chartsBox} style={{ width: "80vw", height: "80vh" }}>echarts1</div>
        </>
    )
}

export default Echarts1