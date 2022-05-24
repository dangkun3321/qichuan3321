import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb'
import { useTranslation } from 'next-export-i18n'

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { t } = useTranslation()
  const { slug, fileName, date, title, tags } = frontMatter
  const routes = [
    {
      title: t('Docs'),
      href: '/docs/',
    },
    {
      title: title,
    },
  ]

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/pages/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <Breadcrumb routes={routes} />
      <div
        className="min-h-screen pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
        <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="mt-14 mb-3 text-center">
            <PageTitle>{title}</PageTitle>
          </div>
          <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
        </div>
      </div>
    </SectionContainer>
  )
}
