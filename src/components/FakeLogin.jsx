import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import './styles/Login.css';

// Temporary demo credentials
const DEMO_USERNAME = "testuser";
const DEMO_PASSWORD = "123456";

export default function FakeLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 600));

    if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
      navigate("/");
    } else {
      setError("The username or password you entered is incorrect.");
      setIsLoading(false);
    }
  };

  return (
    <div className="apple-login-container">
      <div className="apple-login-card">
        <h1 className="apple-login-title">Sign in</h1>

        <form onSubmit={handleSubmit} className="apple-login-form">
          {/* Username Field */}
          <div className="apple-input-group">
            <label htmlFor="username" className="apple-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              className="apple-input"
              required
            />
          </div>

          {/* Password Field */}
          <div className="apple-input-group">
            <label htmlFor="password" className="apple-label">
              Password
            </label>
            <div className="apple-password-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="apple-input"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="apple-password-toggle"
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="apple-error-message">
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="apple-login-button"
          >
            {isLoading ? 'Signing in...' : 'Continue'}
          </button>

          {/* Forgot Password */}
          <div className="apple-secondary-actions">
            <a href="#" className="apple-link">Forgot password?</a>
          </div>
        </form>

        {/* Demo Credentials */}
        <div className="apple-demo-note">
          Demo: testuser / 123456
        </div>

        {/* Create Account */}
        <div className="apple-footer">
          <span className="apple-footer-text">Don't have an account?</span>
          <a href="#" className="apple-link">Create yours now</a>
        </div>
      </div>
    </div>
  );
}
