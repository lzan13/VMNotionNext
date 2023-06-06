import React from 'react'
import BLOG from '@/blog.config'
// import DarkModeButton from '@/components/DarkModeButton'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function() {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()

  return (
    <footer
      className='text-xs p-2 pt-1 text-light-400 dark:text-gray-400 relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6  text-gray-600'
    >
      {/* <DarkModeButton/> */}
      <p>
        <i className='fas fa-copyright' /> {`${copyrightDate}`}
        <i className='mx-1 animate-pulse fas fa-heart'/>
        <a href={BLOG.LINK} className='hover:underline font-bold dark:text-gray-300 '>{BLOG.AUTHOR}</a>
      </p>

      {BLOG.BEI_AN && 
        <p>
          <i className='fas fa-shield-alt' /> 
          <a href='https://beian.miit.gov.cn/' className='mr-2'>{BLOG.BEI_AN}</a>
        </p>
      }

      <p className='hidden busuanzi_container_site_pv'>
        <i className='fas fa-eye'/><span className='px-1 busuanzi_value_site_pv'></span>
      </p>
      <p className='pl-1 hidden busuanzi_container_site_uv'>
        <i className='fas fa-users'/><span className='px-1 busuanzi_value_site_uv'></span>
      </p>
      <p>
        <span>{title}</span> | <span>{BLOG.BIO}</span>
      </p>
      <p>
        <span>Powered by </span>
        <a href='https://github.com/tangly1024/NotionNext' className='dark:text-gray-300 hover:underline'>NotionNext {BLOG.VERSION}</a>.
      </p>
    </footer>
  )
}

export default Footer
