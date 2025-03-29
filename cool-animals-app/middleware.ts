import { NextRequest, NextResponse } from "next/server";

export const middleware = (request:NextRequest) => {
    if(request.nextUrl.pathname.startsWith("/middleware")) {
        return NextResponse.redirect(new URL("/cat", request.nextUrl).toString());
    }
    NextResponse.next();
};