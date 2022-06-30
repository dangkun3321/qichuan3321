import { useTranslation } from 'next-export-i18n'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import RTS_SVG from '@/svg/rts.svg'
import FSCN_SVG from '@/svg/fscn.svg'

export default function Session() {
  const { t } = useTranslation()

  return (
    <>
      <div className="flex w-full justify-center border-t bg-white pt-16 pb-16 md:border-none md:pt-28 laptop:py-36 ">
        <div className="flex max-w-full items-center space-x-4 laptop:w-full">
          <div className="hidden w-5/12 items-center justify-end xl:w-full xl:flex-1 laptop:flex">
            <div className="h-[380px] w-full items-end bg-contain bg-no-repeat laptop:flex laptop:bg-[url('/static/images/xswitch/18.webp')]"></div>
          </div>

          <div className="flex flex-1 flex-col justify-center pr-4 laptop:pr-0">
            <div className="w-full text-center text-3xl font-semibold text-title md:text-4xl laptop:text-left ">
              {t('lang_34')}
            </div>
            <div className="mt-5 flex flex-col space-y-5 text-sm text-content md:mt-16 2xl:max-w-xl laptop:mt-8">
              <div>{t('lang_35')}</div>
              <div>{t('lang_36')}</div>
              <div>{t('lang_37')}</div>
            </div>
            <div className="mt-12 flex w-full flex-wrap justify-between ">
              <div className="grid w-full grid-cols-1 flex-wrap justify-between gap-4 2xl:gap-8 laptop:w-auto laptop:grid-cols-2 laptop:gap-4">
                <Link
                  className="flex w-full flex-col space-y-2 rounded border px-4 py-5 hover:shadow laptop:w-64"
                  href={siteMetadata.rts}
                  aria-label={t('rts homepage')}
                >
                  <div className="flex h-6 items-center space-x-4">
                    <RTS_SVG className="h-5 w-5" />
                    <div className="text-sm text-content">{t('rts homepage')}</div>
                  </div>
                  <div className=" text-xs text-gray-600">{t('lang_93')}</div>
                </Link>

                <Link
                  className="flex w-full flex-col space-y-2  rounded border px-4 py-5 hover:shadow laptop:w-64"
                  href={siteMetadata.freeswitchCN}
                  aria-label={t('FreeSWITCH-CN')}
                >
                  <div className="flex h-6 items-center space-x-4">
                    <FSCN_SVG className="h-5" />
                    <div className="pt-1 text-sm text-content">{t('FreeSWITCH-CN')}</div>
                  </div>
                  <div className=" text-xs text-gray-600">{t('lang_94')}</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
