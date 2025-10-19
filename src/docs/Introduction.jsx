import { useEffect } from 'react';
import DocsButtonBar from './DocsButtonBar';

const Introduction = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <section className="docs-section">
      <p className="docs-paragraph dim">
        MuneerUI is an open-source collection of stunning, animated React components crafted by Muneer Ali Subzwari.
        Every component is meticulously designed with attention to detail and ready to elevate your React web applications.
      </p>
      <p className="docs-paragraph">
        This is not your typical component library, which means you won&apos;t find a set of generic buttons, inputs, or
        other common UI elements here.
      </p>
      <p className="docs-paragraph">
        These components are here to help you stand out and make a visual statement by adding creativity, animation, 
        and elegance to your projects.
      </p>

      <h3 className="docs-category-title">Mission</h3>

            <p className="docs-paragraph">
        The goal of MuneerUI is simple - provide flexible, visually stunning and most importantly, free components
        for <span className="docs-highlight">every developer</span> who wants to make the web a beautiful place to
        explore.
      </p>
      <p className="docs-paragraph">To make that happen, the project is committed to the following principles:</p>

      <ul className="docs-list">
        <li className="docs-list-item">
          <span className="docs-highlight">Free For All:</span> You own the code, and it&apos;s free to use in your
          projects
        </li>
        <li className="docs-list-item">
          <span className="docs-highlight">Prop-First Approach:</span> Easy customization through thoughtfully exposed
          props
        </li>
                <li className="docs-list-item">
          <span className="docs-highlight">Fully Modular:</span> Install strictly what you need, MuneerUI is not a
          traditional NPM package, you simply copy the code you need directly into your project.
        </li>
        <li className="docs-list-item">
          <span className="docs-highlight">Free Choice:</span> JS or TS, plain CSS or Tailwind, the code is all here
        </li>
      </ul>

      <h4 className="docs-category-subtitle">Free For All</h4>

      <p className="docs-paragraph">
        Every component you choose to bring into your project is yours to modify or extend, because you get full
        visibility of the code, not just an import.
      </p>

      <h4 className="docs-category-subtitle">Prop-First Approach</h4>

      <p className="docs-paragraph">
        Every component is designed to be flexible and customizable, with props that allow you to adjust the look and
        feel without having to always dive into the code.
      </p>

      <h4 className="docs-category-subtitle">Fully Modular</h4>

      <p className="docs-paragraph">
        MuneerUI is not your classic NPM library. Install only what you need by copying code manually from the docs, or use the{' '}
        <a href="/docs/installation/shadcn" className="docs-link">
          Shadcn CLI
        </a>{' '}
        for instant installation with{' '}
        <code className="docs-code">npx shadcn@latest add https://muneer-ui.vercel.app/r/ComponentName</code>
      </p>

      <h4 className="docs-category-subtitle">Free Choice</h4>

      <p className="docs-paragraph">
        I don&apos;t want to dictate how you build your projects. Whether you prefer JavaScript or TypeScript, plain CSS
        or Tailwind, it&apos;s all here for you to use as you see fit.
      </p>

      <p className="docs-paragraph dim">
        P.S. The header has a neat dropdown to help you choose your preferred language.
      </p>

      <h3 className="docs-category-title">Performance</h3>

      <p className="docs-paragraph dim">
        While the focus of the components is flexibility and modularity, there are some good practices you should keep
        in mind when using MuneerUI:
      </p>

      <ul className="docs-list">
        <li className="docs-list-item">
          <span className="docs-highlight">Less Is More:</span> Using more than 2-3 components on a page is not advised,
          it can overload your page with animations, potentially impacting performance or UX
        </li>
        <li className="docs-list-item">
          <span className="docs-highlight">Mobile Optimization:</span> Consider disabling certain effects on mobile and
          replacing them with static placeholders instead
        </li>
        <li className="docs-list-item">
          <span className="docs-highlight">Test Thoroughly:</span> Your device may be high-end, but be considerate of
          your users - always test on multiple devices before going live
        </li>
      </ul>

      <DocsButtonBar next={{ label: 'Installation', route: '/get-started/installation' }} />
    </section>
  );
};

export default Introduction;
