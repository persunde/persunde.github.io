import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { SITE_NAME } from '../lib/constants'
import Header from '../components/header'

export default function Blog({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <Layout>
      <Head>
        <title>Blog {SITE_NAME}</title>
      </Head>
      <Header></Header>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            featuredImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
            readingTime={heroPost.readingTime}
            tags={heroPost.tags}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'featuredImage',
    'excerpt',
    'readingTime',
    'tags',
  ])

  return {
    props: { allPosts },
  }
}
