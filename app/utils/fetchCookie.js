export async function getCookie(){
    const res = await fetch('/api/getCookie',{
        method: 'GET'
    })
    const data =  await res.json()

    if(res.status === 200){
        return  data
    }else{
        return []
    }
}
