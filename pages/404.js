import Link from '@/components/Link'
import Image from '@/components/Image'
import { useTranslation } from 'next-export-i18n'

export default function FourZeroFour() {
  const { t } = useTranslation()

  return (
    <div className="fixed  inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="text-6xl font-medium text-[#2E2E2E]">{t('not found title')}</div>
      <div className="mt-3 text-[#2E2E2E]">
        {t('return')}{' '}
        <span className="text-[#3B6FFF]">
          <Link href="/">{t('homepage')}</Link>
        </span>
      </div>
      <div>
        <Image
          width="564px"
          height="378px"
          alt=""
          src="/static/images/404.webp"
          srcSet="/static/images/404@2x.webp"
          className="mt-10 mb-12 h-[378px] w-[564px] object-cover"
        />
      </div>
    </div>
  )
}
