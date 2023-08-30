export async function getCookie(){
    const res = await fetch('/api/getCookie')
const data =  await res.json()
    // console.log(data)
    if(res.status === 200){
        return  data
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