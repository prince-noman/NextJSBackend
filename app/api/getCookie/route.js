

//GET
import {NextResponse} from "next/server";

export async function GET(req, res){

        const cookieData = req.cookies.get("theme")
        // console.log(cookieData)

        return NextResponse.json({cookies:cookieData})
}

