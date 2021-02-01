import Avatar from '../components/avatar'
import DateFormater from '../components/date-formater'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faTag } from '@fortawesome/free-solid-svg-icons'

export default function HeroPost({
  title,
  featuredImage,
  date,
  excerpt,
  author,
  slug,
  readingTime,
  tags,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={featuredImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/blog/${slug}`} href="/blog/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormater dateString={date} />
          </div>
          <div className="text-lg font-bold col-span-3 flex space-x-2">
            <div>
              <FontAwesomeIcon icon={faClock} />
            </div> 
            <div>
              {readingTime}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faTag} /> 
            <div>
              {tags}
            </div>
        </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author} />
        </div>
      </div>
    </section>
  )
}
