import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const highlights = [
  {
    title: 'React-first experience',
    description:
      'Build interactive slides and pages with familiar React components instead of templated markdown.',
  },
  {
    title: 'Vite-powered dev server',
    description:
      'Enjoy instant hot reloading, modern tooling, and an optimized production build out of the box.',
  },
  {
    title: 'JavaScript everywhere',
    description:
      'Ship modern ECMAScript without TypeScript or Next.js dependencies to keep the stack lean.',
  },
];

const steps = [
  'Run `npm install` to grab dependencies.',
  'Start the dev server with `npm run dev`.',
  'Edit components in `src/` and see changes instantly.',
];

function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <div className="logo-row">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer" className="logo-link">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer" className="logo-link">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Github Slideshow</p>
          <h1>Rebuilt as a React web app</h1>
          <p className="lede">
            This project now runs on a Vite + React foundation—no Next.js, no TypeScript—so you can
            focus on crafting rich interactive slides with modern tooling.
          </p>
          <div className="cta-row">
            <a className="button primary" href="https://vitejs.dev/guide/" target="_blank" rel="noreferrer">
              Read the Vite guide
            </a>
            <a className="button ghost" href="https://react.dev/learn" target="_blank" rel="noreferrer">
              Learn React
            </a>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="card-grid">
          {highlights.map((item) => (
            <article className="card" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </section>

        <section className="steps">
          <h2>Get started in minutes</h2>
          <ol>
            {steps.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ol>
        </section>

        <section className="note">
          <h3>Customization tips</h3>
          <ul>
            <li>Drop your assets in <code>public/</code> for direct access.</li>
            <li>Create slide-friendly components inside <code>src/</code> and compose them in <code>App.jsx</code>.</li>
            <li>Use <code>npm run build</code> to generate a production-ready bundle in <code>dist/</code>.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
