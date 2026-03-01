import { Profile } from '@/types/profile'
import { Phone, MessageCircle, Navigation } from 'lucide-react'

export default function MobileCTABar({ profile }: { profile: Profile }) {
  const hasPhone = !!profile.phone_number
  const hasLine = !!profile.line_id
  const hasAddress = !!profile.address

  if (!hasPhone && !hasLine && !hasAddress) return null

  const buttons = []

  if (hasPhone) {
    buttons.push({
      href: `tel:${profile.phone_number!.replace(/[-\s]/g, '')}`,
      icon: Phone,
      label: '電話',
      color: 'bg-green-600 hover:bg-green-700',
    })
  }

  if (hasLine) {
    const lineUrl = profile.line_id!.startsWith('http')
      ? profile.line_id!
      : `https://line.me/R/ti/p/@${profile.line_id!.replace(/^@/, '')}`
    buttons.push({
      href: lineUrl,
      icon: MessageCircle,
      label: 'LINE',
      color: 'bg-[#06C755] hover:bg-[#05b34c]',
    })
  }

  if (hasAddress) {
    buttons.push({
      href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(profile.address!)}`,
      icon: Navigation,
      label: '経路案内',
      color: 'bg-blue-600 hover:bg-blue-700',
    })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-3 py-2 safe-bottom">
      <div className={`grid gap-2 ${buttons.length === 1 ? 'grid-cols-1' : buttons.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
        {buttons.map((btn) => (
          <a
            key={btn.label}
            href={btn.href}
            target={btn.label === '電話' ? undefined : '_blank'}
            rel={btn.label === '電話' ? undefined : 'noopener noreferrer'}
            className={`flex items-center justify-center gap-2 ${btn.color} text-white rounded-xl py-3 text-sm font-bold transition-colors`}
          >
            <btn.icon className="h-4 w-4" />
            {btn.label}
          </a>
        ))}
      </div>
    </div>
  )
}
