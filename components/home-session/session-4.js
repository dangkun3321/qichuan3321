import { useTranslation } from 'next-export-i18n'
import React, { useState } from 'react'
import cls from 'classnames'
import Img1 from '@/svg/img-01.svg'
import Image from '@/components/Image'

export default function Session() {
  const { t } = useTranslation()

  return (
    <div className="relative pt-16 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-full">
        <div className="text-center xl:text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            {t('lang_13')}
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-sm text-gray-600 md:mt-4 md:text-base lg:text-lg xl:mx-0">
            {t('lang_14')}
          </p>
        </div>
        <Tabs />
      </div>
    </div>
  )
}

export function Tabs() {
  const { t } = useTranslation()
  const [tabIndex, setTabIndex] = useState(0)

  const tabOnClick = (index) => {
    setTabIndex(index)
  }

  return (
    <>
      <div className="mx-5 mt-10 flex max-w-7xl items-center  space-x-6 border-b text-content md:mx-0 laptop:space-x-20">
        <div onClick={() => tabOnClick(0)} className="flex cursor-pointer flex-col items-center">
          <div className={cls(tabIndex === 0 && 'font-medium text-black')}>
            {t('Strong scalability')}
          </div>
          <div
            className={cls(
              tabIndex === 0 ? 'opacity-100' : 'opacity-0',
              'h-1 w-20 items-center justify-center  bg-trialText'
            )}
          />
        </div>

        <div onClick={() => tabOnClick(1)} className="flex cursor-pointer flex-col items-center">
          <div className={cls(tabIndex === 1 && 'font-medium text-black')}>
            {t('safe and stable')}
          </div>
          <div
            className={cls(
              tabIndex === 1 ? 'opacity-100' : 'opacity-0',
              'h-1 w-20 items-center justify-center  bg-trialText'
            )}
          />
        </div>

        <div onClick={() => tabOnClick(2)} className="flex cursor-pointer flex-col items-center">
          <div className={cls(tabIndex === 2 && 'font-medium text-black')}>{t('lang_15')}</div>

          <div
            className={cls(
              tabIndex === 2 ? 'opacity-100' : 'opacity-0',
              'h-1 w-20 items-center justify-center  bg-trialText'
            )}
          />
        </div>
      </div>

      <div
        className={cls(
          tabIndex === 0 ? 'flex' : 'hidden',
          'mt-8 bg-white pl-10 pb-10 laptop:h-[32rem] laptop:w-full laptop:max-w-7xl laptop:overflow-hidden laptop:rounded-md laptop:pr-16 laptop:pl-16 laptop:shadow'
        )}
      >
        <div className="flex flex-1 flex-col pr-12">
          <div className="mt-12 hidden text-[2rem] font-medium text-title laptop:block">
            <div>{t('Strong scalability')}</div>
          </div>

          <div className="flex items-center md:mt-9">
            <div className="h-2 w-2 rounded-full bg-downloadText md:h-3 md:w-3 md:rounded-sm md:bg-[#BDC2D4] " />
            <div className="ml-3 flex-1 font-medium text-title">{t('lang_16')}</div>
          </div>
          <div className=" mt-2 max-w-lg text-sm text-content md:ml-6">{t('lang_17')}</div>

          <div className="mt-7 flex items-center">
            <div className="h-2 w-2 rounded-full bg-downloadText md:h-3 md:w-3 md:rounded-sm md:bg-[#BDC2D4] " />
            <div className="ml-3 font-medium text-title">{t('lang_18')}</div>
          </div>
          <div className=" mt-2 max-w-lg text-sm text-content md:ml-6">{t('lang_19')}</div>

          <div className="mt-7 flex items-center">
            <div className="h-2 w-2 rounded-full bg-downloadText md:h-3 md:w-3 md:rounded-sm md:bg-[#BDC2D4] " />
            <div className="ml-3 font-medium text-title">{t('interconnection')}</div>
          </div>
          <div className=" mt-2 max-w-[34rem] text-sm text-content md:ml-6 laptop:w-[34rem]">
            <strong>{t('lang_20')}</strong>
            {t('lang_21')}
          </div>

          <div className="mt-7 flex items-center">
            <div className="h-2 w-2 rounded-full bg-downloadText md:h-3 md:w-3 md:rounded-sm md:bg-[#BDC2D4] " />
            <div className="ml-3 font-medium text-title">{t('lang_22')}</div>
          </div>
          <div className="mt-2 max-w-lg text-sm text-content md:ml-6">{t('lang_23')}</div>
        </div>

        <div className="-mt-36">
          <Image
            width="586px"
            height="365px"
            src="/static/images/xswitch/20.webp"
            alt={t('rts homepage')}
            className="hidden h-full w-full  object-contain laptop:block"
          />
        </div>
      </div>

      <div
        className={cls(
          tabIndex === 1 ? 'flex' : 'hidden',
          'mt-8 bg-white pl-10 pb-10 laptop:h-[32rem] laptop:w-full laptop:max-w-7xl laptop:overflow-hidden laptop:rounded-md laptop:pr-16 laptop:pl-16 laptop:shadow'
        )}
      >
        <div className="flex flex-1 flex-col pr-12">
          <div className="mt-12 hidden text-[2rem] font-medium text-title laptop:block">
            <div>{t('safe and stable')}</div>
          </div>

          <div className="flex items-center md:mt-9">
            <div className="h-2 w-2 rounded-full bg-downloadText md:h-3 md:w-3 md:rounded-sm md:bg-[#BDC2D4] " />
            <div className="ml-3 font-medium text-title">{t('lang_24')}</div>
          </div>
          <div className=" mt-2 max-w-lg text-sm text-content md:ml-6">{t('lang_25')}</div>

          <div className="mt-7 flex items-center">
            <div className="h-2 w-2 rounded-full bg-downloadText md:h-3 md:w-3 md:rounded-sm md:bg-[#BDC2D4] " />
            <div className="ml-3 font-medium text-title">{t('system protection')}</div>
          </div>
          <div className=" mt-2 max-w-lg text-sm text-content md:ml-6">{t('lang_26')}</div>

          <div className="mt-7 flex items-center">
            <div className="h-2 w-2 rounded-full bg-downloadText md:h-3 md:w-3 md:rounded-sm md:bg-[#BDC2D4] " />
            <div className="ml-3 font-medium text-title">{t('run smoothly')}</div>
          </div>
          <div className=" mt-2 max-w-lg text-sm text-content md:ml-6">{t('lang_27')}</div>
        </div>

        <div>
          <Image
            width="586px"
            height="365px"
            src="/static/images/xswitch/22.webp"
            alt={t('rts homepage')}
            className="hidden h-full w-[422px]  object-contain laptop:block"
          />
        </div>
      </div>

      <div
        className={cls(
          tabIndex === 2 ? 'flex' : 'hidden',
          'mt-8  bg-white pl-10 pb-10 laptop:h-[32rem] laptop:w-full laptop:max-w-7xl laptop:overflow-hidden laptop:rounded-md laptop:pr-16 laptop:pl-16 laptop:shadow'
        )}
      >
        <div className="flex flex-1 flex-col pr-12">
          <div className="mt-12 hidden text-[2rem] font-medium text-title laptop:block">
            <div>{t('lang_28')}</div>
          </div>

          <div className="flex items-center md:mt-9">
            <div className="h-2 w-2 rounded-full bg-downloadText md:h-3 md:w-3 md:rounded-sm md:bg-[#BDC2D4] " />
            <div className="ml-3 font-medium text-title">{t('lang_29')}</div>
          </div>
          <div className=" mt-2 max-w-lg text-sm text-content md:ml-6">{t('lang_30')}</div>

          <div className="mt-9 flex items-center">
            <div className="h-2 w-2 rounded-full bg-downloadText md:h-3 md:w-3 md:rounded-sm md:bg-[#BDC2D4] " />
            <div className="ml-3 font-medium text-title">{t('lang_31')}</div>
          </div>
          <div className=" mt-2 max-w-lg text-sm text-content md:ml-6">{t('lang_32')}</div>

          <div className="mt-7 flex items-center">
            <div className="h-2 w-2 rounded-full bg-downloadText md:h-3 md:w-3 md:rounded-sm md:bg-[#BDC2D4] " />
            <div className="ml-3 font-medium text-title">{t('open interface')}</div>
          </div>
          <div className="mt-2 max-w-lg text-sm text-content md:ml-6">{t('lang_33')}</div>
        </div>

        <div className="-mt-3">
          <Img1 className="hidden laptop:block" />
        </div>
      </div>
    </>
  )
}
