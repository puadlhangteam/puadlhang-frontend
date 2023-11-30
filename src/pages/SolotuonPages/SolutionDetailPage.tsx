import SolutionDetail from '../../components/Solutions/Solution/SolutionDetail'
// import CommentsContainer from '../components/comments/CommentContainer'
import { useParams } from 'react-router-dom'
import useContentbysolutionId from '../../hooks/useContentbysolutionId'

function SolutionDetailPage() {
  const { solutionId } = useParams()
  const { content } = useContentbysolutionId(solutionId)
  return (
    content && (
      <div className="appBg flex flex-col container mx-auto px-5 py-10">
        {<SolutionDetail key={content.solutionId} content={content} />}
        {/* <CommentsContainer className="mt-28" logginedUserId="a" /> */}
      </div>
    )
  )
}

export default SolutionDetailPage
