import { Fragment } from 'react'
import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/outline'
import { useTranslation } from 'next-export-i18n'
import cls from 'classnames'
import ContactCard from '@/components/ContactCard'
import { Popover } from '@headlessui/react'

export default function Version() {
  const { t } = useTranslation()

  const tiers = [
    {
      name: 'Community',
      href: '#',
      price: t('Community price'),
    },
    {
      name: 'Commercial',
      href: '#',
      price: t('Commercial price'),
    },
    {
      name: 'Professional',
      href: '#',
      price: t('Professional price'),
    },
    {
      name: 'Enterprise',
      href: '#',
      price: t('Enterprise price'),
    },
  ]
  const sections = [
    {
      name: '',
      features: [
        {
          name: t('lang_45'),
          tiers: { Community: null, Commercial: null, Professional: null, Enterprise: null },
        },
        {
          name: t('lang_46'),
          tiers: { Community: null, Commercial: null, Professional: null, Enterprise: null },
        },
        {
          name: t('lang_47'),
          tiers: { Community: true, Commercial: true, Professional: true, Enterprise: true },
        },
        {
          name: t('lang_48'),
          tiers: { Community: null, Commercial: null, Professional: null, Enterprise: null },
        },
        {
          name: t('lang_49'),
          tiers: { Community: null, Commercial: null, Professional: null, Enterprise: null },
        },
        {
          name: t('lang_51'),
          tiers: { Community: null, Commercial: null, Professional: null, Enterprise: null },
        },
        {
          name: '',
          tiers: { Community: null, Commercial: null, Professional: null, Enterprise: null },
        },
      ],
    },
    {
      name: '',
      features: [
        {
          name: t('lang_41'),
          tiers: { Community: null, Commercial: null, Professional: null, Enterprise: null },
        },
        {
          name: t('lang_142'),
          tiers: { Community: false, Commercial: true, Professional: true, Enterprise: true },
        },
        {
          name: t('lang_141'),
          tiers: { Community: null, Commercial: null, Professional: null, Enterprise: null },
        },
        {
          name: '',
          tiers: { Community: null, Commercial: null, Professional: null, Enterprise: null },
        },
      ],
    },
    {
      name: '',
      features: [
        {
          name: t('lang_60'),
          tiers: { Community: null, Commercial: null, Professional: null, Enterprise: null },
        },
        {
          name: t('lang_66'),
          tiers: { Community: false, Commercial: false, Professional: true, Enterprise: true },
        },
        {
          name: t('lang_59'),
          tiers: { Community: null, Commercial: null, Professional: null, Enterprise: null },
        },
        {
          name: t('lang_64'),
          tiers: { Community: null, Commercial: null, Professional: null, Enterprise: null },
        },
        {
          name: '',
          tiers: { Community: null, Commercial: null, Professional: null, Enterprise: null },
        },
      ],
    },
    {
      name: '',
      features: [
        {
          name: t('lang_65'),
          tiers: { Community: false, Commercial: false, Professional: false, Enterprise: true },
        },
        {
          name: t('lang_43'),
          tiers: {
            Community: t('Community Support'),
            Commercial: t('5x8 support'),
            Professional: t('lang_58'),
            Enterprise: t('lang_58'),
          },
        },
        {
          name: t('lang_42'),
          tiers: {
            Community: t('None'),
            Commercial: t('2 years'),
            Professional: t('3 years'),
            Enterprise: t('5 years'),
          },
        },
      ],
    },
    {
      name: '',
      features: [
        {
          name: t(''),
          tiers: '',
        },
        {
          name: t(''),
          tiers: '',
        },
      ],
    },
  ]

  return (
    <div className="w-full bg-[#f0f2f5] lg:bg-white">
      <div className="mx-auto py-16">
        {/* xs to lg */}
        <div className="mx-auto w-full space-y-16 px-4 lg:hidden">
          {tiers.map((tier, index) => (
            <section key={tier.name} className={cls(index % 2 === 0 && 'bg-[#f0f2f5] pt-8')}>
              <div className="mb-8 px-4 text-center">
                <h2 className="text-lg font-medium leading-6 text-gray-900">{t(tier.name)}</h2>
                <div className="mt-4">
                  {tier.price == 0 ? (
                    <span className="text-base font-medium text-[#3ABAAE]">{t('Free')}</span>
                  ) : (
                    <>
                      <span className="pr-1 text-base font-medium text-gray-900">
                        {t(tier.price)}
                      </span>
                      <span>{t('start')}</span>
                    </>
                  )}
                </div>
                <div className="mt-6 flex items-center justify-center pb-4">
                  {tier.price == 0 ? (
                    <a
                      href="pages/xswitch-install/"
                      className="rounded border border-[#3F4045] px-7 py-2 text-center text-sm font-semibold text-[#3F4045]"
                    >
                      {t('Free Download')}
                    </a>
                  ) : (
                    <Popover>
                      <Popover.Button className="block flex-grow rounded-[3px] bg-gray-800 px-7 py-2 text-center text-sm font-semibold text-white">
                        {t('Consulting Sales')}
                      </Popover.Button>
                      <Popover.Panel className="absolute z-10 -ml-6 mt-1">
                        <ContactCard click />
                      </Popover.Panel>
                    </Popover>
                  )}
                </div>
              </div>

              {sections.map((section) => (
                <table key={section.name} className="w-full">
                  <caption className="py-1 px-4 text-left text-sm font-medium text-gray-900">
                    {section.name}
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {section.features.map((feature) => (
                      <tr key={feature.name} className="">
                        <th
                          className="py-1 px-4 text-left text-sm font-normal text-gray-500 "
                          scope="row"
                        >
                          {feature.name}
                        </th>
                        <td className="py-0 pr-4">
                          {feature.tiers[tier.name] === true && (
                            <CheckCircleIcon
                              className="ml-auto h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                          )}

                          {feature.tiers[tier.name] === false && (
                            <XCircleIcon
                              className="ml-auto h-6 w-6 text-[#D52424]"
                              aria-hidden="true"
                            />
                          )}

                          {feature.tiers[tier.name] === null && (
                            <div className={cls('h-full min-h-full w-full flex-1')}>&nbsp;</div>
                          )}

                          {typeof feature.tiers[tier.name] === 'string' && (
                            <span className="ml-auto block select-text text-right text-sm text-gray-700">
                              {feature.tiers[tier.name]}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="hidden w-full lg:block">
          <table className="h-px w-full">
            <caption className="sr-only">Pricing plan comparison</caption>
            <tr>
              <th scope="col"></th>
              {tiers.map((tier) => (
                <th
                  key={tier.name}
                  className={cls(
                    'w-1/5 bg-white py-0 pl-3  text-center text-lg font-medium leading-6 text-gray-900'
                  )}
                  scope="col"
                ></th>
              ))}
            </tr>
            <tbody className="bg-white py-0">
              <tr>
                <th scope="row"></th>
                {tiers.map((tier, index) => (
                  <td key={tier.name} className={cls('h-full bg-white pl-3 align-top')}>
                    <div
                      className={cls(
                        index !== 0 && 'bg-[#F7F8FC]',
                        'relative flex h-full flex-col items-center justify-center'
                      )}
                    >
                      <div className="h-full w-full pb-4 pt-12 text-center text-lg font-medium  text-gray-900">
                        {t(tier.name)}
                      </div>

                      <p>
                        {tier.price == 0 ? (
                          <span className="text-base font-medium text-[#3ABAAE]">{t('Free')}</span>
                        ) : (
                          <>
                            <span className="pr-1 text-base font-medium text-gray-900">
                              {t(tier.price)}
                            </span>
                            <span>{t('start')}</span>
                          </>
                        )}
                      </p>
                      {tier.price == 0 ? (
                        <a
                          href="pages/xswitch-install/"
                          className="mt-6 block flex-grow rounded-[3px] border border-[#3F4045] bg-transparent px-7 py-2 text-center text-sm font-semibold text-[#3F4045]"
                        >
                          {t('Free Download')}
                        </a>
                      ) : (
                        <Popover>
                          <Popover.Button className="mt-6 block flex-grow rounded-[3px] bg-gray-800 px-7 py-2 text-center text-sm font-semibold text-white">
                            {t('Consulting Sales')}
                          </Popover.Button>
                          <Popover.Panel className="absolute left-1 z-10 mt-1">
                            <ContactCard click />
                          </Popover.Panel>
                        </Popover>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
              {sections.map((section, index) => (
                <Fragment key={section.name}>
                  {section.features.map((feature) => (
                    <tr key={feature.name} className="bg-white">
                      <th
                        className="min-w-[350px] py-0 pl-3 text-left text-sm font-medium text-[#6D7182]"
                        scope="row"
                      >
                        {feature.name}
                      </th>
                      {tiers.map((tier, index) => (
                        <td
                          key={tier.name}
                          className={cls(index !== 0 && 'bg-white', 'select-none py-0 pl-3')}
                        >
                          <div
                            className={cls(
                              index !== 0 && 'bg-[#F7F8FC]',
                              'flex justify-center py-2'
                            )}
                          >
                            {feature.tiers[tier.name] === true && (
                              <CheckCircleIcon
                                className="h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                            )}

                            {feature.tiers[tier.name] === false && (
                              <XCircleIcon className="h-6 w-6 text-[#D52424]" aria-hidden="true" />
                            )}

                            {feature.tiers[tier.name] === null && (
                              <div className={cls('h-full min-h-full w-full flex-1')}>&nbsp;</div>
                            )}

                            {typeof feature.tiers[tier.name] === 'string' && (
                              <span className="block select-text text-sm text-gray-700">
                                {feature.tiers[tier.name]}
                              </span>
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
