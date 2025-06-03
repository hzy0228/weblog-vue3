import axios from '@/axios'

export function getCategoryList(data){
    return axios.post("/category/list",data)
}