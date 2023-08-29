'use client'
import Link from "next/link";
import {getCookie} from "@/app/utils/fetchCookie";
import {setCookie} from "@/app/utils/setCookie";
import {useEffect, useState} from "react";

export default function Home() {

    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    const [isActive, setIsActive] = useState(false);
    useEffect(()=>{
        (
            async ()=>{
                const cookie = await getCookie()
                if(cookie.theme !== undefined){
                    const {name, value} = cookie.theme
                    setName(name)
                    setValue(value)
                }


            }
        )()
    },[name, value])

    const handleClick = ()=>{
        setIsActive(!isActive);
    }

    const handleCookie = () =>{
        return setCookie();
    }

    // console.log(cookie)
    // const {name, value} = cookie.theme

  return (
    <main>
      <div>
          <Link href="/contact">Contact</Link>

          <button className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'} onClick={handleCookie}>Set Cookie</button>
          <button className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'} onClick={handleClick}>Show Cookie</button>

          <p className={isActive ? 'show' : 'hide'}>{name + ': ' + value}</p>
      </div>
    </main>
  )
}
