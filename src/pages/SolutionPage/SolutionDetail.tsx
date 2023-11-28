import { useParams } from 'react-router-dom'
import Card from '../../components/content/Card'
import useContentbysolutionId from '../../hooks/useContentbysolutionId'

function SolutionDetail() {
  const { id } = useParams()
  const { content } = useContentbysolutionId(id)
  if (content) return <Card key={content?.solutionId} content={content} />
}
export default SolutionDetail
