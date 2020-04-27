import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
import { SITE_NAME } from '../../lib/constants'

interface posts {
  post: {
    title: string,
    ogImage: { url: string,},
    coverImage: string,
    date: string,
    author: string,
    content: string
  }
}

export default function Post({ post } : posts) {
  return (
    <Layout>
      <Header />
      <Container>
          <article className="mb-32">
            <Head>
              <title>
                {post.title} | {SITE_NAME}
              </title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </article>
      </Container>
    </Layout>
  )
}


interface slugParams {
  params: {
    slug: any
  }
}

export async function getStaticProps({ params }: slugParams) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  // const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: posts['slug'],
        },
      }
    }),
    fallback: false,
  }
}
