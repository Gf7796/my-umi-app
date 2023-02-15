import echarts from "./modules/echarts";

const routes = [
    ...echarts,
    {
        path: "classDemo/index",
        component: "@/pages/classDemo/index"
    }
]

export default routes