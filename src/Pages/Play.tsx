
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='flex flex-col gap-2.5'> 
        404 not found
        <Link to="/">Go to Home Page</Link> 
    </div>
  )
}

export default Notfound