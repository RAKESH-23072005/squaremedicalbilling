import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { motion } from "framer-motion";
import billingDetail from "@/assets/billing-detail.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SQUARE MEDICAL BILLING" },
      { name: "description", content: "Comprehensive RCM and digital marketing services for healthcare providers." },
    ],
  }),
  component: ServicesPage,
});

const rcm = [
  { icon: "📋", title: "Medical Transcription", desc: "Accurate transcription of medical records, clinical notes, and patient documentation.", points: ["Audio/video transcription", "Quick turnaround", "HIPAA compliant", "QA checks"] },
  { icon: "👥", title: "Patient Details Entry", desc: "Comprehensive patient data capture and management.", points: ["Demographic data entry", "Insurance verification", "Eligibility checks", "Data validation"] },
  { icon: "💳", title: "Charge Entry", desc: "Accurate charge posting and service documentation.", points: ["Service line posting", "CPT code assignment", "Modifier application", "Claim verification"] },
  { icon: "🏥", title: "Medical Coding", desc: "Professional ICD-10, CPT, and HCPCS coding.", points: ["ICD-10 diagnosis", "CPT procedure", "HCPCS assignment", "Compliance"] },
  { icon: "💰", title: "Payment Processing", desc: "Efficient claims submission and payment reconciliation.", points: ["Claim submission", "Payment posting", "EOB reconciliation", "Denial tracking"] },
  { icon: "📞", title: "AR Calling & Collections", desc: "Strategic AR follow-up to maximize collections.", points: ["Insurance follow-up", "Patient collections", "Status verification", "Payment plans"] },
];

const marketing = [
  { icon: "🌐", title: "Website Development" },
  { icon: "📱", title: "Social Media Management" },
  { icon: "🔍", title: "SEO Optimization" },
  { icon: "📧", title: "Email Marketing" },
  { icon: "📊", title: "Analytics & Reporting" },
  { icon: "💻", title: "Content Marketing" },
];

const steps = ["Consultation", "Assessment", "Implementation", "Monitoring", "Reporting"];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader title="Our Services" subtitle="End-to-End Revenue Cycle Management Solutions" />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Expert Healthcare Billing</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              We provide a full suite of RCM services designed to reduce administrative burden 
              and increase revenue for healthcare facilities. Our experts handle everything from 
              initial patient intake to final payment collection.
            </p>
            <ul className="space-y-3">
              {["Reduced Claim Denials", "Faster Reimbursement", "HIPAA Security", "Dedicated Support"].map(item => (
                <li key={item} className="flex items-center gap-3 text-cyan-400">
                  <span className="font-bold text-xl">✓</span>
                  <span className="text-gray-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src={billingDetail} alt="Billing Detail" className="rounded-2xl border border-white/10 shadow-2xl" />
          </motion.div>
        </div>

        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white md:text-4xl mb-4">Revenue Cycle Management</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Complete end-to-end billing solutions for your healthcare facility.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rcm.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40"
            >
              <div className="mb-3 text-3xl">{s.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mb-4 text-sm text-gray-400">{s.desc}</p>
              <ul className="space-y-1.5 text-sm text-gray-300">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2"><span className="text-cyan-400">›</span>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white md:text-4xl mb-4">Digital Marketing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Grow your healthcare practice with strategic digital solutions.</p>
          </motion.div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {marketing.map((m, idx) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="mb-3 text-3xl">{m.icon}</div>
                <h3 className="font-semibold text-white">{m.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.h2 {...fadeIn} className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">Our Process</motion.h2>
        <div className="grid gap-6 md:grid-cols-5">
          {steps.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20 text-lg font-bold text-cyan-300">
                {i + 1}
              </div>
              <h4 className="font-semibold text-white">{step}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
