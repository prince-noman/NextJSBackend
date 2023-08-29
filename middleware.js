import {NextResponse} from "next/server";


export function middleware(req,res) {

    if(req.nextUrl.pathname.startsWith("/contact")){
        const url = req.nextUrl.clone()
        url.pathname = '/product'
        return NextResponse.redirect(url)
    }


    //Modifying the Headers
    if(req.nextUrl.pathname.startsWith("/api/products")){
      const reqHeader = new Headers(req.headers)
        const authorization  = reqHeader.get('authorization')
        console.log(authorization)
        if(authorization == '123-XYZ'){
           NextResponse.json(
                {status: true, msg: "Request Completed"},
                {
                    status: 201,
                    headers:{'Bearer': '123-XYZ'}
                }
            )
            return NextResponse.next()
        }
        else{
            return NextResponse.json({status:"failed"})
        }
    }


}


