import echarts from "./modules/echarts";

const routes = [
    ...echarts,
    {
        path: "DPFjs/index",
        component: "@/pages/DPFjs/index.tsx"
    },
    {
        path: "classDemo/index",
        component: "@/pages/classDemo/index"
    }
]

export default routes