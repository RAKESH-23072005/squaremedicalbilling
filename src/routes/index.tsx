import { createFileRoute, Link } from "@tanstack/react-router";
import { AuroraHero } from "@/components/ui/futurastic-hero-section";
import { SiteLayout } from "@/components/site/SiteLayout";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero.png";
import codingImg from "@/assets/coding.png";
import rcmImg from "@/assets/rcm.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SQUARE MEDICAL BILLING | Leading Healthcare RCM Services" },
      {
        name: "description",
        content:
          "SQUARE MEDICAL BILLING — Reliable medical billing, coding, AR calling, and RCM services that grow healthcare revenue.",
      },
      { property: "og:title", content: "SQUARE MEDICAL BILLING | Revenue Cycle Management" },
      { property: "og:description", content: "Trusted RCM partner for healthcare providers." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: "📋", title: "Medical Transcription", desc: "Accurate transcription of medical records and clinical documentation." },
  { icon: "👥", title: "Patient Details Entry", desc: "Comprehensive patient data capture and management for billing accuracy." },
  { icon: "💳", title: "Charge Entry", desc: "Accurate charge posting and service documentation for max reimbursement." },
  { icon: "🏥", title: "Medical Coding", desc: "Professional ICD-10 and CPT coding for optimal claim processing." },
  { icon: "💰", title: "Payment Processing", desc: "Efficient claims submission and payment reconciliation." },
  { icon: "📞", title: "AR Calling", desc: "Strategic accounts receivable follow-up to maximize collections." },
];

const highlights = [
  { title: "Expert Team", desc: "Experienced professionals in medical coding and billing." },
  { title: "24/7 Support", desc: "Round-the-clock support for your healthcare facility." },
  { title: "HIPAA Compliant", desc: "Secure and compliant with all healthcare regulations." },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

function HomePage() {
  return (
    <SiteLayout>
      <AuroraHero
        title="SQUARE MEDICAL BILLING"
        subtitle="Trusted medical billing & RCM services that help healthcare providers grow revenue and achieve lasting success."
        ctaLabel="Get Started"
        ctaTo="/contact"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Our RCM Services</h2>
          <div className="mx-auto h-1 w-20 bg-cyan-500 rounded-full"></div>
        </motion.div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10"
            >
              <div className="mb-4 text-4xl">{s.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-white">{s.title}</h3>
              <p className="text-sm text-gray-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 px-6 py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl text-left">About SQUARE MEDICAL BILLING</h2>
              <p className="mb-8 text-lg text-gray-300 leading-relaxed">
                A leading Revenue Cycle Management (RCM) service provider dedicated to helping US healthcare
                providers optimize their billing processes and maximize revenue collection. We combine technology with 
                deep expertise to deliver results.
              </p>
              <div className="grid gap-4">
                {highlights.map((h) => (
                  <div key={h.title} className="flex gap-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                    <div className="text-cyan-400 font-bold">✓</div>
                    <div>
                      <h4 className="font-semibold text-white">{h.title}</h4>
                      <p className="text-sm text-gray-400">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-full"></div>
              <img 
                src={heroImg} 
                alt="Medical Billing Professional" 
                className="relative rounded-2xl border border-white/10 shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <motion.div {...fadeIn}>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to Grow Your Revenue?</h2>
          <p className="mb-12 text-gray-400 text-lg">Partner with SQUARE MEDICAL BILLING for end-to-end RCM excellence.</p>
          <div className="grid gap-8 md:grid-cols-2 mb-16">
            <div className="overflow-hidden rounded-2xl aspect-video relative group">
              <img src={codingImg} alt="Coding Expert" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-left">
                <h4 className="text-xl font-bold text-white">Expert Coding</h4>
                <p className="text-sm text-gray-300">Precision and accuracy in every claim.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl aspect-video relative group">
              <img src={rcmImg} alt="RCM Process" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-left">
                <h4 className="text-xl font-bold text-white">Full-Cycle RCM</h4>
                <p className="text-sm text-gray-300">From patient entry to payment collection.</p>
              </div>
            </div>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-4 font-bold text-white transition-all hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
          >
            Explore All Services →
          </Link>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
