import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    async function middleware(request) {
        let pathname = request.nextUrl.pathname;
        let authtoken = request.nextauth.token;

        if (pathname.startsWith("/admin") && authtoken?.user.role !== "admin") {
            return NextResponse.rewrite(
                new URL("/not-so-working-url", request.url)
            );
        }
        // if (pathname.startsWith("/auth") && !!authtoken?.user) {
        //     return NextResponse.redirect(new URL("/home", request.url));
        // }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = {
    matcher: ["/user/:path*", "/admin/:path*"],
};
