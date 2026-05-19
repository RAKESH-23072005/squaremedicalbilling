import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SQUARE MEDICAL BILLING" },
      { name: "description", content: "Our vision, mission, and core values driving healthcare RCM excellence." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Integrity", desc: "We maintain the highest standards of ethics and transparency." },
  { title: "Accuracy", desc: "Precision in billing and coding is our top priority." },
  { title: "Partnership", desc: "We work as an extension of your healthcare team." },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader title="About SQUARE MEDICAL BILLING" subtitle="Transforming Healthcare Revenue Cycle Management" />

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-8"
        >
          <h2 className="mb-4 text-2xl font-bold text-white">Our Mission</h2>
          <p className="text-gray-300">
            To provide healthcare providers with innovative, accurate, and efficient revenue cycle
            solutions that allow them to focus on what matters most: patient care. We aim to be the 
            most trusted RCM partner in the industry.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8"
        >
          <h2 className="mb-4 text-2xl font-bold text-white">Our Vision</h2>
          <p className="text-gray-300">
            To revolutionize healthcare billing through cutting-edge technology and human expertise, 
            ensuring financial sustainability for healthcare facilities worldwide.
          </p>
        </motion.div>
      </section>

      <section className="bg-slate-900/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2 {...fadeIn} className="mb-12 text-center text-3xl font-bold text-white">Our Core Values</motion.h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-xl border border-white/10 bg-slate-950 p-6 text-center"
              >
                <h3 className="mb-2 text-xl font-bold text-cyan-400">{v.title}</h3>
                <p className="text-sm text-gray-400">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
