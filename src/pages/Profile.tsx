import { TriangleAlert, Trash2 } from "lucide-react";

export default function Profile() {
  return (
    <main className="flex-grow pt-[120px] pb-section px-margin-mobile md:px-margin-desktop max-w-5xl mx-auto w-full flex flex-col gap-xxl">
      <header className="flex flex-col gap-sm border-b border-hairline pb-lg">
        <h1 className="font-display-md text-display-md md:font-display-lg md:text-display-lg text-body-strong">Account Profile</h1>
        <p className="font-body-md text-body-md text-muted">Manage your personal information and account settings.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-xl">
        <aside className="md:col-span-3 flex flex-col gap-sm">
          <nav className="flex flex-col gap-xs font-nav-link text-nav-link">
            <a href="#" className="px-md py-sm bg-surface-card text-primary font-bold rounded-DEFAULT">Personal Info</a>
            <a href="#" className="px-md py-sm text-muted hover:bg-surface-soft rounded-DEFAULT transition-colors">Preferences</a>
            <a href="#" className="px-md py-sm text-muted hover:bg-surface-soft rounded-DEFAULT transition-colors">Security</a>
          </nav>
        </aside>
        <section className="md:col-span-9 flex flex-col gap-xl">
          <div className="bg-surface-card border border-hairline rounded-lg p-xl flex flex-col gap-lg shadow-sm">
            <div className="flex items-center gap-lg border-b border-hairline pb-lg">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-surface-cream-strong border-2 border-canvas shadow-sm flex-shrink-0">
                <img
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzStYJr3DtGlUazoqxI7fEcwg0UTfo5_KgWdm9jQd5HSQfVvhcywh3FKyTQRHrWE2hBfRDyR80qeU-2E7p3EpSZREm6cGpU4PcvcMFFVOGmwSnsy3U8KLMJaf1TVRJgxeGkHcLGzvCN-I-fUZBtm8u2L00FhHax_6eGLRcMge62Ixv5gwwKW4Om18c_SGTQ6gSmtWJY10ehZmOvxDLl3A8LHMVvFWHG6UHHS9eRuRHduZ6_rgClZqcVMeltJp8CXVNSnv1buyvQZY"
                />
              </div>
              <div className="flex flex-col gap-xxs">
                <h2 className="font-title-lg text-title-lg text-body-strong">Update Avatar</h2>
                <p className="font-body-sm text-body-sm text-muted">Recommended size is 256x256px.</p>
                <div className="mt-sm flex gap-sm">
                  <button className="font-button text-button bg-canvas text-body border border-hairline px-md py-xs rounded-DEFAULT hover:bg-surface-soft transition-colors">Change</button>
                  <button className="font-button text-button text-muted hover:text-error transition-colors">Remove</button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg pt-sm">
              <div className="flex flex-col gap-xs">
                <label className="font-caption-uppercase text-caption-uppercase text-muted-soft">First Name</label>
                <input
                  className="bg-canvas border border-hairline text-body font-body-md px-md py-sm rounded-DEFAULT focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  readOnly
                  type="text"
                  value="Elena"
                />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-caption-uppercase text-caption-uppercase text-muted-soft">Last Name</label>
                <input
                  className="bg-canvas border border-hairline text-body font-body-md px-md py-sm rounded-DEFAULT focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  readOnly
                  type="text"
                  value="Rostova"
                />
              </div>
              <div className="flex flex-col gap-xs md:col-span-2">
                <label className="font-caption-uppercase text-caption-uppercase text-muted-soft">Email Address</label>
                <input
                  className="bg-canvas border border-hairline text-body font-body-md px-md py-sm rounded-DEFAULT focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  readOnly
                  type="email"
                  value="elena.rostova@example.com"
                />
              </div>
            </div>
            <div className="flex justify-end pt-md">
              <button className="font-button text-button bg-primary text-on-primary px-lg py-sm rounded-DEFAULT hover:bg-primary-active transition-colors shadow-sm">Save Changes</button>
            </div>
          </div>
          
          <div className="bg-surface-container-low border border-error-container rounded-lg p-xl flex flex-col gap-md mt-lg">
            <h3 className="font-title-md text-title-md text-error flex items-center gap-xs">
              <TriangleAlert className="w-5 h-5" />
              Danger Zone
            </h3>
            <p className="font-body-md text-body-md text-body-strong">
              Permanently delete your account and all associated data. This action cannot be undone and you will lose access to all your curated playlists and chat history.
            </p>
            <div className="flex pt-sm">
              <button className="font-button text-button bg-error text-on-error px-lg py-sm rounded-DEFAULT hover:bg-opacity-90 transition-opacity shadow-sm flex items-center gap-xs">
                <Trash2 className="w-[18px] h-[18px]" />
                Delete Account
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
