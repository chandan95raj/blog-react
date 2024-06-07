import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import JoinPage from "./pages/JoinPage"
import NOT_FOUND from "./pages/NOT_FOUND"
import RootLayout from "./shared/layout/RootLayout"
import Dashboard from "./pages/Dashboard"
import { BrowserRouter ,Routes ,Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout> <HomePage /> </RootLayout>} />
        <Route path="/login" element={<RootLayout> <LoginPage /> </RootLayout>} />
        <Route path="/join" element={<RootLayout> <JoinPage /> </RootLayout>} />
        <Route path="/dashboard" element={<RootLayout> <Dashboard /> </RootLayout>} />
        <Route path="*" element={<NOT_FOUND />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App