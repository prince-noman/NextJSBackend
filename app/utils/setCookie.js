export async function setCookie(){
    const res = await fetch('/api/SetCookie')

    if(res.status === 200){
        return  res.json()
    }else{
        return []
    }
}