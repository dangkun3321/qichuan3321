import { useTranslation } from 'next-export-i18n'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

export default function Copyright() {
  const { t } = useTranslation()

  return (
    <div className="flex h-14 w-full items-center justify-center border-t border-t-copyrightBorder bg-copyrightBackground text-xs text-copyrightText">
      <div className="flex w-full max-w-8xl items-center justify-center laptop:hidden">
        {`${t('copyright')} ${t('company')}`}
        <Link className="pl-2" href="https://beian.miit.gov.cn/" aria-label={siteMetadata.icp}>
          {siteMetadata.icp}
        </Link>
      </div>
      <div className="hidden w-full justify-start pl-96 laptop:flex">
        {`${t('copyright')} 2016-${new Date().getFullYear()} ${t('company')} ${t('reserved')}`}
        <Link className="pl-4" href="https://beian.miit.gov.cn/" aria-label={siteMetadata.icp}>
          {siteMetadata.icp}
        </Link>
      </div>
    </div>
  )
}
