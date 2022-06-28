import { useTranslation } from 'next-export-i18n'
import { Disclosure } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon, CheckIcon, MinusIcon } from '@heroicons/react/solid'

export default function Session() {
  const { t } = useTranslation()

  return (
    <>
      <div id="versions" className="relative pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-full">
          <div className="text-center xl:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              {t('Versions and Purchases')}
            </h2>
            <p className="mx-auto mt-3 max-w-4xl text-sm text-gray-600 sm:mt-4 md:text-base xl:mx-0 xl:text-lg">
              {t('lang_14')}
            </p>
          </div>
          <Versions />
        </div>
      </div>
    </>
  )
}

export function Versions() {
  const { t } = useTranslation()
  return (
    <>
      <div className="mt-12 grid w-full gap-10 overflow-hidden md:mt-16 md:grid-cols-2 md:gap-0 md:rounded-md md:border md:bg-white md:shadow-sm xl:grid-cols-4">
        {/* 社区版 */}
        <span id="community" tabIndex="-1" className="lg:absolute lg:-top-16 lg:left-0"></span>
        <div className="relative flex flex-col overflow-hidden rounded border bg-white px-8 pt-10 pb-8 shadow-sm md:rounded-none md:border-y-0 md:border-l-0 md:border-r md:bg-transparent md:shadow-none">
          <div className="absolute top-0 left-0 right-0 h-3 bg-[#F1F2F2]" />
          <div className="text-xl font-semibold text-gray-900">{t('Community Edition')}</div>
          <div className="mt-2 min-h-[40px] text-sm leading-4 text-gray-600">{t('lang_77')}</div>
          <div className="text-base font-medium text-gray-900">{t('Free')}</div>
          <ul className="mt-10 flex-1 space-y-2 pb-12 text-gray-600">
            <li className="flex items-center space-x-4">
              <div className="h-[6px] w-[6px] rounded-full bg-black" />
              <div>{t('lang_45')}</div>
            </li>
            <li className="flex items-center space-x-4">
              <div className="h-[6px] w-[6px] rounded-full bg-black" />
              <div>{t('lang_49')}</div>
            </li>

            <li className="flex items-center space-x-4">
              <div className="h-[6px] w-[6px] rounded-full bg-black" />
              <div className="font-medium text-gray-900">{t('lang_51')}</div>
            </li>

            <li className="flex items-center space-x-4">&nbsp;</li>
          </ul>
          <button className=" w-32 rounded border border-gray-900 py-2 text-sm hover:shadow-sm">
            {t('Get started')}
          </button>
        </div>

        {/* 商业版 */}
        <span id="commercial" tabIndex="-1" className="lg:absolute lg:-top-16 lg:left-0"></span>
        <div className="relative flex flex-col overflow-hidden rounded border bg-white px-8 pt-10 pb-8 shadow-sm md:rounded-none md:border-y-0 md:border-l-0 md:border-r md:bg-transparent md:shadow-none">
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#87FFB9] to-[#57F8FF]" />
          <div className="text-xl font-semibold text-gray-900">{t('Commercial Edition')}</div>
          <div className="mt-2 min-h-[40px] text-sm leading-4 text-gray-600">{t('lang_78')}</div>
          <div className="text-base font-medium text-gray-900">
            <span className="text-base font-medium">1万</span>
            <span className="ml-1 text-xs">起</span>
          </div>
          <ul className="mt-10 flex-1 space-y-2 pb-12 text-gray-600">
            <li className="flex items-center space-x-4">
              <div className="h-[6px] w-[6px] rounded-full bg-black" />
              <div>{t('lang_79')}</div>
            </li>
            <li className="flex items-center space-x-4">
              <div className="h-[6px] w-[6px] rounded-full bg-black" />
              <div>{t('lang_80')}</div>
            </li>

            <li className="flex items-center space-x-4">
              <div className="h-[6px] w-[6px] rounded-full bg-black" />
              <div>{t('lang_81')}</div>
            </li>

            <li className="flex items-center space-x-4">
              <div className="h-[6px] w-[6px] rounded-full bg-black" />
              <div className="font-medium text-gray-900">{t('lang_82')}</div>
            </li>
          </ul>
          <button className="w-32 rounded bg-[#3F4045] py-2 text-sm text-white hover:shadow-sm">
            {t('Consulting Sales')}
          </button>
        </div>

        {/* 专业版 */}
        <span id="professional" tabIndex="-1" className="lg:absolute lg:-top-16 lg:left-0"></span>
        <div className="relative flex flex-col overflow-hidden rounded border bg-white px-8 pt-10 pb-8 shadow-sm md:rounded-none md:border-y-0 md:border-l-0 md:border-r md:bg-transparent md:shadow-none">
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#FF9056] to-[#FFF87E]" />

          <div className="text-xl font-semibold text-gray-900">{t('Professional Edition')}</div>
          <div className="mt-2 min-h-[40px] text-sm leading-4 text-gray-600">{t('lang_83')}</div>
          <div className="text-base font-medium text-gray-900">
            <span className="text-base font-medium">3万</span>
            <span className="ml-1 text-xs">起</span>
          </div>
          <ul className="mt-10 flex-1 space-y-2 pb-12 text-gray-600">
            <li className="flex items-center space-x-4">
              <div className="h-[6px] w-[6px] rounded-full bg-black" />
              <div>{t('lang_84')}</div>
            </li>
            <li className="flex items-center space-x-4">
              <div className="h-[6px] w-[6px] rounded-full bg-black" />
              <div>{t('lang_80')}</div>
            </li>

            <li className="flex items-center space-x-4">
              <div className="h-[6px] w-[6px] rounded-full bg-black" />
              <div>{t('lang_85')}</div>
            </li>

            <li className="flex items-center space-x-4">
              <div className="h-[6px] w-[6px] rounded-full bg-black" />
              <div className="font-medium text-gray-900">{t('lang_86')}</div>
            </li>
          </ul>
          <button className="w-32 rounded bg-[#3F4045] py-2 text-sm text-white hover:shadow-sm">
            {t('Consulting Sales')}
          </button>
        </div>

        {/* 企业版 */}
        <span id="enterprise" tabIndex="-1" className="lg:absolute lg:-top-16 lg:left-0"></span>
        <div className="relative flex flex-col overflow-hidden rounded border bg-white px-8 pt-10 pb-8 shadow-sm md:rounded-none md:border-y-0 md:border-l-0 md:border-r md:bg-transparent md:shadow-none">
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#9947FF] to-[#FF7EC2]" />

          <div className="text-xl font-semibold text-gray-900">{t('Enterprise Edition')}</div>
          <div className="mt-2 min-h-[40px] text-sm leading-4 text-gray-600">{t('lang_87')}</div>
          <div className="text-base font-medium text-gray-900">
            <span className="text-base font-medium">5万</span>
            <span className="ml-1 text-xs">起</span>
          </div>
          <ul className="mt-10 flex-1 space-y-2 pb-12 text-gray-600">
            <li className="flex items-center space-x-4">
              <div className="h-[6px] w-[6px] rounded-full bg-black" />
              <div>{t('lang_88')}</div>
            </li>
            <li className="flex items-center space-x-4">
              <div className="h-[6px] w-[6px] rounded-full bg-black" />
              <div>{t('lang_89')}</div>
            </li>

            <li className="flex items-center space-x-4">
              <div className="h-[6px] w-[6px] rounded-full bg-black" />
              <div>{t('lang_85')}</div>
            </li>

            <li className="flex items-center space-x-4">
              <div className="h-[6px] w-[6px] rounded-full bg-black" />
              <div className="font-medium text-gray-900">{t('lang_90')}</div>
            </li>
          </ul>
          <button className="w-32 rounded bg-[#3F4045] py-2 text-sm text-white hover:shadow-sm">
            {t('Consulting Sales')}
          </button>
        </div>
      </div>

      <DisclosureTable />
    </>
  )
}

