import { useEffect } from 'react';

function setMeta(selector, content) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    if (selector.includes('property=')) {
      element.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] ?? '');
    } else {
      element.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] ?? '');
    }
    document.head.append(element);
  }
  element.setAttribute('content', content);
}

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
  }, [title, description]);
}
