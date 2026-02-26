import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
    const siteId = process.env.NEXT_PUBLIC_SITE_ID
    if (!siteId) return NextResponse.next()

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/rpc/get_site_status`,
            {
                method: 'POST',
                headers: {
                    'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ p_site_id: siteId }),
                cache: 'no-store',
            }
        )
        const data = await res.json()
        const status = Array.isArray(data) ? data[0] : data

        if (status?.is_blocked) {
            return NextResponse.rewrite(new URL('/blocked', req.url))
        }

        if (!status?.is_published) {
            return NextResponse.rewrite(new URL('/coming-soon', req.url))
        }
    } catch {
        // エラー時はそのまま通す（フェイルオープン）
    }

    return NextResponse.next()
}

export const config = {
    // _next/static, api, blocked, coming-soon, favicon などは除外してループを防ぐ
    matcher: ['/((?!_next|api|blocked|coming-soon|favicon|icon).*)'],
}
