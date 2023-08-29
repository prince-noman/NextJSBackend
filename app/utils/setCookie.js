export async function setCookie(){
    const res = await fetch('http://localhost:3000/api/SetCookie')

    if(res.status === 200){
        return  res.json()
    }else{
        return []
    }
}