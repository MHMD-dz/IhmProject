
import { Link } from 'react-router-dom'

const Pr = () => {
    const Profiles = [1,2,3,4,5]
  return (
    <div>
        {Profiles.map(
            (profile)=>(
                <div key={profile} className='border-2 m-2 p-2'>
                    <h2>Profile {profile}</h2>
                    <Link to={`/pr/${profile}`}>Profile {profile}</Link>
                </div>
            )
        )}
    </div>
  )
}

export default Pr