function DisclosureTable() {
  const { t } = useTranslation()

  return (
    <div className="mt-10 flex w-full flex-col justify-center">
      <Disclosure>
        {({ open }) => (
          <>
            <div className="flex w-full justify-center">
              <Disclosure.Button className="flex items-center space-x-2 rounded-full px-6 py-2 text-sm  font-medium text-slate-700  ring-1 ring-slate-200 hover:text-slate-900 hover:ring-slate-300">
                <span>{t('lang_91')}</span>
                <ChevronDownIcon className={`${open ? 'rotate-180 transform' : ''} h-4 w-4`} />
              </Disclosure.Button>
            </div>

            <Disclosure.Panel className="text-sm text-gray-600">
              <Table />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Table() {
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
      features: [
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
          name: t('lang_92'),
          tiers: {
            Community: t('None'),
            Commercial: t('2 years'),
            Professional: t('3 years'),
            Enterprise: t('5 years'),
          },
        },
        {
          name: t('lang_45'),
          tiers: { Community: true, Commercial: true, Professional: true, Enterprise: true },
        },
        {
          name: t('lang_46'),
          tiers: { Community: true, Commercial: true, Professional: true, Enterprise: true },
        },
        {
          name: t('lang_47'),
          tiers: { Community: true, Commercial: true, Professional: true, Enterprise: true },
        },
        {
          name: t('lang_48'),
          tiers: { Community: true, Commercial: true, Professional: true, Enterprise: true },
        },
        {
          name: t('lang_49'),
          tiers: { Community: true, Commercial: true, Professional: true, Enterprise: true },
        },
        {
          name: t('lang_51'),
          tiers: { Community: true, Commercial: true, Professional: true, Enterprise: true },
        },
        {
          name: t('lang_41'),
          tiers: { Community: false, Commercial: true, Professional: true, Enterprise: true },
        },
        {
          name: t('lang_142'),
          tiers: { Community: false, Commercial: true, Professional: true, Enterprise: true },
        },
        {
          name: t('lang_141'),
          tiers: { Community: false, Commercial: true, Professional: true, Enterprise: true },
        },
        {
          name: t('lang_60'),
          tiers: { Community: false, Commercial: false, Professional: true, Enterprise: true },
        },
        {
          name: t('lang_66'),
          tiers: { Community: false, Commercial: false, Professional: true, Enterprise: true },
        },
        {
          name: t('lang_59'),
          tiers: { Community: false, Commercial: false, Professional: true, Enterprise: true },
        },
        {
          name: t('lang_64'),
          tiers: { Community: false, Commercial: false, Professional: false, Enterprise: true },
        },
        {
          name: t('lang_65'),
          tiers: { Community: false, Commercial: false, Professional: false, Enterprise: true },
        },
      ],
    },
  ]

  return (
    <div className="mt-8 bg-white">
      <div className="mx-auto max-w-full bg-white pt-6 sm:py-24 sm:px-6 lg:px-20">
        {/* xs to lg */}
        <div className="mx-auto max-w-2xl space-y-16 lg:hidden">
          {tiers.map((tier, tierIdx) => (
            <section key={tier.name}>
              <div className="mb-1">
                <h2 className="text-2xl font-medium leading-6 text-gray-900">{t(tier.name)}</h2>
              </div>

              {sections.map((section) => (
                <table key={section.name} className="w-full">
                  <caption className="border-gray-200 bg-white py-3 px-4 text-left text-sm font-medium text-gray-900">
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
                  <tbody className="divide-y divide-gray-200">
                    {section.features.map((feature) => (
                      <tr key={feature.name} className="border-t border-gray-200">
                        <th
                          className="py-5 px-4 text-left text-sm font-normal text-gray-600"
                          scope="row"
                        >
                          {feature.name}
                        </th>
                        <td className="py-5 pr-4">
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className="block text-right text-sm text-gray-700">
                              {feature.tiers[tier.name]}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon
                                  className="ml-auto h-5 w-5 text-green-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <MinusIcon
                                  className="ml-auto h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {feature.tiers[tier.name] === true ? 'Yes' : 'No'}
                              </span>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}

              <div
                className={classNames(
                  tierIdx < tiers.length - 1 ? 'border-b py-5' : 'pt-5',
                  'border-t border-gray-200 px-4'
                )}
              >
                <div className="block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900">
                  {tierIdx === 0 ? t('Get started') : t('Consulting Sales')}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="hidden lg:block">
          <table className="h-px w-full table-fixed">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th className="px-6 pb-4 text-left text-sm font-medium text-gray-900" scope="col">
                  <span className="sr-only">Feature by</span>
                  <span>{t('Versions')}</span>
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className="w-1/6 px-6 pb-4 text-left text-lg font-medium leading-6 text-gray-900"
                    scope="col"
                  >
                    {t(tier.name)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-t border-gray-200">
              <tr>
                <th
                  className="py-8 px-6 text-left align-top text-sm font-medium text-gray-900"
                  scope="row"
                >
                  {t('Pricing')}
                </th>
                {tiers.map((tier, tierIdx) => (
                  <td key={tier.name} className="h-full py-8 px-6 align-top">
                    <div className="relative table h-full">
                      <a
                        href={tier.href}
                        className="5 bottom-0 block w-24 flex-grow rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
                      >
                        {tierIdx === 0 ? t('Get started') : t('Consulting Sales')}
                      </a>
                    </div>
                  </td>
                ))}
              </tr>
              {sections.map((section) => (
                <Fragment key={section.name}>
                  {section.features.map((feature) => (
                    <tr key={feature.name}>
                      <th
                        className="py-5 px-6 text-left text-sm font-normal text-gray-600"
                        scope="row"
                      >
                        {feature.name}
                      </th>
                      {tiers.map((tier) => (
                        <td key={tier.name} className="py-5 px-6">
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className="block text-sm text-gray-700">
                              {feature.tiers[tier.name]}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                              ) : (
                                <MinusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">
                                {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in{' '}
                                {tier.name}
                              </span>
                            </>
                          )}
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
