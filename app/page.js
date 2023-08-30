'use client'
import Link from "next/link";
import {getCookie} from "@/app/utils/fetchCookie";
import {setCookie} from "@/app/utils/setCookie";
import {useEffect, useState} from "react";

export default function Home() {

    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    const [cookie, myCookie] =  useState('')
    const [isActive, setIsActive] = useState(false);

    // useEffect(()=>{
    //     (
    //          ()=>{
    //             const cookie =  getCookie()
    //             console.log(cookie)
    //             if(cookie.theme !== undefined){
    //                 setName(cookie['theme']['name'])
    //                 setValue(cookie['theme']['value'])
    //             }
    //
    //
    //         }
    //     )()
    // },[])



    const handleCookie = () =>{
        return setCookie();
    }

    const handleClick = async ()=>{
        setIsActive(!isActive);
        const {cookies} =  await getCookie()
        myCookie(cookies)
        // console.log(cookie)

        // console.log(cookie)
        if(cookie !== undefined){
            const name = setName(cookie.name)
            const value =setValue(cookie.value)
        }
    }


  return (
    <main>
      <div>
          <Link href="/contact">Contact</Link>

          <button className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'} onClick={handleCookie}>Set Cookie</button>
          <button className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'} onClick={handleClick}>Show Cookie</button>

          <p className={isActive ? 'show' : 'hide'}>{ name +' :'+ value}</p>
      </div>
    </main>
  )
}
