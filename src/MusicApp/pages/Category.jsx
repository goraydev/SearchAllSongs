import { useLocation, useParams } from "react-router-dom"

export const Category = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div>Category</div>
  )
}
