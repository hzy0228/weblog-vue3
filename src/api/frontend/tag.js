import axios from '@/axios'

export function getTagList(data){
    return axios.post("/tag/list",data)
}