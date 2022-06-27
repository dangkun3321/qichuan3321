import { useTranslation } from 'next-export-i18n'
import Dot from '@/svg/dot.svg'
import Fs from '@/svg/fs.svg'

export default function Session() {
  const { t } = useTranslation()

  return (
    <>
      <Dot className="absolute left-3 top-3 z-10 hidden 2xl:block" />
      <Dot className="absolute right-3 bottom-3 z-10 hidden 2xl:block" />
      <div className="relative flex  justify-center overflow-hidden bg-[#263036] pb-24 pt-4 ">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-14 bg-gradient-to-r from-[#9BFFFA] to-[#C8FFB8] bg-clip-text text-[2.125rem] font-extrabold text-transparent laptop:text-5xl">
            {t('lang_11')}
          </div>
          <div className="mt-4 flex max-w-xl flex-col items-center space-y-2 px-4 text-center  leading-7 text-gray-200 laptop:px-0">
            {t('lang_12')}
          </div>
          <Fs className=" mt-24 hidden h-full object-contain laptop:block" />
          <div className="mt-14 h-[198.79px] w-full max-w-[389px] bg-[url('/static/images/xswitch/17.png')] bg-contain bg-no-repeat laptop:hidden"></div>
        </div>
      </div>
    </>
  )
}
