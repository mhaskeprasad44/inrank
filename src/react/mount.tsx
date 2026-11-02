import React from 'react';
import { createRoot } from 'react-dom/client';
import { GrowthRoiCalculator } from './components/GrowthRoiCalculator.tsx';

/**
 * Registry of available React components that can be mounted into HTML pages.
 */
const COMPONENT_REGISTRY: Record<string, React.ComponentType<any>> = {
  GrowthRoiCalculator,
};

/**
 * Scans the active document for DOM containers marked with `data-react-component="<Name>"`
 * and mounts the corresponding React component using React 19's `createRoot`.
 */
export function initReactComponents(): void {
  const mountPoints = document.querySelectorAll<HTMLElement>('[data-react-component]');

  mountPoints.forEach((el) => {
    // Prevent double mounting
    if (el.dataset.reactMounted === 'true') return;

    const componentName = el.getAttribute('data-react-component');
    if (!componentName) return;

    const Component = COMPONENT_REGISTRY[componentName];
    if (Component) {
      try {
        const root = createRoot(el);
        root.render(<Component />);
        el.dataset.reactMounted = 'true';
        console.log(`[Inrank React Engine] Successfully mounted React component: <${componentName} />`);
      } catch (err) {
        console.error(`[Inrank React Engine] Failed to mount <${componentName} />:`, err);
      }
    } else {
      console.warn(`[Inrank React Engine] Component "${componentName}" not found in registry.`);
    }
  });
}
