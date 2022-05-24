import React, { useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import Link from '@/components/Link'

export default function Breadcrumb({ routes = [] }) {
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-2">
          {routes &&
            routes.map((route, index) => (
              <li key={index}>
                <div className="flex items-center">
                  {index !== 0 && (
                    <ChevronRightIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                  )}
                  {index !== routes.length - 1 ? (
                    <Link
                      href={route.href}
                      className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      {route.title}
                    </Link>
                  ) : (
                    <span className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                      {route.title}
                    </span>
                  )}
                </div>
              </li>
            ))}
        </ol>
      </nav>
    </>
  )
}
