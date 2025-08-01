import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { RegisterPage } from './pages/register';
import { UserSettingsPage } from './pages/settings';
import { Landing } from './pages/landing';
import { Header } from './components/Header';
import { AppContextWrapper } from './context/appWrapper';
import { Toast } from './components/Toast';
import ProfilePage from './pages/user';
import ForumCreatePage from './pages/createForum';
import ForumEditPage from './pages/editForum';
import ForumPageMain from './pages/forumMain';
import { ForumPage } from './pages/forum';
import { SearchPage } from './pages/search';
import { PostPage } from './pages/post';

function App() {
  return (
    <AppContextWrapper>
      <BrowserRouter>
        <>
          <Header />
          <Routes>
            <Route element={<Landing />} path="/" />
            <Route element={<HomePage />} path="/home" />
            <Route element={<LoginPage />} path="/login" />
            <Route element={<RegisterPage />} path="/register" />
            <Route element={<ProfilePage />} path="/user/:id" />
            <Route element={<UserSettingsPage />} path="/settings" />
            <Route element={<SearchPage />} path="/search" />
            <Route element={<PostPage />} path="/post/:id" />
            <Route path="forum" element={<ForumPage />}>
              <Route path=":id" element={<ForumPageMain />} />
              <Route path=":id/create" element={<ForumCreatePage />} />
              <Route path=":id/edit" element={<ForumEditPage />} />
            </Route>
          </Routes>
        </>
      </BrowserRouter>
      <Toast />
    </AppContextWrapper>
  );
}

export default App;
