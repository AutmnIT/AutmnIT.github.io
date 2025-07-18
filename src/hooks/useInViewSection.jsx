
import { useEffect, useState } from 'react';

export function useInViewSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observers = [];
    
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      //intersectionobserver is a browser featuer that let's us watch element on our page and notify when visible
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          threshold: 0.3, // 50% of the section should be visible
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}
