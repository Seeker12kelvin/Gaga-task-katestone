import { useEffect, useState } from "react";

export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observers = [];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        // If the section occupies at least 50% of the viewport
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "0% 0px 0% 0px", // Creates a detection "sweet spot" in upper-middle screen
      threshold: 0.1,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id.href);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
