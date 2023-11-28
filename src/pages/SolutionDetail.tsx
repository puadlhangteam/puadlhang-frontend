import SolutionDetailPage from '../components/Solutions/SolutionDetailPage'
import BannerSolutionDetailPage from '../components/Solutions/Banner/BannerSolutionDetailPage'
import CommentsContainer from '../components/comments/CommentContainer'

function SolutionDetail() {
  return (
    <div className="flex flex-col container mx-auto px-5 py-10">
      <BannerSolutionDetailPage />
      <SolutionDetailPage />
      <CommentsContainer className="mt-28" logginedUserId="a" />
    </div>
  )
}

export default SolutionDetail
