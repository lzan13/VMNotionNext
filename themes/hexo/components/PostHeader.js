import Link from 'next/link'
import TagItemMini from './TagItemMini'
import { useGlobal } from '@/lib/global'
import BLOG from '@/blog.config'
import NotionIcon from '@/components/NotionIcon'
import LazyImage from '@/components/LazyImage'
import { formatDateFmt } from '@/lib/formatDate'

export default function PostHeader({ post, siteInfo }) {
  const { locale } = useGlobal()

  if (!post) {
    return <></>
  }
  const headerImage = post?.pageCover ? post.pageCover : siteInfo?.pageCover

  return (
    <div id="header" className="w-full h-96 relative md:flex-shrink-0 z-10" >
      <LazyImage priority={true} src={headerImage} className='w-full h-full object-cover object-center absolute top-0'/>

          <header id='article-header-cover'
              // 修改样式
            // data-aos="fade-down"
            // data-aos-duration="300"
            // data-aos-once="true"
            // data-aos-anchor-placement="top-bottom"
            // className="bg-black bg-opacity-30 absolute top-0 w-full h-96 py-10 flex justify-center items-center ">
            className="bg-black bg-opacity-70 absolute top-0 w-full h-96 py-10 flex justify-center items-center ">

        <div className='mt-10'>
            <div className='mb-3 flex justify-center'>
              {post.category && <>
                <Link href={`/category/${post.category}`} passHref legacyBehavior>
                  <div className="cursor-pointer px-4 py-2 mb-2 border rounded-3xl dark:border-white text-sm font-medium  hover:bg-white hover:text-black duration-200 text-white">
                    {post.category}
                  </div>
                </Link>
              </>}
            </div>

          {/* 文章Title */}
          <div className="leading-snug font-bold xs:text-4xl sm:text-4xl md:text-5xl md:leading-snug text-4xl shadow-text-md flex justify-center text-center text-white">
            <NotionIcon icon={post.pageIcon} className='text-4xl mx-1' />{post.title}
          </div>

          <section className="flex-wrap shadow-text-md flex text-sm justify-center mt-4 text-white dark:text-gray-200 font-light leading-8">

            <div className='flex justify-center dark:text-gray-200 text-opacity-70'>
              {post?.type !== 'Page' && (
                <>
                  <Link
                    href={`/archive#${formatDateFmt(post?.publishDate, 'yyyy-MM')}`}
                    passHref
                    className="pl-1 mr-2 cursor-pointer hover:underline">

                    {locale.COMMON.POST_TIME}: {post?.publishDay}

                  </Link>
                </>
              )}
              <div className="pl-1 mr-2">
                {locale.COMMON.LAST_EDITED_TIME}: {post.lastEditedDay}
              </div>
            </div>

            {JSON.parse(BLOG.ANALYTICS_BUSUANZI_ENABLE) && <div className="busuanzi_container_page_pv font-light mr-2">
              <span className="mr-2 busuanzi_value_page_pv" />
              {locale.COMMON.VIEWS}
            </div>}
          </section>

            <div className='mt-4 mb-1'>
                {post.tagItems && (
                    <div className="flex justify-center flex-nowrap overflow-x-auto">
                        {post.tagItems.map(tag => (
                            <TagItemMini key={tag.name} tag={tag} />
                        ))}
                    </div>
                )}
            </div>
        </div>
      </header>
    </div>
  )
}
