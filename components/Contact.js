import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from '@/components/Image'

import { PhoneIcon, MailIcon, XIcon } from '@heroicons/react/solid'
import siteMetadata from '@/data/siteMetadata'
import cls from 'classnames'
import { useTranslation } from 'next-export-i18n'

const contact = [
  { name: siteMetadata.telephone, href: `tel:${siteMetadata.telephone}`, icon: PhoneIcon },
  { name: siteMetadata.email, href: '#', icon: MailIcon },
]

export default function Contact({ open, onClose }) {
  const cancelButtonRef = useRef(null)
  const { t } = useTranslation()

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={() => onClose()}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:p-6">
                <div className="relative">
                  <div className="relative flex flex-col-reverse justify-center py-5 px-16 md:flex-row md:px-7">
                    <XIcon
                      className=" absolute right-0 top-0 w-5 cursor-pointer text-gray-500"
                      onClick={() => onClose()}
                    />
                    <div className="flex flex-col pl-2 md:pl-0">
                      <div className="mt-2 text-xl font-medium">{t('Contact Us')}</div>
                      <ul role="list" className="mt-3">
                        {contact.map((item) => (
                          <li key={item.name} className="flex items-center space-x-1 space-y-2">
                            <div className="flex h-5 w-5 items-center justify-center">
                              <item.icon className="mt-2 h-4 w-4 fill-current text-downloadText" />
                            </div>
                            <a
                              href={item.href}
                              className={cls(
                                item.name === 'Issues'
                                  ? 'pointer-events-auto'
                                  : 'pointer-events-none select-all',
                                item.name === siteMetadata.telephone &&
                                  'pointer-events-auto md:pointer-events-none',
                                'md:select-all'
                              )}
                            >
                              {t(item.name)}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Image
                      width="128px"
                      height="128px"
                      src="/static/images/xswitch/wechat-qr.png"
                      alt="wechat"
                      className="h-40 w-40 rounded object-contain md:ml-10 tablet:h-32 tablet:w-32"
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
