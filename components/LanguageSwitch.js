import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { SwitchHorizontalIcon, GlobeAltIcon } from '@heroicons/react/solid'

export default function LanguageSwitch() {
  return (
    <>
      <div className="z-20 hidden text-right md:block">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button
              aria-label="language"
              className="inline-flex w-full justify-center rounded-md py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <GlobeAltIcon className="w-6" />
              {/* <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            /> */}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right appearance-none divide-y divide-gray-100 rounded-md bg-white py-3 shadow-lg outline-none ring-0 focus:outline-none focus:ring-0">
              <div className="appearance-none px-1 py-1 outline-none ring-0 focus:outline-none focus:ring-0">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="?lang=zh"
                      className={`${
                        active ? 'bg-[#3F4045] text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 pl-10 text-sm`}
                    >
                      中文
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="?lang=en"
                      className={`${
                        active ? 'bg-[#3F4045] text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 pl-10 text-sm`}
                    >
                      English
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <p className="mt-6 flex w-full items-center justify-center text-sm font-medium text-gray-500 md:hidden">
        中 <SwitchHorizontalIcon className="w-4" /> En
      </p>
    </>
  )
}
