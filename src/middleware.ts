import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
    const siteId = process.env.NEXT_PUBLIC_SITE_ID
    if (!siteId) {
        const res = NextResponse.next()
        res.headers.set('x-mw-debug', 'no-site-id')
        return res
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
    // 末尾スラッシュを正規化
    const baseUrl = supabaseUrl.replace(/\/+$/, '')

    try {
        const res = await fetch(
            `${baseUrl}/rest/v1/rpc/get_site_status`,
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

        if (!res.ok) {
            const resp = NextResponse.next()
            resp.headers.set('x-mw-debug', `rpc-error-${res.status}`)
            return resp
        }

        const data = await res.json()
        const status = Array.isArray(data) ? data[0] : data

        if (!status || typeof status.is_published === 'undefined') {
            const resp = NextResponse.next()
            resp.headers.set('x-mw-debug', `no-data:${JSON.stringify(data).slice(0, 100)}`)
            return resp
        }

        if (status.is_blocked) {
            const resp = NextResponse.rewrite(new URL('/blocked', req.url))
            resp.headers.set('x-mw-debug', 'blocked')
            return resp
        }

        if (!status.is_published) {
            const resp = NextResponse.rewrite(new URL('/coming-soon', req.url))
            resp.headers.set('x-mw-debug', 'unpublished')
            return resp
        }

        const resp = NextResponse.next()
        resp.headers.set('x-mw-debug', 'published')
        return resp
    } catch (e: any) {
        const resp = NextResponse.next()
        resp.headers.set('x-mw-debug', `catch:${e?.message?.slice(0, 80) || 'unknown'}`)
        return resp
    }
}

export const config = {
    // _next/static, api, blocked, coming-soon, favicon などは除外してループを防ぐ
    matcher: ['/((?!_next|api|blocked|coming-soon|favicon|icon).*)'],
}
