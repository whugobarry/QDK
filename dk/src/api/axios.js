import Axios from 'axios'
import baseURL from './config'

function axios(url,data=[]){
    let axiosOptions = {
        baseURL:baseURL,
        url:url,
        data:data,
        method:'post'
    }
    return new Promise((resolve,reject)=>{
        Axios(axiosOptions)
        .then((res)=>{
            resolve(res.data)
        })
        .catch((response)=>{
            reject(response)
        })
    })
}

export default{
    install:function(Vue){
        Vue.prototype.ajax = (url,data) => axios(url,data)
    }
}