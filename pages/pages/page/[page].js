import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import ListLayout from '@/layouts/ListLayout'
import { useTranslation } from 'next-export-i18n'
import { POSTS_PER_PAGE } from '..'

export async function getStaticPaths() {
  const totalPosts = await getAllFilesFrontMatter('pages')
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const {
    params: { page },
  } = context
  const posts = await getAllFilesFrontMatter('pages')
  const pageNumber = parseInt(page)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      posts,
      initialDisplayPosts,
      pagination,
    },
  }
}

export default function PostPage({ posts, initialDisplayPosts, pagination }) {
  const { t } = useTranslation()

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <ListLayout
          posts={posts}
          initialDisplayPosts={initialDisplayPosts}
          pagination={pagination}
          title={t('All Pages')}
        />
      </div>
    </>
  )
}
