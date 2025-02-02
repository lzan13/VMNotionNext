import BLOG from '@/blog.config'
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CONFIG from '../config'

export default function ArticleCopyright () {
  if (!CONFIG.ARTICLE_COPYRIGHT) {
    return <></>
  }
  const router = useRouter()
  const [path, setPath] = useState(BLOG.LINK + router.asPath)
  useEffect(() => {
    setPath(window.location.href)
  })

  const { locale } = useGlobal()
  return (
    <section className="dark:text-gray-200 mt-6 mx-4 ">
      <div className="overflow-x-auto whitespace-nowrap text-xs dark:bg-gray-900 bg-gray-100 p-4 rounded-lg leading-6">
        <p>
          <strong className='mr-2'>{locale.COMMON.AUTHOR}:</strong>
          <Link href={'/about'} className="hover:underline">
            {BLOG.AUTHOR}
          </Link>
        </p>
        <p>
          <strong className='mr-2'>{locale.COMMON.URL}:</strong>
          <a className="whitespace-normal break-words hover:underline" href={path}>
            {path}
          </a>
        </p>
        <p>
          <strong className='mr-2'>{locale.COMMON.COPYRIGHT}:</strong>
          {locale.COMMON.COPYRIGHT_NOTICE}
        </p>
      </div>
    </section>
  );
}
