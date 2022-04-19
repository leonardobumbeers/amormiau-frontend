export async function middleware(req, ev) {
    const { pathname } = req.nextUrl
    if (pathname == '/login') {
        return NextResponse.redirect('/home')
    }
    return NextResponse.next()
}