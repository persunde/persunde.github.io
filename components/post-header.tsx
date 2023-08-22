import Avatar from './avatar'
import DateFormater from './date-formater'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import { faCalendar, faClock, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PostHeader({ title, featuredImage, date, author, readingTime, tags }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} src={featuredImage} slug={undefined} />
      </div>
      <div className="max-w-2xl block mb-6">
        <div className="flex items-center space-x-4 mb-2 flex-wrap">
          <Avatar name={author} />
          <div className="text-lg col-span-2 space-x-2 flex">
            <FontAwesomeIcon icon={faCalendar} className='w-6' />
            <DateFormater dateString={date} />
          </div>
          <div className="text-lg font-bold col-span-3 flex space-x-2">
            <div>
              <FontAwesomeIcon icon={faClock} className='w-6' />
            </div> 
            <div>
              {readingTime}
            </div>
          </div>
          <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faTag} className='w-6' /> 
          <div>
            {tags}
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
