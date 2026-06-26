import { useEffect, useState } from "react";

export function useActiveSection(sections) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const updateActive = () => {
      const viewportCenter = window.innerHeight / 2;

      let closest = "";
      let smallestDistance = Infinity;

      sections.forEach(({ href }) => {
        const el = document.getElementById(href);

        if (!el) return;

        const rect = el.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;

        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closest = href;
        }
      });

      setActive(closest);
    };

    updateActive();

    window.addEventListener("scroll", updateActive);
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [sections]);

  return active;
}
