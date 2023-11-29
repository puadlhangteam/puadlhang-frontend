import BannerSolutionDetailPage from '../../components/Solutions/Solution/BannerSolutionDetail'
import SolutionDetail from '../../components/Solutions/Solution/SolutionDetail'
// import CommentsContainer from '../components/comments/CommentContainer'
import { useParams } from 'react-router-dom'
import useContentbysolutionId from '../../hooks/useContentbysolutionId'

function SolutionDetailPage() {
  const { id } = useParams()
  const { content } = useContentbysolutionId(id)
  return (
    content && (
      <div className="flex flex-col container mx-auto px-5 py-10">
        <BannerSolutionDetailPage />
        {<SolutionDetail key={content.solutionId} content={content} />}
        {/* <CommentsContainer className="mt-28" logginedUserId="a" /> */}
      </div>
    )
  )
}

export default SolutionDetailPage
