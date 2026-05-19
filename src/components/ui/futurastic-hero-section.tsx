import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Link } from "@tanstack/react-router";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

interface AuroraHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaTo?: string;
}

export const AuroraHero = ({
  badge,
  title,
  subtitle,
  ctaLabel = "Get Started",
  ctaTo = "/contact",
}: AuroraHeroProps) => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-[88vh] place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        {badge && (
          <span className="mb-6 inline-block rounded-full bg-white/10 px-3 py-1.5 text-xs uppercase tracking-widest backdrop-blur-sm">
            {badge}
          </span>
        )}
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-4xl font-bold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
          {title}
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed text-gray-300 md:text-lg md:leading-relaxed">
          {subtitle}
        </p>
        <Link to={ctaTo}>
          <motion.button
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-5 py-2.5 text-gray-50 transition-colors hover:bg-gray-950/50"
          >
            {ctaLabel}
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>
        </Link>
      </div>

      <div className="absolute inset-0 z-0">
        {typeof window !== "undefined" && (
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        )}
      </div>
    </motion.section>
  );
};
