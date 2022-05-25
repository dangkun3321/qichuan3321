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
import cls from 'classnames'

export async function getStaticProps() {
  const tags = await getAllTags('pages')
  let posts = await getAllFilesFrontMatter('pages')
  const staticTags = ['基本文档', 'api文档']

  delete tags['条款'] // hide this tag
  delete tags['基本文档'] // hide this tag and add manually
  delete tags['api文档'] // hide this tag and add manually

  const staticPosts = [
    {
      title: 'XSwitch简明用户手册',
      href: 'https://demo.xswitch.cn/xswitch.html',
      tags: ['基本文档'],
      summary: '极简用户手册，用于快速了解XSwitch功能及特性。',
    },
    {
      title: 'XSwitch用户手册',
      href: 'https://xswitch.cn/docs/xswitch-user.html',
      tags: ['基本文档'],
      summary: '详细的用户手册和功能说明。',
    },
    {
      title: 'xswitch-free Docker镜象',
      href: 'https://github.com/rts-cn/xswitch-free',
      tags: ['基本文档'],
      summary: '纯xswitch，无Web UI，适用于学习FreeSWITCH。',
    },
    {
      title: 'XSwitch常见问题解答（FAQ）',
      href: 'https://git.xswitch.cn/xswitch/docs#常见问题解答',
      tags: ['基本文档'],
      summary: '如果您有什么问题，欢迎告诉我们。',
    },
    {
      title: 'XSwitch集成指南',
      href: 'https://xswitch.cn/docs/xswitch-integration-guide.html',
      tags: ['API文档'],
      summary: '讨论各种集成方式、架构、选用合适的API等。',
    },
    {
      title: 'XSwitch认证鉴权接口',
      href: 'https://xswitch.cn/docs/xswitch-auth.html',
      tags: ['API文档'],
      summary: '讨论XUI支持的认证和鉴权方式。',
    },
    // {
    //   title: 'XSwitch REST API文档',
    //   href: '',
    //   tags: ['API文档'],
    // },
    {
      title: 'XSwitch XCC API文档',
      href: 'https://xswitch.cn/docs/xswitch-xcc.html',
      tags: ['API文档'],
      summary: '基于NATS的API，推荐使用。',
    },
  ]

  posts = posts.concat(staticPosts)

  return { props: { staticTags, tags, posts } }
}

export default function Docs({ staticTags, tags, posts }) {
  const { t } = useTranslation()
  const [filteredPosts, setFilteredPosts] = useState()
  const [tabIndex, setTabIndex] = useState(0)
  const sortedTags = staticTags.concat(
    (tags && Object.keys(tags).sort((a, b) => tags[b] - tags[a])) || []
  )

  const translateTag = (tag) => {
    if (tag === 'xswitch') return 'XSwitch'
    if (tag === 'how-to文档') return 'How-To文档'
    if (tag === 'api文档') return 'API文档'
    return tag
  }

  useEffect(() => {
    const hash = decodeURI(window.location.hash)
    if (hash.length > 1) {
      const tag = hash.split('#')[1]
      const tagIndex = sortedTags.indexOf(tag)
      if (tagIndex > -1) {
        handleFilteredPosts(tag)
        setTabIndex(tagIndex)
      }
    } else {
      handleFilteredPosts(sortedTags[0], 0)
    }
  }, [])

  const handleFilteredPosts = (tag, index) => {
    if (index === 0) {
      window.location.hash = ''
      history.replaceState('', '', location.pathname)
    } else {
      window.location.hash = tag
    }
    setTabIndex(index)
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
                  <div
                    className={cls(
                      tabIndex === index
                        ? 'text-primary-500 hover:text-primary-700'
                        : 'text-gray-500 hover:text-gray-700'
                    )}
                    key={index}
                    onClick={() => handleFilteredPosts(tag, index)}
                  >
                    {translateTag(tag)}
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
                <div className="text-sm">{t('More docs')}</div>
              </Link>
            </div>
          </div>
          <div className="mt-10 flex w-full flex-col overflow-hidden pr-1 text-sm laptop:mt-0 laptop:pl-32 desktop:px-32">
            {filteredPosts &&
              filteredPosts.map((post, index) => (
                <Link
                  href={post.href ? post.href : `/pages/${post.slug}`}
                  className="border-b py-4"
                  key={index}
                >
                  <div className="flex items-center overflow-hidden truncate">
                    <div className="text-base font-medium">{post.title}</div>
                    <div className="overflow-hidden text-ellipsis pl-4  text-sm text-gray-500 ">
                      {post.summary}
                    </div>
                  </div>
                </Link>
              ))}
            <div className="flex items-center overflow-hidden truncate py-4">
              <div className="text-base font-medium">版权声明</div>
              <div className="overflow-hidden text-ellipsis pl-4  text-sm text-gray-500 ">
                本站所有文档版权所有，仅供在本站在线阅读，任何单位或个人没有本站书面同意不得复制和分发本站文档。
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
