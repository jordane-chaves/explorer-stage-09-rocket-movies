import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { New } from '../pages/New'
import { Edit } from '../pages/Edit'
import { Preview } from '../pages/Preview'
import { Profile } from '../pages/Profile'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/preview/:id" element={<Preview />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  )
}
