export default function BlockedPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-900">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🚫</span>
                </div>
                <h1 className="text-2xl font-bold mb-4">このサイトは現在<br />ご利用いただけません</h1>
                <p className="text-slate-500 text-sm leading-relaxed">
                    管理者によって公開が一時停止されています。<br />
                    再開までしばらくお待ちください。
                </p>
            </div>
        </div>
    )
}
