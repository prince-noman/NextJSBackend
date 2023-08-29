import {NextResponse} from "next/server";


export function middleware(req,res) {

    if(req.nextUrl.pathname.startsWith("/contact")){
        const url = req.nextUrl.clone()
        url.pathname = '/product'
        return NextResponse.redirect(url)
    }


    //Modifying the Headers
    if(req.nextUrl.pathname.startsWith("/api/products")) {

        const requestHeaders = new Headers(req.headers)
        const authorization = requestHeaders.get('authorization')

        if(authorization==='123-XYZ'){

            requestHeaders.set('Bearer', '123-ABC')

            return NextResponse.next({
                request:{headers:requestHeaders}
            })

        }else {
            return NextResponse.json({msg: 'Failed'})
        }
    }


}


