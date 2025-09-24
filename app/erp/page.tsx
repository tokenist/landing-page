"use client";

import { BackButton } from "@/components/back-button";
import { ContactSection } from "@/components/contact-section";
import { StickyFooter } from "@/components/sticky-footer";
import { Trans } from "@lingui/react/macro";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ERPPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const erpModules = [
    {
      titleKey: "erp.modules.sales.title",
      title: "Sales",
      icon: "💰",
      descriptionKey: "erp.modules.sales.description",
      description:
        "Manage your sales pipeline, quotes, and customer relationships with powerful CRM integration.",
      featuresKeys: [
        "erp.modules.sales.feature1",
        "erp.modules.sales.feature2",
        "erp.modules.sales.feature3",
        "erp.modules.sales.feature4",
      ],
      features: [
        "Lead Management",
        "Quote Generation",
        "Sales Analytics",
        "Customer Portal",
      ],
    },
    {
      titleKey: "erp.modules.purchasing.title",
      title: "Purchasing",
      icon: "📦",
      descriptionKey: "erp.modules.purchasing.description",
      description:
        "Streamline procurement processes from vendor selection to purchase order management.",
      featuresKeys: [
        "erp.modules.purchasing.feature1",
        "erp.modules.purchasing.feature2",
        "erp.modules.purchasing.feature3",
        "erp.modules.purchasing.feature4",
      ],
      features: [
        "Vendor Management",
        "Purchase Orders",
        "Inventory Planning",
        "Cost Control",
      ],
    },
    {
      titleKey: "erp.modules.warehouse.title",
      title: "Warehouse",
      icon: "🏭",
      descriptionKey: "erp.modules.warehouse.description",
      description:
        "Complete inventory management with real-time tracking and automated workflows.",
      featuresKeys: [
        "erp.modules.warehouse.feature1",
        "erp.modules.warehouse.feature2",
        "erp.modules.warehouse.feature3",
        "erp.modules.warehouse.feature4",
      ],
      features: [
        "Stock Management",
        "Barcode Scanning",
        "Multi-location",
        "Automated Reordering",
      ],
    },
    {
      titleKey: "erp.modules.manufacturing.title",
      title: "Manufacturing",
      icon: "⚙️",
      descriptionKey: "erp.modules.manufacturing.description",
      description:
        "End-to-end production management from planning to quality control.",
      featuresKeys: [
        "erp.modules.manufacturing.feature1",
        "erp.modules.manufacturing.feature2",
        "erp.modules.manufacturing.feature3",
        "erp.modules.manufacturing.feature4",
      ],
      features: [
        "Production Planning",
        "Bill of Materials",
        "Work Orders",
        "Quality Control",
      ],
    },
    {
      titleKey: "erp.modules.hr.title",
      title: "Human Resources",
      icon: "👥",
      descriptionKey: "erp.modules.hr.description",
      description:
        "Comprehensive HR management including payroll, attendance, and performance tracking.",
      featuresKeys: [
        "erp.modules.hr.feature1",
        "erp.modules.hr.feature2",
        "erp.modules.hr.feature3",
        "erp.modules.hr.feature4",
      ],
      features: [
        "Employee Management",
        "Payroll Processing",
        "Time Tracking",
        "Performance Reviews",
      ],
    },
    {
      titleKey: "erp.modules.accounting.title",
      title: "Accounting",
      icon: "📊",
      descriptionKey: "erp.modules.accounting.description",
      description:
        "Full financial management with automated bookkeeping and reporting.",
      featuresKeys: [
        "erp.modules.accounting.feature1",
        "erp.modules.accounting.feature2",
        "erp.modules.accounting.feature3",
        "erp.modules.accounting.feature4",
      ],
      features: [
        "General Ledger",
        "Invoicing",
        "Tax Management",
        "Financial Reports",
      ],
    },
    {
      titleKey: "erp.modules.dashboard.title",
      title: "Dashboard",
      icon: "📈",
      descriptionKey: "erp.modules.dashboard.description",
      description:
        "Real-time business intelligence with customizable KPI dashboards.",
      featuresKeys: [
        "erp.modules.dashboard.feature1",
        "erp.modules.dashboard.feature2",
        "erp.modules.dashboard.feature3",
        "erp.modules.dashboard.feature4",
      ],
      features: [
        "Real-time Analytics",
        "Custom Reports",
        "KPI Tracking",
        "Mobile Access",
      ],
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      titleKey: "erp.workflow.step1.title",
      title: "Collect Information",
      descriptionKey: "erp.workflow.step1.description",
      description:
        "The sales department quotes for the order and schedule delivery date with the customers.",
      icon: "📋",
    },
    {
      step: "02",
      titleKey: "erp.workflow.step2.title",
      title: "Planning",
      descriptionKey: "erp.workflow.step2.description",
      description:
        "Production team starts planning base on current workload, raw material inventory and purchasing schedule.",
      icon: "📅",
    },
    {
      step: "03",
      titleKey: "erp.workflow.step3.title",
      title: "Confirm Timeline",
      descriptionKey: "erp.workflow.step3.description",
      description:
        "Once the delivery date is planned out, the sales department will confirm the delivery date and the order with the customers.",
      icon: "✅",
    },
    {
      step: "04",
      titleKey: "erp.workflow.step4.title",
      title: "Set up Production",
      descriptionKey: "erp.workflow.step4.description",
      description:
        "Manufacturing department creates production orders (Manufacturing Order) and makes Purchase Request to buy raw materials.",
      icon: "🏭",
    },
    {
      step: "05",
      titleKey: "erp.workflow.step5.title",
      title: "Prepare Raw Materials",
      descriptionKey: "erp.workflow.step5.description",
      description:
        "Purchasing department contacts the suppliers for raw materials and makes sure the stock is ready in the warehouse at the start of the production order.",
      icon: "📦",
    },
    {
      step: "06",
      titleKey: "erp.workflow.step6.title",
      title: "Inline Quality Control",
      descriptionKey: "erp.workflow.step6.description",
      description:
        "The QC department will inspect the quality of raw materials before entering the main warehouse. It's also responsible for checking product quality at each production stage.",
      icon: "🔍",
    },
    {
      step: "07",
      titleKey: "erp.workflow.step7.title",
      title: "Final Check",
      descriptionKey: "erp.workflow.step7.description",
      description:
        "After the finished products are manufactured, the QC department will check the final products. If there is any error, it will be sent back to the production.",
      icon: "✔️",
    },
    {
      step: "08",
      titleKey: "erp.workflow.step8.title",
      title: "Deliver",
      descriptionKey: "erp.workflow.step8.description",
      description:
        "Finished goods are stored in the finished product warehouse and wait for delivery.",
      icon: "🚚",
    },
  ];

  return (
    <div className="min-h-screen w-full relative bg-background">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(245, 158, 11, 0.06), transparent 60%), #ffffff",
        }}
      />

      {/* Header */}
      <header
        className={`sticky top-4 z-[9999] mx-auto flex w-full flex-row items-center justify-between self-start rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 ${
          isScrolled ? "max-w-3xl px-2" : "max-w-5xl px-4"
        } py-2`}
      >
        <Link
          className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 ${
            isScrolled ? "ml-4" : ""
          }`}
          href="/"
        >
          <img src="/logo.svg" alt="Tokenist" className="h-8 w-8" />
        </Link>

        <div className="flex items-center gap-4">
          <BackButton />
          <Link
            href="/contact"
            className="mr-2 rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-4 py-2 text-sm"
          >
            <Trans>Get ERP Consultation</Trans>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-4 py-20 md:py-32">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700 border border-amber-200">
            <span className="text-lg">⚡</span>
            <Trans>Powered by Odoo Framework</Trans>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
              <Trans>Enterprise Resource Planning</Trans>
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground md:text-xl">
            <Trans>
              Complete ERP solutions built on Odoo framework to streamline your
              business operations. From sales to manufacturing, we provide
              integrated solutions that grow with your business.
            </Trans>
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-lg bg-gradient-to-b from-primary to-primary/80 px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <Trans>Start Your ERP Journey</Trans>
            </Link>
            <Link
              href="#modules"
              className="rounded-lg border border-border px-8 py-4 text-lg font-semibold text-foreground hover:bg-background/50 transition-colors"
            >
              <Trans>Explore Modules</Trans>
            </Link>
          </div>
        </div>
      </section>

      {/* How ERP Works Section */}
      <section className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              <Trans>How Does An ERP Work?</Trans>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              <Trans>
                ERP integrates all of your business processes into one unified
                system, enabling real-time data sharing and streamlined
                operations across departments.
              </Trans>
            </p>
          </div>

          <div className="relative">
            {/* Module Cards arranged in circle */}
            <div className="relative w-full h-[400px] md:h-[700px]">
              <Image
                src="/erp-circle.png"
                alt="ERP Circle"
                className="m-auto"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ERP Modules Grid */}
      <section
        id="modules"
        className="relative z-10 px-4 py-20 bg-background/50"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              <Trans>Complete ERP Modules</Trans>
            </h2>
            <p className="text-lg text-muted-foreground">
              <Trans>
                Integrated business applications that work seamlessly together
              </Trans>
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {erpModules.map((module, index) => (
              <div
                key={module.title}
                className="group rounded-2xl border border-border bg-card p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    <Trans>{module.title}</Trans>
                  </h3>
                </div>

                <p className="mb-6 text-muted-foreground">
                  <Trans>{module.description}</Trans>
                </p>

                <ul className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      <Trans>{feature}</Trans>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Workflow Journey */}
      <section className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              <Trans>ERP Workflow Journey</Trans>
            </h2>
            <p className="text-lg text-muted-foreground">
              <Trans>
                From order to delivery - see how our ERP system streamlines your
                entire business process
              </Trans>
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary hidden md:block"></div>

            <div className="space-y-12">
              {workflowSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="relative flex items-start gap-8"
                >
                  {/* Step number circle */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-2xl border border-border bg-card p-8 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl shrink-0">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          <Trans>{step.title}</Trans>
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          <Trans>{step.description}</Trans>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our ERP */}
      <section className="relative z-10 px-4 py-20 bg-background/50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              <Trans>Why Choose Our Odoo-Based ERP?</Trans>
            </h2>
            <p className="text-lg text-muted-foreground">
              <Trans>
                Built on the world's most popular open-source ERP platform
              </Trans>
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-lg">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                  🚀
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                <Trans>Rapid Implementation</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>
                  Get up and running quickly with our proven implementation
                  methodology and pre-configured modules.
                </Trans>
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-lg">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl">
                  🔧
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                <Trans>Fully Customizable</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>
                  Tailor every aspect of the system to match your unique
                  business processes and requirements.
                </Trans>
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-lg">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-3xl">
                  💰
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                <Trans>Cost Effective</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>
                  No licensing fees, lower total cost of ownership, and
                  transparent pricing structure.
                </Trans>
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-lg">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl">
                  📱
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                <Trans>Mobile Ready</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>
                  Access your ERP system anywhere, anytime with responsive
                  design and mobile apps.
                </Trans>
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-lg">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl">
                  🔒
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                <Trans>Enterprise Security</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>
                  Bank-level security with role-based access control and data
                  encryption.
                </Trans>
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-lg">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-3xl">
                  🌐
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                <Trans>Global Community</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>
                  Benefit from the largest ERP community with thousands of apps
                  and integrations.
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-6">
            <Trans>Ready to Transform Your Business?</Trans>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            <Trans>
              Let's discuss how our Odoo-based ERP solutions can streamline your
              operations and accelerate your business growth.
            </Trans>
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-lg bg-gradient-to-b from-primary to-primary/80 px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <Trans>Schedule Free Consultation</Trans>
            </Link>
            <Link
              href="mailto:info@tokenist.com"
              className="rounded-lg border border-border px-8 py-4 text-lg font-semibold text-foreground hover:bg-background/50 transition-colors"
            >
              <Trans>Email Us</Trans>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* Sticky Footer */}
      <StickyFooter />
    </div>
  );
}
