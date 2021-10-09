import { AppProvider } from 'src/providers/app'
import { AppRoutes } from 'src/routes'

const App = (): JSX.Element => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

export default App
