export default function ComingSoonPage() {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center p-6"
            style={{ background: 'linear-gradient(135deg, #fdf6ff 0%, #f0f9ff 50%, #fff7f0 100%)' }}
        >
            <div className="max-w-sm w-full text-center">
                <div className="text-7xl mb-6 animate-bounce">🐽</div>
                <h1 className="text-3xl font-bold mb-3" style={{ color: '#7c5cbf' }}>
                    準備中です
                </h1>
                <p className="text-lg font-medium mb-2" style={{ color: '#a78bda' }}>
                    もうすぐ公開されます
                </p>
                <div className="flex items-center justify-center gap-2 my-6">
                    <div className="h-px w-12 rounded-full" style={{ background: '#d8b4fe' }}></div>
                    <span className="text-sm" style={{ color: '#c4b5fd' }}>✦</span>
                    <div className="h-px w-12 rounded-full" style={{ background: '#d8b4fe' }}></div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#a0aec0' }}>
                    サイトを準備しています。<br />
                    しばらくお待ちください。
                </p>
                <p className="mt-10 text-xs" style={{ color: '#d1d5db' }}>
                    Powered by <span style={{ color: '#a78bda' }}>サイトン</span>
                </p>
            </div>
        </div>
    )
}
