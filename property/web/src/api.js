async function get(url) {
    const resp = await fetch(`app/property/api/${url}`);
    return await resp.json();
}


function getParams(params){    
    return Object.keys(params).filter(k => params[k]).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&')
}

export function getAverageByYear(params) {
    return get(`sales_by_year/get?` + getParams(params))
}

export function getAverageBySuburb(params) {
    return get(`sales_by_suburb/get?` + getParams(params))
}

export function getAverageByRoom(params){
    return get(`sales_by_rooms/get?` + getParams(params))
}