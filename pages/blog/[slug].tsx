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
    // ogImage: { url: string,},
    featuredImage: string,
    date: string,
    author: string,
    content: string,
    readingTime: string,
    tags: string[],
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
              <meta property="og:image" content={post.featuredImage} />
            </Head>
            <PostHeader
              title={post.title}
              featuredImage={post.featuredImage}
              date={post.date}
              author={post.author}
              readingTime={post.readingTime}
              tags={post.tags}
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
    // 'ogImage',
    'featuredImage',
    'readingTime',
    'tags',
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
