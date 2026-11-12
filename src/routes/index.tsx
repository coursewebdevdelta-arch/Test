import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building,
  Building2,
  Check,
  ChevronDown,
  Clock3,
  FileBadge,
  FileText,
  Gavel,
  GraduationCap,
  Handshake,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scale,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import advocatePortrait from "@/assets/shashank-shekhar-tripathi-portrait.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Advocate Shashank Shekhar Tripathi | High Court & Supreme Court Legal Counsel" },
      {
        name: "description",
        content:
          "Advocate Shashank Shekhar Tripathi – Enrolled with Bar Council of Uttar Pradesh. Active practice across Allahabad High Court (Lucknow Bench), Supreme Court of India & Delhi NCR in Civil & Commercial Litigation, Arbitration, Cyber Law, Corporate Compliance & Service Matters.",
      },
      {
        name: "keywords",
        content:
          "Advocate Shashank Shekhar Tripathi, Lawyer Shashank Shekhar Tripathi, Advocate in Lucknow, High Court Lawyer Lucknow, Supreme Court Advocate Delhi, Cyber Lawyer Lucknow, Arbitration Counsel Delhi NCR, Bar Council of Uttar Pradesh, Civil Commercial Litigation, CAT Principal Bench New Delhi, Debt Recovery Tribunal DRT, Corporate Compliance Lawyer",
      },
      { name: "author", content: "Advocate Shashank Shekhar Tripathi" },
      { name: "google-site-verification", content: "01PzcyCigHokBIbzPebmvLimVRCjWiF7WRqBCGoSN2I" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "geo.region", content: "IN-UP" },
      { name: "geo.placename", content: "Lucknow, Delhi NCR" },
      { property: "og:url", content: "https://test-snowy-one-63.vercel.app/" },
      { property: "og:title", content: "Advocate Shashank Shekhar Tripathi | Legal Counsel & Advocate" },
      {
        property: "og:description",
        content:
          "Enrolled with Bar Council of Uttar Pradesh. Practice across Allahabad High Court (Lucknow Bench), Supreme Court & Delhi NCR in Civil & Commercial Litigation, Arbitration, Cyber Law & Corporate Compliance.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: "https://test-snowy-one-63.vercel.app/assets/shashank-shekhar-tripathi-portrait.jpeg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Advocate Shashank Shekhar Tripathi | Legal Counsel" },
      {
        name: "twitter:description",
        content:
          "Advocate practicing in Delhi NCR and Lucknow across High Court, Supreme Court, and tribunals.",
      },
      { name: "twitter:image", content: "https://test-snowy-one-63.vercel.app/assets/shashank-shekhar-tripathi-portrait.jpeg" },
    ],
    links: [
      { rel: "canonical", href: "https://test-snowy-one-63.vercel.app/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: PortfolioPage,
});

