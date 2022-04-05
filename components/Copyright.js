import { useTranslation } from 'next-export-i18n'

export default function Copyright() {
  const { t } = useTranslation()

  return (
    <div className="flex h-14 w-full items-center justify-center border-t border-t-copyrightBorder bg-copyrightBackground text-xs text-copyrightText">
      <div className="flex w-full max-w-8xl justify-start tablet:hidden">
        {`${t('copyright')} 2016-${new Date().getFullYear()} ${t('company')}`}
      </div>
      <div className="hidden w-full max-w-7xl justify-start tablet:flex">
        {`${t('copyright')} 2016-${new Date().getFullYear()} ${t('company')} ${t('reserved')}`}
      </div>
    </div>
  )
}
