import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Páginas
import LoginPage from './features/auth/pages/LoginPage';
import AdminDashboard from './features/dashboard/pages/AdminDashboard';
// import SignupPage from './features/auth/pages/SignupPage';

// Componentes
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* --- Rotas Públicas --- */}
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/signup" element={<SignupPage />} /> */}

          {/* --- Rotas Protegidas --- */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;