import * as icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export function resolveIcon(name: string): LucideIcon {
  const icon = (icons as Record<string, unknown>)[name]
  if (icon && typeof icon === 'function') {
    return icon as LucideIcon
  }
  return icons.Store
}
