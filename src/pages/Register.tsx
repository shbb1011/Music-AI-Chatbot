import { Link } from "react-router-dom";

export default function Register() {
  return (
    <main className="flex-grow pt-section pb-section px-margin-mobile md:px-margin-desktop flex items-center justify-center">
      <div className="w-full max-w-[1000px] bg-surface-card rounded-lg flex flex-col md:flex-row overflow-hidden border border-hairline shadow-sm">
        <div className="hidden md:block md:w-5/12 bg-surface-cream-strong relative">
          <img
            alt="Editorial workspace"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8OburdcGRMZJYTBO2m_G8cxdxUyz6lwzklT8T2Yl_fnMmqXMPD9iS2-z0ms0uWWsqiKakIKHjo75BzwUNslDx7q5eocDIhh6wBFgUWhMvLgl2Y1G0IZfKwpoXIVirJ1vE5OO8QCq7lRMzL2NFA6kfBkLwXxGCEUJFcBiglHQeM4n9cNXuHm6rxscVYMF-5-RqmL0oJunY_ijhqjAj6RbhfyAnQ8nYAap5oNwKCwjhOoUUul6FbhOr6WFITisFWsg2NKW92yjDLQ0"
          />
          <div className="absolute inset-0 bg-surface-tint/10 mix-blend-multiply"></div>
        </div>
        <div className="w-full md:w-7/12 p-xl md:p-xxl flex flex-col justify-center bg-canvas">
          <div className="max-w-sm mx-auto w-full">
            <h1 className="font-display-md text-display-md text-body-strong mb-xs">Join Aria</h1>
            <p className="font-body-md text-body-md text-muted mb-xl">Curating sound with soul. Create your account to begin.</p>
            <form className="space-y-lg">
              <div className="space-y-xs">
                <label className="block font-caption-uppercase text-caption-uppercase text-muted" htmlFor="name">Full Name</label>
                <input
                  className="w-full bg-canvas border border-hairline rounded-DEFAULT p-sm font-body-sm text-body-strong placeholder:text-muted-soft focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  id="name"
                  name="name"
                  placeholder="Jane Doe"
                  type="text"
                />
              </div>
              <div className="space-y-xs">
                <label className="block font-caption-uppercase text-caption-uppercase text-muted" htmlFor="email">Email Address</label>
                <input
                  className="w-full bg-canvas border border-hairline rounded-DEFAULT p-sm font-body-sm text-body-strong placeholder:text-muted-soft focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  id="email"
                  name="email"
                  placeholder="jane@example.com"
                  type="email"
                />
              </div>
              <div className="space-y-xs">
                <label className="block font-caption-uppercase text-caption-uppercase text-muted" htmlFor="password">Password</label>
                <input
                  className="w-full bg-canvas border border-hairline rounded-DEFAULT p-sm font-body-sm text-body-strong placeholder:text-muted-soft focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
              <div className="space-y-xs">
                <label className="block font-caption-uppercase text-caption-uppercase text-muted" htmlFor="confirm_password">Confirm Password</label>
                <input
                  className="w-full bg-canvas border border-hairline rounded-DEFAULT p-sm font-body-sm text-body-strong placeholder:text-muted-soft focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  id="confirm_password"
                  name="confirm_password"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
              <div className="pt-sm">
                <button
                  className="w-full bg-primary text-on-primary font-button text-button py-sm px-md rounded-DEFAULT hover:bg-primary-active transition-colors duration-200 flex items-center justify-center gap-xs"
                  type="submit"
                >
                  Create Account
                </button>
              </div>
            </form>
            <p className="mt-xl font-body-sm text-body-sm text-center text-muted">
              Already have an account? <Link to="/login" className="text-primary hover:underline transition-colors">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
