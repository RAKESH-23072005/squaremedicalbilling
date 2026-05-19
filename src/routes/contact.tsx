import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SQUARE MEDICAL BILLING" },
      { name: "description", content: "Get in touch with SQUARE MEDICAL BILLING — RCM experts available 24/7." },
    ],
  }),
  component: ContactPage,
});

import { useState } from "react";
import { toast } from "sonner";

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/office@squaremedicalbilling.in", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        toast.success("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      toast.error("An error occurred. Please check your connection.");
    }
  };

  if (status === "success") {
    return (
      <SiteLayout>
        <PageHeader title="Contact Us" subtitle="Message Received" />
        <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-40 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-xl"
          >
            <div className="mb-6 text-6xl">✉️</div>
            <h2 className="mb-4 text-3xl font-bold text-white">Thank You!</h2>
            <p className="mb-8 text-gray-400">
              Your message has been sent to **office@squaremedicalbilling.in**. <br />
              Our team will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="rounded-full bg-cyan-500 px-8 py-3 font-semibold text-white transition hover:bg-cyan-600"
            >
              Send Another Message
            </button>
          </motion.div>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHeader title="Contact Us" subtitle="We're here to help you optimize your revenue cycle." />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-white">Contact Information</h2>
          {[
            { icon: "📍", title: "Office Address", lines: ["83D", "MGR Nagar, Sathya Nagar,Grasiya Road,", "Chinna Anuppanadi", "Tamil Nadu 625009, India"] },
            { icon: "📞", title: "Phone", lines: ["+91 96008 29498", "+91 9080995606", "Available 24/7"] },
            { icon: "📧", title: "Email", lines: ["office@squaremedicalbilling.in", "Response within 24 hours"] },
            { icon: "⏰", title: "Business Hours", lines: ["Mon–Fri: 9 AM – 6 PM IST", "Sat: 10 AM – 2 PM IST", "Emergency: 24/7"] },
          ].map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="mb-2 text-lg font-semibold text-cyan-300">{c.icon} {c.title}</h3>
              {c.lines.map((l) => <p key={l} className="text-sm text-gray-300">{l}</p>)}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8"
        >
          <h2 className="mb-6 text-2xl font-bold text-white">Send us a Message</h2>
          <form onSubmit={onSubmit} className="space-y-4">
            {[
              { name: "name", label: "Full Name", type: "text" },
              { name: "email", label: "Email Address", type: "email" },
            ].map((f) => (
              <div key={f.name}>
                <label className="mb-1 block text-sm font-medium text-gray-400">{f.label}</label>
                <input
                  type={f.type}
                  name={f.name}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white outline-none focus:border-cyan-500"
                />
              </div>
            ))}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-400">Service Interested In</label>
              <select
                name="service"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white outline-none focus:border-cyan-500 [&>option]:bg-slate-900"
              >
                <option>AR Calling</option>
                <option>Medical Coding</option>
                <option>Medical Billing</option>
                <option>Digital Marketing</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm text-gray-300">Message *</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell us about your requirements..."
                className="w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 py-2.5 text-white placeholder-gray-500 outline-none focus:border-cyan-400"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "error" && (
              <p className="text-center text-sm text-red-400">Something went wrong. Please try again later.</p>
            )}
          </form>
        </motion.div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">FAQ</h2>
          <div className="mx-auto max-w-3xl space-y-3">
            {[
              ["How quickly can I get started?", "Most implementations begin within 1–2 weeks after consultation."],
              ["Is my patient data secure?", "Yes — full HIPAA compliance with enterprise-grade security."],
              ["Can I scale services as I grow?", "Absolutely. Our services scale with your facility's needs."],
              ["Do you support multi-location practices?", "Yes, with centralized reporting and unified support."],
            ].map(([q, a]) => (
              <details key={q} className="group rounded-xl border border-white/10 bg-white/5 p-5">
                <summary className="cursor-pointer font-medium text-white">❓ {q}</summary>
                <p className="mt-2 text-sm text-gray-400">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

