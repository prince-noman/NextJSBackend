export async function getCookie(){
    const res = await fetch('/api/GetCookie')

    if(res.status === 200){
        return  res.json()
    }else{
        return []
    }
}

// export default async function getAllPosts(){
//     const res = await fetch(BaseURL+"/post-newest")
//     if(res.status === 200){
//         return res.json();
//     }else{
//         return []
//     }
//
// }