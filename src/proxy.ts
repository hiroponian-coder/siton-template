import { NextRequest, NextResponse } from 'next/server'

export async function proxy(req: NextRequest) {
    const siteId = process.env.NEXT_PUBLIC_SITE_ID
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!siteId || !supabaseUrl || !anonKey) return NextResponse.next()

    const baseUrl = supabaseUrl.replace(/\/+$/, '')

    try {
        const res = await fetch(
            `${baseUrl}/rest/v1/rpc/get_site_status`,
            {
                method: 'POST',
                headers: {
                    'apikey': anonKey,
                    'Authorization': `Bearer ${anonKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ p_site_id: siteId }),
                cache: 'no-store',
            }
        )

        if (!res.ok) return NextResponse.next()

        const data = await res.json()
        const status = Array.isArray(data) ? data[0] : data

        if (!status || typeof status.is_published === 'undefined') {
            return NextResponse.next()
        }

        if (status.is_blocked) {
            return NextResponse.rewrite(new URL('/blocked', req.url))
        }

        if (!status.is_published) {
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
