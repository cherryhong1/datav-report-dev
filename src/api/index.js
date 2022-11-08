import http from "../utils/request"
// 报表词云数据
export const wordCloudApi = () => http.get('/screen/wordcloud')

//报表地图散点数据
export const mapScatterApi = () => http.get('/screen/map/scatter')

// 报表/大屏数据
export const screenDataApi = () => http.get('/screen/data')