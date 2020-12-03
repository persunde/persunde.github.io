import fs from 'fs'
import path from 'path'
import { readdirSync, statSync } from 'fs'

import { join } from 'path'
import matter from 'gray-matter'
import { fail } from 'assert'
import readingTime from 'reading-time'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (field === 'readingTime') {
      items[field] = readingTime(content).text;
    }

    if (data[field]) {
      if (field === "featuredImage") {
        items[field] = findImgLocation(data[field])
      } else {
        items[field] = data[field]
      }
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  return slugs.map(slug => getPostBySlug(slug, fields))
}

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

function findImgLocation(img_name) {
  const rootFolder = "public/assets/blog/";
  const folders = getDirectories(rootFolder);
  
  for (let folder of folders) {
    const fromPathTop = path.join( rootFolder, folder );
    const files = fs.readdirSync( fromPathTop );
    
    for( const file of files ) {
      const fromPathSecond = path.join( fromPathTop, file );
      const stat = fs.statSync( fromPathSecond );
      if( stat.isFile() ) {
          if (file === img_name) {
            return fromPathSecond.replace("public", "");
          }
      }
    }
  }
  fail("Missing image for blog entry", img_name)
}