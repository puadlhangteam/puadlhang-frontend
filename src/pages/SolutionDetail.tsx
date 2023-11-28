import BannerSolutionDetailPage from '../components/Solutions/Banner/BannerSolutionDetailPage'
import SolutionDetailPage from '../components/Solutions/SolutionDetailPage'
// import CommentsContainer from '../components/comments/CommentContainer'
import { useParams } from 'react-router-dom'
import useContentbysolutionId from '../hooks/useContentbysolutionId'

function SolutionDetail() {
  const { id } = useParams()
  const { content } = useContentbysolutionId(id)
  return (
    content && (
      <div className="flex flex-col container mx-auto px-5 py-10">
        <BannerSolutionDetailPage />
        {<SolutionDetailPage key={content.solutionId} content={content} />}
        {/* <CommentsContainer className="mt-28" logginedUserId="a" /> */}
      </div>
    )
  )
}

export default SolutionDetail