const practiceAreas = [
  {
    number: "01",
    title: "Civil Laws",
    description:
      "We provides comprehensive legal services to our clients under litigation of civil laws including money recovery, recovery disputes, suits related to children, wards, guardianships, estate, property, custody, execution, claims, partitions and various petitions etc.",
    icon: Scale,
  },
  {
    number: "02",
    title: "Criminal Laws",
    description:
      "We have been successfully handling various types of criminal matters for our various individual clients as well as for corporate clients especially in the following matters pertaining to Criminal Misappropriation of funds, Criminal Breach of Trust and criminal conspiracy etc.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Family Laws",
    description:
      "When matrimonial dispute arises between parties to marriage, it brings number of litigations with it. It includes civil as well as criminal litigation and involves civil laws, family laws, matrimonial laws as well as criminal law. Criminal complaint Under section 498A...",
    icon: Users,
  },
  {
    number: "04",
    title: "Consumer Laws",
    description:
      "We provide comprehensive legal service covering the entire area of operation of companies including Company Formation and Corporate Approvals; Secretarial Compliances, Joint Venture, Wholly Owned Subsidiaries and Holding Companies; Mergers and Acquisitions.",
    icon: ShoppingBag,
  },
  {
    number: "05",
    title: "Corporate Laws",
    description:
      "We provide comprehensive legal service covering the entire area of operation of companies including Company Formation and Corporate Approvals; Secretarial Compliances, Joint Venture, Wholly Owned Subsidiaries and Holding Companies etc.",
    icon: Building2,
  },
  {
    number: "06",
    title: "Cyber Laws",
    description:
      "We provide comprehensive legal Services to our clients to protect from the cyber crimes and remedy, if they are victim of hacking, phishing, and other mode of cyber crimes. The Information Technology Act has been passed to give effect to the UN resolution...",
    icon: ShieldAlert,
  },
  {
    number: "07",
    title: "Banking & Insurance Laws",
    description:
      "Keeping in line with the international trends on helping financial institutions to recover their bad Debt quickly and effeciently, the Government of India has constituted thirty three Debt Recovery Tribunal and five Debt Recovery...",
    icon: Landmark,
  },
  {
    number: "08",
    title: "Trademark & Copyright Laws",
    description:
      "The objective of the Trade Marks Act, 1999 is to register trademarks applied for in the country and to provide for better protection of trade mark for goods and services and also to prevent fraudulent use of the mark.",
    icon: FileBadge,
  },
  {
    number: "09",
    title: "Supreme Court Practice",
    description:
      "The Firm has very vide and Comprehensive experience of dealing with Supreme Court Cases. More than half of our practice is comprises of Supreme Court Cases. We Provide Special Leave Petition (Civil) under Art.",
    icon: Gavel,
  },
  {
    number: "10",
    title: "Real Estate & Infrastructure Laws",
    description:
      "Our Firm provides comprehensive services in all aspect of property and real estate transactions including advising and drafting deeds and reports on title, purchase, sale, leasing, tenancy, licensing, construction, development..",
    icon: Building,
  },
  {
    number: "11",
    title: "Labour & Industrial Laws",
    description:
      "Our Firm offers comprehensive services on all aspects relating to labour and employment Laws in India, including advise on various formalities that have to be compiled with, litigation, negotiation, and collective bargaining.",
    icon: BriefcaseBusiness,
  },
  {
    number: "12",
    title: "Arbitration & Conciliation",
    description:
      "The Indian Arbitration and Conciliation Act, 1996 the governing arbitration statute in India. It is based on the Model Law on International Commercial Arbitration adopted by the United Nations Commission on International Trade..",
    icon: Handshake,
  },
  {
    number: "13",
    title: "Service Laws & CAT Practice",
    description:
      "We also practice service law and frequently use to appear before Principle Bench of CAT at New Delhi. We have also appeared before CAT against UPSC, DoPT, Ministry of Home, Ministry of Finance, MCD, Delhi Government..",
    icon: FileText,
  },
  {
    number: "14",
    title: "Commercial Agreements & Contracts",
    description:
      "Besides legal consulting and litigation services we provide various other legal services including Documentation, execution and their registration with the concerned authority. Services include individual Clients & corporate..",
    icon: FileText,
  },
  {
    number: "15",
    title: "Incorporation of Companies",
    description:
      "The Corporate team of the firm is well equipped and has a vide expertise in dealing with the matters related to law of Trust and Societies, Partnerships, company laws, Registration & Incorporation services, Drafting of Corporate agreements, commercial contracts, Deeds..",
    icon: Building2,
  },
];

const steps = [
  {
    title: "Share the details",
    description: "Send the notice, contract, order, or papers and a summary of your matter.",
  },
  {
    title: "Initial consultation",
    description: "Discuss the factual background and statutory framework in person or via video.",
  },
  {
    title: "Strategic legal roadmap",
    description: "Receive a clear plan covering the right forum, statutory remedies, and expected trajectory.",
  },
  {
    title: "Decisive representation",
    description: "Move forward with methodical preparation, regular briefing, and active court appearances.",
  },
];

const articles = [
  {
    topic: "Cyber law",
    title: "Defending against intricate digital fraud claims and statutory IT liabilities",
    description: "Essential legal and procedural steps when navigating digital financial fraud.",
  },
  {
    topic: "Commercial litigation",
    title: "Managing multi-jurisdictional proceedings and contract disputes",
    description: "Strategic considerations for dispute resolution clauses and forum selection.",
  },
  {
    topic: "Arbitration",
    title: "Key considerations in domestic commercial arbitration and interim relief",
    description: "Navigating section 9 remedies and constitution of the arbitral tribunal.",
  },
];

const contactDetails = {
  email: "Shashank_tripathi08@outlook.com",
  phone: "+91 79051 82151",
  whatsapp: "https://wa.me/917905182151?text=Hello%20Advocate%20Shashank%20Shekhar%20Tripathi%2C%20I%20would%20like%20to%20inquire%20about%20a%20legal%20consultation.",
};

