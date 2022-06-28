import Image from '@/components/Image'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { useTranslation } from 'next-export-i18n'
import RadianSvg from '@/svg/radian.svg'

export default function Partner() {
  const { t } = useTranslation()

  return (
    <>
      <div className="relative w-full py-12 laptop:overflow-hidden laptop:bg-white laptop:py-0">
        <div className="relative z-30 flex h-72 flex-col items-center justify-center space-y-5 text-center laptop:h-[550px] laptop:text-left ">
          <div className="text-xl font-medium text-white laptop:mt-24 laptop:text-4xl">
            {t('lang_54')}
          </div>
          <div className="pb-8 text-sm text-white md:text-base laptop:pb-0">{t('lang_55')}</div>
          <div className="flex space-x-8">
            <Link
              href={siteMetadata.getStarted}
              aria-label={siteMetadata.headerTitle}
              className="flex w-32 items-center justify-center rounded bg-[#3F4045] py-2 text-sm text-white hover:shadow-sm"
            >
              {t('Get started')}
            </Link>

            <Link
              href="."
              aria-label={siteMetadata.headerTitle}
              className=" flex w-32 items-center justify-center rounded bg-gray-50 py-2 text-sm text-downloadText "
            >
              {t('Consulting Sales')}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 z-20 hidden h-full laptop:block">
        <Image src="/static/images/bg2x.png" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute bottom-0 left-0  right-0 z-50 hidden overflow-hidden text-[#263036] laptop:block">
        <RadianSvg className="w-full fill-current" />
      </div>
      <div className="absolute -bottom-1 left-0 right-0 z-50 hidden h-[5px] overflow-hidden bg-[#263036] laptop:block" />
    </>
  )
}
