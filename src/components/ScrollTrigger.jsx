import { useInView } from "react-intersection-observer";

export default function ScrollTrigger() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <div className="h-screen flex items-center justify-center text-gray-400">
        Scroll down 👇
      </div>

      <div
        ref={ref}
        className={`h-52 flex items-center justify-center rounded-xl shadow-lg
        transition-all duration-[10000ms] ease-out
        ${inView
          ? "bg-green-500 text-white opacity-100 translate-y-0 scale-100"
          : "bg-gray-300 text-gray-600 opacity-0 translate-y-20 scale-95"}`}
      >
        Slow 10s Animation
      </div>

      <div className="h-screen" />
    </>
  );
}
