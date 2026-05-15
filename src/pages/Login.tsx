import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="flex-grow flex items-center justify-center pt-[100px] pb-section px-margin-mobile md:px-margin-desktop">
      <div className="w-full max-w-6xl bg-surface-bright rounded-xl shadow-sm border border-hairline overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        <div className="hidden md:block w-1/2 relative bg-surface-card">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="Vintage record player"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYKCm21a8hg5j2zXtptSvLapN1K3daKYfxu6WAwWZfhjvnhVHe4OpXJE0ZRUOagwi0XJEPTOOAGjJtYCN0DC1UQoawGnWjVRMWrDE-tIcI5R8vZAaQoQ2iu9_-9WrmXFJwYgT8EqP7P3ASvHvUMoNy-v2g2Zqp9O6QpD5LuJAXoNVBaWi1lzqnWVObYlaOVUbfECfxMRDhaM-QGYIAX1l4GGs3_bgoypU9Hv0yRaCKn_eU5SFRvWYxnmcC9sAQaNSfzHxFyyhucW8"
          />
          <div className="absolute inset-0 bg-canvas/10 mix-blend-overlay"></div>
        </div>
        <div className="w-full md:w-1/2 p-xl md:p-[72px] flex flex-col justify-center bg-canvas">
          <div className="max-w-sm w-full mx-auto">
            <h1 className="font-display-lg text-display-lg text-body-strong mb-xs">Welcome Back</h1>
            <p className="font-body-md text-body-md text-muted mb-xl">Curating sound with soul. Enter your details to continue.</p>
            <form className="space-y-lg">
              <div className="space-y-xs">
                <label className="block font-title-sm text-title-sm text-body-strong" htmlFor="email">Email Address</label>
                <input
                  className="w-full bg-canvas border border-hairline rounded p-md font-body-md text-body-md text-body focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors placeholder:text-muted-soft"
                  id="email"
                  name="email"
                  placeholder="hello@ariamusic.com"
                  type="email"
                />
              </div>
              <div className="space-y-xs">
                <div className="flex justify-between items-center">
                  <label className="block font-title-sm text-title-sm text-body-strong" htmlFor="password">Password</label>
                  <Link to="#" className="font-caption text-caption text-primary hover:text-primary-active transition-colors">Forgot password?</Link>
                </div>
                <div className="relative">
                  <input
                    className="w-full bg-canvas border border-hairline rounded p-md font-body-md text-body-md text-body focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors placeholder:text-muted-soft"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type="password"
                  />
                  <button className="absolute right-md top-1/2 -translate-y-1/2 text-muted hover:text-body transition-colors" type="button">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <button
                className="w-full bg-primary text-on-primary font-button text-button py-md rounded-lg hover:opacity-90 transition-opacity mt-sm shadow-sm shadow-primary/20"
                type="submit"
              >
                Log In
              </button>
            </form>
            <div className="mt-xl text-center">
              <p className="font-body-sm text-body-sm text-muted">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary hover:text-primary-active font-medium underline transition-colors">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
