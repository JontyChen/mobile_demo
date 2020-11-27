import {get} from './http'

export const GetToday = (params)=>{
    let url = "/mock/index/today.json";
  return get(url, params)
}

export const GetTom = (params)=>{
  let url = "/mock/index/tommory.json";
return get(url, params)
}

export const GetMuYing = (params)=>{
  let url = '/mock/index/muying.json';
  return get(url,params)
}

export const GetQingShe = (params)=>{
  let url = '/mock/index/selectedactives.json';
  return get(url,params)
}

export const GetMingPin = (params)=>{
  let url = '/mock/index/mingpin.json';
  return get(url,params)
}

export const GetSearchButton = (params)=>{
  let url = '/mock/search/searchbutton.json';
  return get(url,params)
}

export const GetPinTuan = (params)=>{
  let url = '/mock/pintuan/pintuan.json';
  return get(url,params)
}
