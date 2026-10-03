import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Component Crash:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ backgroundColor: '#090b14', color: '#ff0055', padding: '30px', fontFamily: 'monospace', minHeight: '100vh' }}>
          <h2 style={{ color: '#00e5ff' }}>React Render Error</h2>
          <p style={{ color: '#fff', fontSize: '16px' }}>{this.state.error?.message}</p>
          <pre style={{ background: '#131826', color: '#ffb703', padding: '15px', overflowX: 'auto', border: '1px solid #1f293d' }}>
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  try {
    if (!window.__root) {
      window.__root = createRoot(rootElement);
    }
    window.__root.render(
      <StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StrictMode>
    );
    window.__APP_MOUNTED__ = true;
    console.log("%c[CYBERSPACE] 2D Pixel Portfolio mounted successfully. Welcome, Player 1!", "color: #00e5ff; font-weight: bold; font-size: 13px;");
  } catch (mountError) {
    console.error("Critical mount error:", mountError);
    rootElement.innerHTML = `
      <div style="background:#090b14;color:#ff0055;padding:30px;font-family:monospace;min-height:100vh;">
        <h2 style="color:#00e5ff;">Mount Error:</h2>
        <p style="color:#fff;font-size:16px;">${mountError?.message || 'Failed to mount React tree'}</p>
        <pre style="background:#131826;color:#ffb703;padding:15px;overflow:auto;border:1px solid #1f293d;">${mountError?.stack || ''}</pre>
      </div>
    `;
  }
}

