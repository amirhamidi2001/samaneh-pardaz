import { useEffect, useState } from 'react'
import { site } from '@/content/site'

/**
 * ایمیل فقط پس از mount در مرورگر برگردانده می‌شود؛ بنابراین در HTML پیش‌رندرشده
 * (که ربات‌های جمع‌آوری ایمیل می‌خوانند) آدرس به‌صورت متن ساده وجود ندارد.
 */
export function useEmail(): string | null {
  const [email, setEmail] = useState<string | null>(null)
  useEffect(() => {
    setEmail(site.email)
  }, [])
  return email
}
