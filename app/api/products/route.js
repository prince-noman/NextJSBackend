import {NextResponse} from "next/server";
import {headers} from "next/headers";

export async function GET(req, res){

    const list = headers();
    const Bearer = list.get('Bearer')

    return NextResponse.json(
        {Bearer: Bearer}
    )
}

