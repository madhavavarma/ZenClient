import { createBrowserRouter, isRouteErrorResponse, Link, useRouteError } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import Home from '../pages/Home'

function RouteErrorBoundary() {
  const error = useRouteError()
  const message = isRouteErrorResponse(error)
    ? error.statusText || 'Something went wrong.'
    : 'Something went wrong.'

  return (
    <div className="min-h-screen bg-white px-6 py-24 flex items-center justify-center">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)] mb-3">
          Unexpected error
        </p>
        <h1 className="text-3xl font-semibold mb-3">{message}</h1>
        <p className="text-base text-[var(--text)] mb-6">
          The page could not be loaded. Please try again or return to the home page.
        </p>
        <Link to="/" className="inline-flex items-center justify-center rounded-full bg-[var(--navbar-bg)] px-5 py-3 text-sm font-medium text-white">
          Go to home
        </Link>
      </div>
    </div>
  )
}

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-24 flex items-center justify-center">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)] mb-3">
          404
        </p>
        <h1 className="text-3xl font-semibold mb-3">Page not found</h1>
        <p className="text-base text-[var(--text)] mb-6">
          The requested page does not exist.
        </p>
        <Link to="/" className="inline-flex items-center justify-center rounded-full bg-[var(--navbar-bg)] px-5 py-3 text-sm font-medium text-white">
          Go to home
        </Link>
      </div>
    </div>
  )
}

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
], {
  basename,
})
