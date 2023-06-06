import { useGlobal } from '@/lib/global'
import dynamic from 'next/dynamic'
import Card from './Card'

const NotionPage = dynamic(() => import('@/components/NotionPage'))

const Announcement = ({ post, className }) => {
  const { locale } = useGlobal()
  if (post?.blockMap) {
    return <Card className={className}>
        <section id='announcement-wrapper' >
            <div><i className='mr-2 fas fa-bullhorn' />{locale.COMMON.ANNOUNCEMENT}</div>
            {post && (<div id="announcement-content"><NotionPage post={post} className='text-center' /></div>)}
        </section>
    </Card>
  } else {
    return <></>
  }
}
export default Announcement
