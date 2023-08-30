export async function getCookie(){
    const res = await fetch('/api/getCookie',{
        method: 'GET'
    })
    // const data =  await res.json()
    // console.log(data)
    if(res.status === 200){
        return  res.json()
    }else{
        return []
    }
}
