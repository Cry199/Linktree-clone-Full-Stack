import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Importações das páginas
import LoginPage from './features/auth/pages/LoginPage';
import SignupPage from './features/auth/pages/SignupPage';
import AdminDashboard from './features/dashboard/pages/AdminDashboard';
import PublicProfilePage from './features/publicProfile/pages/PublicProfilePage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* --- Rotas de Autenticação --- */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<LoginPage />} />

          {/* --- Rota Protegida --- */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          
          {/* --- ROTA PÚBLICA --- */}
          <Route path="/:username" element={<PublicProfilePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;