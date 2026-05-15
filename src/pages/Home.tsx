export default function Home() {
  return (
    <main className="flex-grow pt-[80px]">
      <section className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-section flex flex-col items-center text-center">
        <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-body-strong max-w-4xl tracking-tight mb-lg">
          Find your sound with AI.
        </h1>
        <p className="font-body-md text-body-md text-secondary max-w-2xl mb-xl">
          Aria Music utilizes advanced personalized discovery to curate sonic experiences tailored uniquely to you. Stop searching and start listening to an evolving canvas of music that perfectly matches your mood and taste.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-md mb-xxl">
          <button className="bg-primary text-on-primary px-xl py-md rounded-full font-button text-button shadow-sm hover:bg-primary-active transition-colors duration-200 w-full sm:w-auto">
            Get Started
          </button>
          <button className="bg-transparent text-body border border-hairline px-xl py-md rounded-full font-button text-button hover:border-outline transition-colors duration-200 w-full sm:w-auto">
            Learn more
          </button>
        </div>
        <div className="w-full max-w-5xl rounded-xl overflow-hidden shadow-sm border border-hairline bg-surface-card aspect-video relative">
          <img
            alt="Hero visual representation of AI music"
            className="w-full h-full object-cover opacity-90 mix-blend-multiply"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-uBNs1nIC9hTfDz-_ieYT0T1iiB4Ohnwt_q0WsSE6YUA6TQvTrBh8LD7Yq7PgUlMzWi5-_K9hXx3ir06uNn5PQmU4jOmLuvOros4kZAcnkNigbQUac-D97KfnqOXmwJ_GMtitT8LnH_HDgzoT4oYOy9CUCRJZFB51pimxxDpHxyGU1Kn4dH_513hXyNJtcGsSXzHjvsZhsTerZGQKq18Bvjt9aBcBDEpdfqNf_3g4aOpL5YRaNpzRF-BzQX81yxM2P6-siWsueaE"
          />
        </div>
      </section>
    </main>
  );
}