const faqs = [
  {
    question: "Where does Advocate Shashank Shekhar Tripathi practice?",
    answer:
      "Advocate Shashank Shekhar Tripathi maintains an active legal practice across courts, tribunals, and regulatory forums in Delhi NCR and Lucknow, including the High Court of Judicature at Allahabad (Lucknow Bench), Supreme Court of India, District & Sessions Courts, and Central Administrative Tribunal (CAT).",
  },
  {
    question: "What legal matters and practice areas does the chamber handle?",
    answer:
      "The chamber specializes across 15 practice areas, notably Civil & Commercial Litigation, Domestic and International Arbitration, Cyber Law & Digital Fraud Claims, Corporate Regulatory Compliance, Supreme Court Special Leave Petitions (SLP), Real Estate transactions, and Service Law.",
  },
  {
    question: "How can I book a legal consultation?",
    answer:
      "Consultations are arranged by appointment. You can reach out directly via phone or WhatsApp at +91 79051 82151 or by email at Shashank_tripathi08@outlook.com to share brief details of your matter and schedule an in-person or video conference.",
  },
  {
    question: "What qualifications and bar enrollments does Advocate Shashank Shekhar Tripathi hold?",
    answer:
      "He is an Advocate enrolled with the Bar Council of Uttar Pradesh. His academic qualifications include BA LLB from New Law College (NLC) Pune, Master of Laws (LLM) from SRMU Lucknow, and a Diploma in Cyber Laws from the Asian School of Cyber Laws.",
  },
  {
    question: "Are virtual or online consultations available for outstation clients?",
    answer:
      "Yes. Virtual consultations via video conference and phone are regularly conducted for corporate and individual clients located across India or overseas needing representation before Indian courts and arbitral tribunals.",
  },
];

const legalPracticeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LegalService", "Attorney"],
      "@id": "https://test-snowy-one-63.vercel.app/#attorney",
      url: "https://test-snowy-one-63.vercel.app/",
      name: "Advocate Shashank Shekhar Tripathi",
      alternateName: ["Shashank Shekhar Tripathi", "Advocate S.S. Tripathi"],
      description:
        "Advocate enrolled with the Bar Council of Uttar Pradesh, maintaining an active practice across courts, tribunals, and regulatory forums in Delhi NCR and Lucknow. Specializing in Civil & commercial litigation, Arbitration, cyber law, and corporate regulatory compliance.",
      telephone: "+917905182151",
      email: "Shashank_tripathi08@outlook.com",
      image: "https://test-snowy-one-63.vercel.app/assets/shashank-shekhar-tripathi-portrait.jpeg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "City", name: "Lucknow" },
        { "@type": "AdministrativeArea", name: "Delhi NCR" },
        { "@type": "State", name: "Uttar Pradesh" },
        { "@type": "Country", name: "India" },
      ],
      knowsLanguage: ["English", "Hindi"],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "New Law College (NLC), Pune",
          description: "BA LLB",
        },
        {
          "@type": "EducationalOrganization",
          name: "Shri Ramswaroop Memorial University (SRMU), Lucknow",
          description: "LLM",
        },
        {
          "@type": "EducationalOrganization",
          name: "Asian School of Cyber Laws (ASCL)",
          description: "Diploma in Cyber Laws",
        },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional License",
          name: "Advocate License",
          recognizedBy: {
            "@type": "Organization",
            name: "Bar Council of Uttar Pradesh",
          },
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Areas of Legal Practice",
        itemListElement: practiceAreas.map((area) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: area.title,
            description: area.description,
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://test-snowy-one-63.vercel.app/#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  useEffect(() => {
    try {
      setDisclaimerOpen(window.localStorage.getItem("sst-portfolio-disclaimer") !== "accepted");
    } catch {
      setDisclaimerOpen(true);
    }
  }, []);

  const acceptDisclaimer = () => {
    try {
      window.localStorage.setItem("sst-portfolio-disclaimer", "accepted");
    } catch {
      // The notice still closes if browser storage is unavailable.
    }
    setDisclaimerOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalPracticeSchema) }}
      />
      <div className="notice-bar">
        <div className="site-shell notice-inner">
          <span><MapPin aria-hidden="true" /> Bar Council of Uttar Pradesh | Delhi NCR &amp; Lucknow</span>
          <div className="notice-links">
            <a href={`mailto:${contactDetails.email}`}><Mail aria-hidden="true" /> {contactDetails.email}</a>
            <a href={contactDetails.whatsapp} target="_blank" rel="noreferrer"><Phone aria-hidden="true" /> {contactDetails.phone}</a>
            <span><Clock3 aria-hidden="true" /> Consultations by appointment</span>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="site-shell header-inner">
          <a className="brand" href="#main" onClick={closeMenu} aria-label="Advocate Shashank Shekhar Tripathi, home">
            <span className="brand-mark"><Scale aria-hidden="true" /></span>
            <span className="brand-copy"><strong>Shashank Shekhar Tripathi</strong><small>ADVOCATE &amp; LEGAL COUNSEL</small></span>
          </a>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
          <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
            <a href="#main" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#practice" onClick={closeMenu}>Practice areas <ChevronDown aria-hidden="true" /></a>
            <a href="#faq" onClick={closeMenu}>FAQs</a>
            <a href="#insights" onClick={closeMenu}>Insights</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <Button asChild className="nav-cta">
              <a href={contactDetails.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" /> Book a consultation
              </a>
            </Button>
          </nav>
        </div>
      </header>

      <section className="hero-section">
        <div className="site-shell hero-layout">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow"><span /> ENROLLED ADVOCATE · BAR COUNCIL OF UTTAR PRADESH</div>
            <h1>Advocate<br />Shashank Shekhar <em>Tripathi</em></h1>
            <p className="hero-subtitle">Methodical statutory analysis. <span>Defensible legal strategy.</span></p>
            <p className="hero-description">
              Active practice across courts, tribunals, and regulatory forums in Delhi NCR and Lucknow. Specializing in Civil &amp; commercial litigation, Arbitration, cyber law, and corporate regulatory compliance.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg" className="gold-button">
                <a href={contactDetails.whatsapp} target="_blank" rel="noreferrer">Book a consultation <ArrowRight aria-hidden="true" /></a>
              </Button>
              <a className="text-action" href={`mailto:${contactDetails.email}`}><Mail aria-hidden="true" /> Get in touch</a>
            </div>
            <a className="hero-scroll" href="#practice"><span>SCROLL TO EXPLORE</span><ArrowDown aria-hidden="true" /></a>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-frame" />
            <img
              className="hero-portrait"
              src={advocatePortrait}
              alt="Portrait of Advocate Shashank Shekhar Tripathi"
              width={572}
              height={1024}
              fetchPriority="high"
            />
            <div className="portrait-caption"><span className="caption-mark">SST</span><span><strong>Advocate Shashank Shekhar Tripathi</strong><small>Delhi NCR &amp; Lucknow</small></span></div>
            <div className="portrait-seal"><Scale aria-hidden="true" /><span>COUNSEL<br />&amp; ADVOCATE</span></div>
          </div>
        </div>
        <div className="hero-watermark" aria-hidden="true">JUSTICE</div>
      </section>

      <section className="credentials-section" aria-label="Professional overview">
        <div className="site-shell credentials-grid">
          <div className="credential"><span className="credential-icon"><Scale aria-hidden="true" /></span><span><strong>Bar Council of UP</strong><small>Enrolled Advocate</small></span></div>
          <div className="credential"><span className="credential-icon"><Building2 aria-hidden="true" /></span><span><strong>Delhi NCR &amp; Lucknow</strong><small>Courts, tribunals &amp; forums</small></span></div>
          <div className="credential"><span className="credential-icon"><GraduationCap aria-hidden="true" /></span><span><strong>Qualifications</strong><small>BA LLB · LLM · Cyber Laws</small></span></div>
          <div className="credential"><span className="credential-icon"><MessageCircle aria-hidden="true" /></span><span><strong>Hindi &amp; English</strong><small>Consultations by appointment</small></span></div>
        </div>
      </section>

      <section className="practice-section section-pad" id="practice">
        <div className="site-shell">
          <div className="section-heading">
            <div><div className="eyebrow"><span /> AREAS OF PRACTICE</div><h2>Legal matters I <em>handle</em></h2></div>
            <p>Each matter deserves close attention, sound advice, and a plan shaped around the facts.</p>
          </div>
          <div className="practice-grid">
            {practiceAreas.map(({ number, title, description, icon: Icon }) => (
              <article className="practice-item" key={number}>
                <div className="practice-top"><span>{number}</span><Icon aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#contact" aria-label={`Ask about ${title}`}>Discuss this matter <ArrowRight aria-hidden="true" /></a>
              </article>
            ))}
          </div>
          <a className="section-link" href="#contact">Discuss your matter <ArrowRight aria-hidden="true" /></a>
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="site-shell about-layout">
          <div className="about-photo-wrap">
            <img src={advocatePortrait} alt="Portrait of Advocate Shashank Shekhar Tripathi" width={572} height={1024} loading="lazy" />
            <div className="about-photo-note"><Scale aria-hidden="true" /><span>Statutory analysis &amp;<br />risk mitigation</span></div>
          </div>
          <div className="about-copy">
            <div className="eyebrow"><span /> ABOUT THE ADVOCATE</div>
            <h2>Methodical analysis.<br /><em>Defensible strategy.</em></h2>
            <p className="about-lead">
              I am an Advocate enrolled with the Bar Council of Uttar Pradesh, maintaining an active practice across courts, tribunals, and regulatory forums in Delhi NCR and Lucknow. My work sits at the intersection of Civil &amp; commercial litigation, Arbitration, cyber law, and corporate regulatory compliance.
            </p>
            <p>
              Helping organizations and individuals navigate high-stakes disputes and evolving statutory frameworks.
            </p>
            <p>
              With hands-on experience managing complex litigation portfolios, coordinating multi-jurisdictional proceedings, and briefing Senior Advocates, I approach every matter with methodical statutory analysis and a focus on practical risk mitigation. Whether defending against intricate digital fraud claims, structuring commercial contracts, or advising on regulatory exposure, my objective is to deliver clear, defensible legal strategy at every stage of a dispute.
            </p>
            <ul className="about-points">
              <li><GraduationCap aria-hidden="true" /> <strong>BA LLB</strong> – NLC Pune</li>
              <li><GraduationCap aria-hidden="true" /> <strong>LLM</strong> – SRMU Lucknow</li>
              <li><GraduationCap aria-hidden="true" /> <strong>Diploma in Cyber Laws</strong> – Asian School of Cyber Laws</li>
            </ul>
            <a className="section-link" href="#contact">About the practice <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="courts-section section-pad">
        <div className="site-shell courts-layout">
          <div className="courts-intro">
            <div className="eyebrow"><span /> COURTS &amp; JURISDICTION</div>
            <h2>Where I <em>appear</em></h2>
            <p>Active practice across Delhi NCR and Lucknow, appearing before High Courts, district courts, tribunals, and regulatory authorities.</p>
            <a className="section-link" href="#contact">Get in touch <ArrowRight aria-hidden="true" /></a>
          </div>
          <div className="court-list">
            <div><span className="court-icon"><Building2 aria-hidden="true" /></span><span><strong>High Courts &amp; Appellate Forums</strong><small>Allahabad High Court (Lucknow Bench) &amp; Delhi High Court</small></span><ArrowUpRight aria-hidden="true" /></div>
            <div><span className="court-icon"><Scale aria-hidden="true" /></span><span><strong>District &amp; Sessions Courts</strong><small>Civil, commercial, and criminal proceedings across Delhi NCR &amp; Lucknow</small></span><ArrowUpRight aria-hidden="true" /></div>
            <div><span className="court-icon"><BriefcaseBusiness aria-hidden="true" /></span><span><strong>Tribunals &amp; Regulatory Forums</strong><small>Commercial arbitration, NCLT, and cyber regulatory authorities</small></span><ArrowUpRight aria-hidden="true" /></div>
          </div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="site-shell">
          <div className="process-heading"><div className="eyebrow"><span /> THE PROCESS</div><h2>How a matter <em>starts</em></h2><p>A straightforward first step, followed by a plan you can understand.</p></div>
          <div className="process-grid">
            {steps.map((step, index) => (
              <article className="process-item" key={step.title}>
                <span className="step-number">0{index + 1}</span><div className="step-rule" />
                <h3>{step.title}</h3><p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="insights-section section-pad" id="insights">
        <div className="site-shell">
          <div className="section-heading">
            <div><div className="eyebrow"><span /> FROM THE JOURNAL</div><h2>Notes on the <em>law</em></h2></div>
            <p>Plain-language introductions to common questions. General information only, not legal advice.</p>
          </div>
          <div className="articles-grid">
            {articles.map((article, index) => (
              <article className="article-item" key={article.title}>
                <div className="article-meta"><span>{article.topic}</span><span>0{index + 1} / 03</span></div>
                <h3>{article.title}</h3><p>{article.description}</p>
                <a href="#contact" aria-label={`Ask a question about ${article.topic}`}>Read note <ArrowUpRight aria-hidden="true" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section section-pad" id="faq">
        <div className="site-shell">
          <div className="section-heading">
            <div><div className="eyebrow"><span /> FREQUENTLY ASKED QUESTIONS</div><h2>Common legal <em>queries</em></h2></div>
            <p>Practical guidance on jurisdiction, consultations, and legal proceedings before courts and tribunals.</p>
          </div>
          <div className="faq-wrap">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`faq-${index}`} key={faq.question} className="faq-item">
                  <AccordionTrigger className="faq-trigger">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="faq-content">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="site-shell contact-layout">
          <div className="contact-copy">
            <div className="eyebrow"><span /> GET IN TOUCH</div>
            <h2>Talk through<br />your <em>matter.</em></h2>
            <p>Start with a short message or email. Share a little about your matter and arrange a time to speak.</p>
            <div className="contact-actions">
              <Button asChild size="lg" className="gold-button"><a href={contactDetails.whatsapp} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Message on WhatsApp</a></Button>
              <Button asChild size="lg" variant="outline" className="contact-email bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"><a href={`mailto:${contactDetails.email}`}><Mail aria-hidden="true" /> Send an email</a></Button>
            </div>
          </div>
          <div className="contact-details">
            <div><span><Mail aria-hidden="true" /></span><small>EMAIL</small><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></div>
            <div><span><Phone aria-hidden="true" /></span><small>PHONE / WHATSAPP</small><a href={contactDetails.whatsapp} target="_blank" rel="noreferrer">{contactDetails.phone}</a></div>
            <div><span><MapPin aria-hidden="true" /></span><small>LOCATION</small><p>Delhi NCR &amp; Lucknow<br />Uttar Pradesh, India</p></div>
            <div><span><Clock3 aria-hidden="true" /></span><small>AVAILABILITY</small><p>Monday to Saturday<br />By appointment</p></div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-shell footer-main">
          <a className="brand footer-brand" href="#main"><span className="brand-mark"><Scale aria-hidden="true" /></span><span className="brand-copy"><strong>Shashank Shekhar Tripathi</strong><small>ADVOCATE &amp; LEGAL COUNSEL</small></span></a>
          <p>Enrolled with Bar Council of Uttar Pradesh<br />Delhi NCR &amp; Lucknow</p>
          <nav aria-label="Footer navigation"><a href="#about">About</a><a href="#practice">Practice</a><a href="#faq">FAQs</a><a href="#insights">Insights</a><a href="#contact">Contact</a></nav>
          <a className="back-top" href="#main">Back to top <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="site-shell footer-bottom"><span>© {new Date().getFullYear()} Advocate Shashank Shekhar Tripathi.</span><button type="button" onClick={() => setDisclaimerOpen(true)}>Legal disclaimer</button><span>For general information only · Not legal advice</span></div>
      </footer>

      {disclaimerOpen && (
        <div className="disclaimer-backdrop" role="presentation">
          <section className="disclaimer-dialog" role="dialog" aria-modal="true" aria-labelledby="disclaimer-title" aria-describedby="disclaimer-copy">
            <div className="eyebrow"><span /> PLEASE READ</div>
            <h2 id="disclaimer-title">A note before you continue</h2>
            <div id="disclaimer-copy" className="disclaimer-copy">
              <p>Welcome to the official legal practice website of Advocate Shashank Shekhar Tripathi, enrolled with the Bar Council of Uttar Pradesh, practicing across courts and tribunals in Delhi NCR and Lucknow.</p>
              <p>As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. This website is meant solely for general informational purposes and does not provide legal advice or create an advocate–client relationship.</p>
            </div>
            <div className="disclaimer-actions">
              <Button type="button" className="gold-button" onClick={acceptDisclaimer}>I understand, continue <ArrowRight aria-hidden="true" /></Button>
              <a href="#contact" onClick={acceptDisclaimer}>Contact the practice</a>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
