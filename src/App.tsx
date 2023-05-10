
import { Loading } from './components/Loading'
import { LoadContextProvider } from './contexts/LoadContext'
import { PageContextProvider } from './contexts/PageContext'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { AppRouter } from './routes'
import './styles/global.css'

export function App() {

  return (
    <LoadContextProvider>
      <ThemeContextProvider>
        <PageContextProvider>
          <Loading />
          <AppRouter />
        </PageContextProvider>
      </ThemeContextProvider>
    </LoadContextProvider>
  )
}
