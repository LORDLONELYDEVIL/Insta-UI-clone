import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/AuthPage/AuthPage"
import ProfilePage from "./pages/ProfilePage.jsx/ProfilePage"
import PageLayout from "./Layouts/PageLayout/PageLayout"
import HomePage from "./pages/HomePage/HomePage"

function App() {
  return (
    <PageLayout>
      <Routes >
        <Route path="/" element={<HomePage/>}/>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/:username" element={<ProfilePage />}/>
      </Routes>
    </PageLayout>
  )
}

export default App
