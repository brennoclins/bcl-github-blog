import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Post } from './pages/Post'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}