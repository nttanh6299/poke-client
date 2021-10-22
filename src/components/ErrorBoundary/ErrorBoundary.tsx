import { Component, ErrorInfo, ReactNode } from 'react'
import * as Sentry from '@sentry/react'

interface IState {
  hasError: boolean
}

interface IProps {
  children: any
  fallbackComponent?: any
}

class ErrorBoundary extends Component<IProps, IState> {
  state = { hasError: false }

  static getDerivedStateFromError(_: Error): IState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo)
    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(errorInfo)
    }
  }

  render(): ReactNode {
    const { hasError } = this.state
    const { fallbackComponent: FallbackComponent = null, children } = this.props

    if (hasError) {
      if (this.props.fallbackComponent) {
        return <FallbackComponent />
      }
      return <h4>Sorry.. there was an error</h4>
    }

    return children
  }
}

export default ErrorBoundary
