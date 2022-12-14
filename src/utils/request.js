import axios from 'axios'
import {ElLoading, ElMessage} from 'element-plus';

let http = axios.create({
	baseURL: '',
	timeout: 10000
})

let loadingInstance;

// 拦截器的添加
http.interceptors.request.use(config => {
	loadingInstance = ElLoading.service("加载中")
	return config
}, err => {
	//请求错误(前端操作是，取消loading圈，并会弹出一个网络异常的提示)
	loadingInstance?.close()
	ElMessage.error("网络异常")
	return Promise.reject(err)
})

//响应拦截器
http.interceptors.response.use(res => {
	loadingInstance?.close()
  if(res.status === 200 &&res.data?.code ===0){
    return res.data.data
  }

}, err => {
	//请求失败(前端做法是取消loading圈给提示)
	loadingInstance?.close()
	ElMessage.error("请求失败")
	return Promise.reject(err)
})

export default http;