import { useEffect } from "react";

const SparkCursor = () => {
  useEffect(() => {
    let ticking = false;

    const getRandomTransitionValue = () =>
      `${Math.random() * 400 - 200}px`;

    const spark = (event) => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const i = document.createElement("i");

        i.style.left = event.pageX + "px";
        i.style.top = event.pageY + "px";
        i.style.scale = `${Math.random() * 2 + 1}`;
        i.style.setProperty("--x", getRandomTransitionValue());
        i.style.setProperty("--y", getRandomTransitionValue());

        document.body.appendChild(i);

        setTimeout(() => i.remove(), 2000);
        ticking = false;
      });
    };

    document.addEventListener("mousemove", spark);

    return () => {
      document.removeEventListener("mousemove", spark);
    };
  }, []);

  return null;
};

export default SparkCursor;
