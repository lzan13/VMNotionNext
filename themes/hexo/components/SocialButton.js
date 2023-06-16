import BLOG from '@/blog.config'
import React from 'react'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  return <div className='w-full justify-center flex-wrap flex'>
    <div className='space-x-3 text-xl text-gray-600 dark:text-gray-300 '>
      {BLOG.CONTACT_HOME && <a target='_blank' rel='noreferrer' title={'home'} href={BLOG.CONTACT_HOME} >
        <i className='fa-solid fa-globe transform hover:scale-110 duration-150 dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_WEIBO && <a target='_blank' rel='noreferrer' title={'weibo'} href={BLOG.CONTACT_WEIBO} >
        <i className='fa-brands fa-weibo transform hover:scale-110 duration-150 dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_EMAIL && <a target='_blank' rel='noreferrer' title={'email'} href={`mailto:${BLOG.CONTACT_EMAIL}`} >
        <i className='fa-solid fa-square-envelope transform hover:scale-110 duration-150 dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_GITHUB && <a target='_blank' rel='noreferrer' title={'github'} href={BLOG.CONTACT_GITHUB} >
        <i className='fa-brands fa-github transform hover:scale-110 duration-150 dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_TWITTER && <a target='_blank' rel='noreferrer' title={'twitter'} href={BLOG.CONTACT_TWITTER} >
        <i className='fa-brands fa-square-twitter transform hover:scale-110 duration-150 dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_TELEGRAM && <a target='_blank' rel='noreferrer' title={'telegram'}  href={BLOG.CONTACT_TELEGRAM} >
        <i className='fa-brands fa-telegram transform hover:scale-110 duration-150 dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_LINKEDIN && <a target='_blank' rel='noreferrer' title={'linkIn'} href={BLOG.CONTACT_LINKEDIN} >
        <i className='fa-brands fa-linkedin transform hover:scale-110 duration-150 dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_INSTAGRAM && <a target='_blank' rel='noreferrer' title={'instagram'} href={BLOG.CONTACT_INSTAGRAM} >
        <i className='fa-brands fa-square-instagram transform hover:scale-110 duration-150 dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.ENABLE_RSS && <a target='_blank' rel='noreferrer' title={'RSS'} href={'/feed'} >
        <i className='fa-solid fa-square-rss transform hover:scale-110 duration-150 dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
    </div>
  </div>
}
export default SocialButton
