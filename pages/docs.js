import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { useState, useEffect } from 'react'
import Github from '@/components/social-icons/github.svg'
import XswitchInstall from '@/svg/xswitch-install.svg'
import Bg from '@/svg/document-bg.svg'

import { useTranslation } from 'next-export-i18n'

export async function getStaticProps() {
  const tags = await getAllTags('pages')
  let posts = await getAllFilesFrontMatter('pages')
  const staticTags = ['基本文档', 'api文档']

  delete tags['条款'] // hide this tag

  const staticPosts = [
    {
      title: 'XSwitch简明用户手册',
      href: 'https://demo.xswitch.cn/xswitch.html',
      tags: ['基本文档'],
    },
    {
      title: 'XSwitch用户手册',
      href: '/docs/xswitch-user.html',
      tags: ['基本文档'],
    },
    {
      title: 'xswitch-free Docker镜象',
      href: 'https://github.com/rts-cn/xswitch-free',
      tags: ['基本文档'],
    },
    {
      title: 'XSwitch常见问题解答（FAQ）',
      href: 'https://git.xswitch.cn/xswitch/docs#常见问题解答',
      tags: ['基本文档'],
    },
    {
      title: 'XSwitch集成指南',
      href: '/docs/xswitch-integration-guide.html',
      tags: ['API文档'],
    },
    {
      title: 'XSwitch认证鉴权接口',
      href: '/docs/xswitch-auth.html',
      tags: ['API文档'],
    },
    {
      title: 'XSwitch REST API文档',
      href: '',
      tags: ['API文档'],
    },
    {
      title: 'XSwitch XCC API文档',
      href: '/docs/xswitch-xcc.html',
      tags: ['API文档'],
    },
  ]

  posts = posts.concat(staticPosts)

  return { props: { staticTags, tags, posts } }
}

export default function Docs({ staticTags, tags, posts }) {
  const [filteredPosts, setFilteredPosts] = useState()
  const sortedTags = staticTags.concat(
    (tags && Object.keys(tags).sort((a, b) => tags[b] - tags[a])) || []
  )
  const { t } = useTranslation()

  useEffect(() => {
    handleFilteredPosts(staticTags[0])
  }, [])

  const handleFilteredPosts = (tag) => {
    const filteredPosts = posts.filter(
      (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(tag)
    )
    setFilteredPosts(filteredPosts)
  }

  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />

      <div className="min-h-[200px] bg-white pb-[185px]">
        <div className="relative flex flex-col items-center justify-center space-y-1 bg-[#313F4F] pt-32 pb-24 text-white ">
          <div className=" z-20 text-[32px]">{t('Document title')}</div>
          <div className="z-20 text-sm">{t('Document description')}</div>
        </div>
        <div className="mt-[69px] flex flex-wrap px-4 laptop:flex-nowrap laptop:px-[100px]  desktop:px-[360px]">
          <div className="flex min-w-[180px] flex-col text-[#34353A]">
            <div className="mb-[34px] text-2xl">{t('Category')}</div>
            <div className="flex cursor-pointer flex-col space-y-6 text-sm">
              {sortedTags &&
                sortedTags.map((tag, index) => (
                  <div key={index} onClick={() => handleFilteredPosts(tag)}>
                    {tag.toUpperCase()}
                  </div>
                ))}
            </div>

            <div className="mt-12 flex flex-col space-y-[19px]">
              <Link
                href="/pages/xswitch-install"
                className="flex h-[60px] w-[180px] items-center justify-center space-x-4 rounded border py-4"
              >
                <XswitchInstall className="h-[30px] w-[26px]" />
                <div className="text-sm">{t('Install')}</div>
              </Link>

              <Link
                href="https://git.xswitch.cn/xswitch/docs"
                className="flex h-[60px] w-[180px] items-center justify-center space-x-4 rounded border py-4"
              >
                <Github className="h-[27px] w-[27px]" />
                <div className="text-sm">更多文档</div>
              </Link>
            </div>
          </div>
          <div className="mt-10 flex w-full flex-col pr-1 text-sm laptop:mt-0 laptop:pl-32 desktop:px-32">
            {filteredPosts &&
              filteredPosts.map((post, index) => (
                <Link
                  href={post.href ? post.href : `/pages/${post.slug}`}
                  className="border-b py-4"
                  key={index}
                >
                  {post.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
