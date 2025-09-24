"use client";

import { BackButton } from "@/components/back-button";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Mail, Phone, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "ERP Solutions",
    "Big Data Analytics",
    "Website Design & Development",
    "AI & Machine Learning",
    "Digital Transformation",
    "Custom Software Development",
    "Other",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen w-full relative bg-background">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(245, 158, 11, 0.06), transparent 60%), #ffffff",
        }}
      />

      {/* Header */}
      <header className="sticky top-4 z-[9999] mx-4 md:mx-auto max-w-5xl">
        <div className="flex items-center justify-between rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg px-4 py-3">
          <Link href="/" className="flex items-center justify-center gap-2">
            <img src="/logo.svg" alt="Tokenist" className="h-8 w-8" />
          </Link>

          <BackButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-8 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border backdrop-blur-sm mb-6"
            >
              <Send className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-secondary-foreground">
                Contact Us
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent mb-6 font-serif"
            >
              Let's Build Something
              <br />
              <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Ready to transform your business with cutting-edge technology? Our
              team of experts is here to turn your vision into reality. Let's
              start the conversation.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-1 space-y-8"
            >
              <div className="bg-card backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-6 font-serif">
                  Get in Touch
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Email</p>
                      <p className="text-foreground font-medium">
                        tokenist.solutions@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Phone</p>
                      <p className="text-foreground font-medium">
                        +84 902 757 816
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">
                        Business Hours
                      </p>
                      <p className="text-foreground font-medium">
                        Mon - Fri, 9AM - 6PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Why Choose Us?
                </h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Expert team with 10+ years experience
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Custom solutions tailored to your needs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    24/7 support and maintenance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Proven track record of success
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-card backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg">
                {!isSubmitted ? (
                  <>
                    <h3 className="text-2xl font-bold text-foreground mb-6 font-serif">
                      Start Your Project
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      Fill out the form below and we'll get back to you within
                      24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
                            placeholder="john@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
                            placeholder="Your Company"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Service of Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
                        >
                          <option value="" className="bg-background">
                            Select a service
                          </option>
                          {services.map((service) => (
                            <option
                              key={service}
                              value={service}
                              className="bg-background"
                            >
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 resize-none transition-colors"
                          placeholder="Tell us about your project, timeline, budget, and specific requirements..."
                          required
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-accent to-accent/80 text-accent-foreground font-medium py-4 px-6 rounded-lg shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you within
                      24 hours.
                    </p>
                    <div className="text-sm text-muted-foreground/60">
                      This form will reset automatically...
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
