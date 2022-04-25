import { useNavigate } from 'react-router-dom'

function MainNavigate() {
  const navigate = useNavigate()

  return (
    <div className="MainNavigate">
      MainNavigate
      <div>
        <button onClick={() => navigate('/projectlist')}>Projektlist</button>
        <button onClick={() => navigate('/news')}>News</button>
        <button onClick={() => navigate('/favourites')}>Favourites</button>
        <button onClick={() => navigate('/profile')}>Profile</button>
      </div>
    </div>
  )
}

export default MainNavigate