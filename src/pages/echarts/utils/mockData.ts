// 药品数据
const medicinesData: string[] = [
    '恩诺沙星注射液', '注射用头孢噻呋钠', '硫酸庆大霉素注射液', '注射用硫酸链霉素',
    '盐酸多西环素可溶性粉', '硫酸卡那霉素注射液', '复方磺胺氯哒嗪粉', '硫酸头孢喹肟注射液',
    '复方磺胺间甲氧嘧啶钠注射液', '复方磺胺氯哒嗪钠粉', '硫酸庆大霉素可溶性粉', '注射用阿莫西林钠',
    '阿莫西林可溶性粉', '乳酸环丙沙星注射液', '土霉素注射液', '盐酸多西环素注射液',
    '盐酸土霉素可溶性粉', '硫酸新霉素预混剂-进口', '硫酸黏菌素可溶性粉', '磷酸泰乐菌素预混剂',
    '延胡索酸泰妙菌素预混剂', '酒石酸泰乐菌素可溶性粉', '替米考星预混剂', '注射用氨苄西林钠',
    '氟苯尼考注射液', '盐酸林可霉素注射液', '氟苯尼考粉', '注射用酒石酸泰乐菌素',
    '硫酸安普霉素可溶性粉', '酒石酸泰万菌素预混剂', '酒石酸泰万菌素可溶性粉'
]

const provinces: string[] = [
    "集团", "苏北", "江西", "南阳",
    "安徽", "山东", "吉林", "陕西",
    "山西", "周口", "贵州", "京津冀", "宛东",
    "内蒙古", "黑龙江", "甘肃", "内乡综合体", "四川"
];


function getMedicinesData () {
    return medicinesData.map((item) => {
        return {
            medicines: item,
            data: getSixRandom()
        }
    })
}

// 生成6个0-100的随机数并保留一位小数的方法
function getSixRandom() {
    // 生成一个 0 到 1 之间的随机数
    let randomNumber = Math.random();

    // 乘以 100，将随机数的范围扩大到 0 到 100
    randomNumber = randomNumber * 100;

    // 将随机数四舍五入到小数点后一位
    randomNumber = Math.round(randomNumber * 10) / 10;
    return randomNumber
}

// 模拟表格数据
export function getChartData () {
    return provinces.map((item) => {
        return {
            province: item,
            data: getMedicinesData()
        }
    })
}
