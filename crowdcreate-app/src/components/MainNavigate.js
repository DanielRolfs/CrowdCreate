import { useNavigate } from 'react-router-dom'

function MainNavigate() {
  const navigate = useNavigate()

  return (
    <div className="MainNavigate w-full pt-2 border-t-2">
      <div className="grid grid-cols-4 w-full h-50 flex items-center">
        <div><button onClick={() => navigate('/projectlist')}><img src="https://img.icons8.com/ios/50/000000/europe.png"/></button></div>
        <div><button onClick={() => navigate('/favourites')}><img src="https://img.icons8.com/ios/50/000000/like--v1.png"/></button></div>
        <div><button onClick={() => navigate('/news')}><img src="https://img.icons8.com/ios/50/000000/bell.png"/></button></div>
        <div><button onClick={() => navigate('/profile')}><img src="https://img.icons8.com/ios/50/000000/lol--v1.png"/></button></div>
      </div>
    </div>
  )
}

export default MainNavigate