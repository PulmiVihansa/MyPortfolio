"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Lora } from "next/font/google";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Building2,
  CalendarDays,
  ExternalLink,
  X,
} from "lucide-react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["600", "700"],
});

type Certificate = {
  title: string;
  issuer: string;
  year: string;
  image: string;
  link: string;
};

const certificates: Certificate[] = [
  {
    title: "AI/ML Engineer - Stage 1",
    issuer: "SLIIT",
    year: "2026",
    image: "/images/AL ML STAGE 1.jpg",
    link: "#",
  },
  {
    title: "AI/ML Engineer - Stage 2",
    issuer: "SLIIT",
    year: "2026",
    image: "/images/AL ML STAGE 2.jpg",
    link: "#",
  },
  {
    title: "Python Programming",
    issuer: "University of Moratuwa",
    year: "2022",
    image: "/images/python.jpg",
    link: "#",
  },
  {
    title: "MongoDB Python Developer Path",
    issuer: "MongoDB University",
    year: "2026",
    image: "/images/MongoDB Python.jpg",
    link: "#",
  },
  {
    title: "MongoDB Data Modeling Path",
    issuer: "MongoDB University",
    year: "2026",
    image: "/images/MongoDB Data Modeling Path.jpg",
    link: "#",
  },
  {
    title: "Introduction to Career Skills in Data Analytics",
    issuer: "LinkedIn Learning",
    year: "2025",
    image: "/images/Career Skills in Data Analytics.jpg",
    link: "#",
  },
 
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("certificate-modal-toggle", {
        detail: { open: Boolean(selectedCertificate) },
      })
    );

    return () => {
      window.dispatchEvent(
        new CustomEvent("certificate-modal-toggle", {
          detail: { open: false },
        })
      );
    };
  }, [selectedCertificate]);

  return (
    <section
      id="certificates"
      className="relative min-h-screen w-full overflow-hidden px-6 py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#8B6FD6]/200 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl text-white">
        <div className="relative mb-20 text-center animate-fadeInUp">
          <span className="absolute inset-x-0 top-1/2 -z-8 flex -translate-y-1/2 justify-center gap-65">
            <span className="h-[4px] w-9 bg-[#8B6FD6]/40" />
            <span className="h-[4px] w-9 bg-[#8B6FD6]/40" />
          </span>

          <h4
            className={`text-4xl font-extrabold tracking-wide md:text-3xl lg:text-4xl ${lora.className}`}
          >
            <span className="text-[#8B6FD6]">Certificates</span>
          </h4>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {certificates.map((certificate) => (
            <CertificateCard
              key={`${certificate.title}-${certificate.issuer}`}
              certificate={certificate}
              onView={() => setSelectedCertificate(certificate)}
            />
          ))}
        </motion.div>
      </div>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
}

function CertificateCard({
  certificate,
  onView,
}: {
  certificate: Certificate;
  onView: () => void;
}) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative flex h-[220px] flex-col overflow-hidden rounded-3xl border border-[#8B6FD6]/20 bg-[#2A2A35]/60 px-4 pb-3 pt-4 text-center shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[#8B6FD6]/60 hover:shadow-[0_25px_50px_rgba(139,111,214,0.35)] sm:h-[232px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#8B6FD6]/15 via-transparent to-[#3b2a6f]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 mx-auto mb-2.5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#8B6FD6]/40 bg-[#1b1538]/80 text-[#B79CED] shadow-[0_0_20px_rgba(139,111,214,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_32px_rgba(139,111,214,0.48)]">
        <Award className="h-5 w-5" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="mb-2 flex flex-col items-center gap-1.5">
          <BadgeCheck className="h-4 w-4 shrink-0 text-[#8B6FD6]" />
          <h3 className="flex min-h-10 items-center text-base font-bold leading-snug text-white sm:text-lg">
            {certificate.title}
          </h3>
        </div>

        <div className="space-y-1.5 text-xs text-gray-300 sm:text-sm">
          <div className="flex items-center justify-center gap-3">
            <Building2 className="h-3.5 w-3.5 text-[#8B6FD6]" />
            <span>{certificate.issuer}</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <CalendarDays className="h-3.5 w-3.5 text-[#8B6FD6]" />
            <span>Issued {certificate.year}</span>
          </div>
        </div>

        <div className="mt-auto pt-4">
          <button
            type="button"
            onClick={onView}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#5A3EC8] px-5 py-2 text-xs font-bold text-white shadow-[0_0_20px_rgba(139,111,214,0.35)] transition-all duration-300 hover:bg-white hover:text-[#8B6FD6] hover:shadow-[0_0_30px_rgba(139,111,214,0.55)] sm:text-sm"
          >
            View Credential
            <ExternalLink className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function CertificateModal({
  certificate,
  onClose,
}: {
  certificate: Certificate | null;
  onClose: () => void;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [certificate?.image]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          className="fixed inset-0 z-[100200] flex min-h-screen items-center justify-center bg-black/85 px-4 py-8 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-[#8B6FD6]/40 bg-[#111018] shadow-[0_0_60px_rgba(139,111,214,0.45)]"
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 18 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate modal"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#8B6FD6] hover:shadow-[0_0_25px_rgba(139,111,214,0.45)]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="border-b border-[#8B6FD6]/20 bg-[#2A2A35]/70 px-6 py-5 backdrop-blur-md">
              <h3 className="pr-12 text-xl font-bold text-white">
                {certificate.title}
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                {certificate.issuer} - {certificate.year}
              </p>
            </div>

            <div className="relative flex min-h-[360px] items-center justify-center bg-black/40 p-4 sm:p-6">
              {!imageFailed ? (
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  width={1400}
                  height={1000}
                  sizes="(max-width: 768px) 94vw, 1000px"
                  className="h-auto max-h-[85vh] w-auto max-w-full rounded-xl object-contain object-center shadow-2xl"
                  onError={() => setImageFailed(true)}
                />
              ) : (
                <div className="h-[420px] w-full max-w-3xl overflow-hidden rounded-xl">
                  <CertificateFallback
                    title={certificate.title}
                    issuer={certificate.issuer}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CertificateFallback({
  title,
  issuer,
}: {
  title: string;
  issuer: string;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#2A2A35] via-[#1b1538] to-[#0a0a0a] px-8 text-center">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-[#8B6FD6]/35 bg-white/5 text-[#B79CED] shadow-[0_0_35px_rgba(139,111,214,0.28)]">
        <Award className="h-10 w-10" />
      </div>
      <p className="text-lg font-bold text-white">{title}</p>
      <p className="mt-2 text-sm text-[#8B6FD6]">{issuer}</p>
    </div>
  );
}
