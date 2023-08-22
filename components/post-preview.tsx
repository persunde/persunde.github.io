import Avatar from './avatar'
import DateFormater from './date-formater'
import CoverImage from './cover-image'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faTag } from '@fortawesome/free-solid-svg-icons'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  readingTime,
  tags,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/blog/${slug}`} className="hover:underline" href="/blog/[slug]">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormater dateString={date} />
      </div>
      <div className="text-lg font-bold col-span-3 flex space-x-2">
        <div>
          <FontAwesomeIcon icon={faClock} className='w-6'/>
        </div> 
        <div>
          {readingTime}
        </div>
      </div>
      <div className="flex items-center space-x-2 w-full">
          <FontAwesomeIcon icon={faTag} className='w-6'/> 
          <div>
            {tags}
          </div>
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author} />
    </div>
  )
}
