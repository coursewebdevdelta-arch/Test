import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  Clock3,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import advocatePortrait from "@/assets/sample-advocate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arjun Mehra | Advocate & Legal Counsel" },
      {
        name: "description",
        content:
          "Meet Advocate Arjun Mehra, a sample independent legal practice serving Lucknow and the surrounding region.",
      },
      { property: "og:title", content: "Arjun Mehra | Advocate & Legal Counsel" },
      {
        property: "og:description",
        content: "A considered legal practice in Lucknow. Sample portfolio website.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
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
    title: "Criminal defence & bail",
    description:
      "Clear guidance through urgent criminal matters, bail applications, and trial preparation.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Property & land disputes",
    description:
      "Thoughtful representation in title, possession, partition, and land-record matters.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Family & matrimonial law",
    description:
      "Practical advice for divorce, maintenance, custody, and family court proceedings.",
    icon: Scale,
  },
  {
    number: "04",
    title: "Service & employment",
    description:
      "Support with departmental proceedings, promotions, pensions, and public employment.",
    icon: BriefcaseBusiness,
  },
  {
    number: "05",
    title: "Writ petitions",
    description:
      "Constitutional remedies for unlawful decisions and inaction by public authorities.",
    icon: ArrowUpRight,
  },
  {
    number: "06",
    title: "Civil & commercial matters",
    description:
      "Representation in contract disputes, recovery matters, and civil proceedings.",
    icon: Building2,
  },
];

const steps = [
  {
    title: "Share the details",
    description: "Send the notice, order, or papers and a short note about your matter.",
  },
  {
    title: "Have a conversation",
    description: "Meet in person or speak by phone or video at a convenient time.",
  },
  {
    title: "Get a clear plan",
    description: "Understand the next step, the right forum, and the expected fees.",
  },
  {
    title: "Move forward",
    description: "If you choose to proceed, receive updates as the matter progresses.",
  },
];

const articles = [
  {
    topic: "Service law",
    title: "What to do when a departmental order affects your service",
    description: "A practical starting point for understanding available remedies.",
  },
  {
    topic: "Property",
    title: "The first documents to gather for a land dispute",
    description: "A useful checklist before your first legal consultation.",
  },
  {
    topic: "Family matters",
    title: "Preparing for an initial family-law consultation",
    description: "The key facts and records that can help make the meeting useful.",
  },
];

const contactDetails = {
  email: "hello@example.com",
  phone: "Add your phone number",
  whatsapp: "https://wa.me/?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20a%20consultation.",
};

function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  useEffect(() => {
    try {
      setDisclaimerOpen(window.localStorage.getItem("arjun-portfolio-disclaimer") !== "accepted");
    } catch {
      setDisclaimerOpen(true);
    }
  }, []);

  const acceptDisclaimer = () => {
    try {
      window.localStorage.setItem("arjun-portfolio-disclaimer", "accepted");
    } catch {
      // The notice still closes if browser storage is unavailable.
    }
    setDisclaimerOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="main">
      <div className="notice-bar">
        <div className="site-shell notice-inner">
          <span><MapPin aria-hidden="true" /> High Court of Judicature at Allahabad, Lucknow Bench</span>
          <div className="notice-links">
            <a href={`mailto:${contactDetails.email}`}><Mail aria-hidden="true" /> {contactDetails.email}</a>
            <span><Clock3 aria-hidden="true" /> Monday to Saturday, by appointment</span>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="site-shell header-inner">
          <a className="brand" href="#main" onClick={closeMenu} aria-label="Arjun Mehra, home">
            <span className="brand-mark"><Scale aria-hidden="true" /></span>
            <span className="brand-copy"><strong>Arjun Mehra</strong><small>ADVOCATE &amp; LEGAL COUNSEL</small></span>
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
            <div className="eyebrow hero-eyebrow"><span /> INDEPENDENT LEGAL PRACTICE · LUCKNOW</div>
            <h1>Advocate<br />Arjun <em>Mehra</em></h1>
            <p className="hero-subtitle">Thoughtful counsel. <span>Steady representation.</span></p>
            <p className="hero-description">
              Clear, considered legal support for individuals, families, and businesses before the courts and tribunals of Lucknow.
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
              alt="Sample portrait of an advocate in a law chamber"
              width={1024}
              height={1280}
              fetchPriority="high"
            />
            <div className="portrait-caption"><span className="caption-mark">AM</span><span><strong>Advocate Arjun Mehra</strong><small>Lucknow, Uttar Pradesh</small></span></div>
            <div className="portrait-seal"><Scale aria-hidden="true" /><span>COUNSEL<br />&amp; ADVOCATE</span></div>
          </div>
        </div>
        <div className="hero-watermark" aria-hidden="true">JUSTICE</div>
      </section>

      <section className="credentials-section" aria-label="Professional overview">
        <div className="site-shell credentials-grid">
          <div className="credential"><span className="credential-icon"><Scale aria-hidden="true" /></span><span><strong>Independent counsel</strong><small>Personal attention at every step</small></span></div>
          <div className="credential"><span className="credential-icon"><Building2 aria-hidden="true" /></span><span><strong>Lucknow courts</strong><small>High Court and local forums</small></span></div>
          <div className="credential"><span className="credential-icon"><GraduationCap aria-hidden="true" /></span><span><strong>Legal education</strong><small>Add your qualifications here</small></span></div>
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
            <img src={advocatePortrait} alt="Sample advocate portrait in a legal chamber" width={1024} height={1280} loading="lazy" />
            <div className="about-photo-note"><Scale aria-hidden="true" /><span>Careful preparation<br />at every stage</span></div>
          </div>
          <div className="about-copy">
            <div className="eyebrow"><span /> ABOUT THE ADVOCATE</div>
            <h2>Careful preparation.<br /><em>Clear advice.</em></h2>
            <p className="about-lead">A legal matter can feel uncertain. My role is to listen carefully, explain your options plainly, and prepare each step with care.</p>
            <p>I practise before the High Court, Lucknow Bench, and courts and tribunals across the region. My approach is grounded in close reading, open communication, and an honest assessment of the way forward.</p>
            <ul className="about-points">
              <li><Check aria-hidden="true" /> Independent, client-focused representation</li>
              <li><Check aria-hidden="true" /> Consultations in Hindi and English</li>
              <li><Check aria-hidden="true" /> In-person and video appointments</li>
            </ul>
            <a className="section-link" href="#contact">About the practice <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="courts-section section-pad">
        <div className="site-shell courts-layout">
          <div className="courts-intro">
            <div className="eyebrow"><span /> COURTS &amp; REGION</div>
            <h2>Where I <em>appear</em></h2>
            <p>Based in Lucknow, with consultations available for clients across Uttar Pradesh.</p>
            <a className="section-link" href="#contact">Get in touch <ArrowRight aria-hidden="true" /></a>
          </div>
          <div className="court-list">
            <div><span className="court-icon"><Building2 aria-hidden="true" /></span><span><strong>Allahabad High Court, Lucknow Bench</strong><small>Writ, civil, criminal, and service matters</small></span><ArrowUpRight aria-hidden="true" /></div>
            <div><span className="court-icon"><Scale aria-hidden="true" /></span><span><strong>District &amp; Sessions Courts</strong><small>Civil and criminal proceedings in Lucknow</small></span><ArrowUpRight aria-hidden="true" /></div>
            <div><span className="court-icon"><BriefcaseBusiness aria-hidden="true" /></span><span><strong>Tribunals &amp; commissions</strong><small>Service, consumer, and other appropriate forums</small></span><ArrowUpRight aria-hidden="true" /></div>
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

      <section className="contact-section section-pad" id="contact">
        <div className="site-shell contact-layout">
          <div className="contact-copy">
            <div className="eyebrow"><span /> GET IN TOUCH</div>
            <h2>Talk through<br />your <em>matter.</em></h2>
            <p>Start with a short message or email. Share a little about your matter and arrange a time to speak.</p>
            <div className="contact-actions">
              <Button asChild size="lg" className="gold-button"><a href={contactDetails.whatsapp} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Message on WhatsApp</a></Button>
              <Button asChild size="lg" variant="outline" className="contact-email"><a href={`mailto:${contactDetails.email}`}><Mail aria-hidden="true" /> Send an email</a></Button>
            </div>
          </div>
          <div className="contact-details">
            <div><span><Mail aria-hidden="true" /></span><small>EMAIL</small><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></div>
            <div><span><Phone aria-hidden="true" /></span><small>PHONE</small><p>{contactDetails.phone}</p></div>
            <div><span><MapPin aria-hidden="true" /></span><small>LOCATION</small><p>High Court, Lucknow Bench<br />Lucknow, Uttar Pradesh</p></div>
            <div><span><Clock3 aria-hidden="true" /></span><small>AVAILABILITY</small><p>Monday to Saturday<br />By appointment</p></div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-shell footer-main">
          <a className="brand footer-brand" href="#main"><span className="brand-mark"><Scale aria-hidden="true" /></span><span className="brand-copy"><strong>Arjun Mehra</strong><small>ADVOCATE &amp; LEGAL COUNSEL</small></span></a>
          <p>Independent legal practice<br />Lucknow, Uttar Pradesh</p>
          <nav aria-label="Footer navigation"><a href="#about">About</a><a href="#practice">Practice</a><a href="#insights">Insights</a><a href="#contact">Contact</a></nav>
          <a className="back-top" href="#main">Back to top <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="site-shell footer-bottom"><span>© {new Date().getFullYear()} Arjun Mehra. Sample portfolio content.</span><button type="button" onClick={() => setDisclaimerOpen(true)}>Legal disclaimer</button><span>For general information only · Not legal advice</span></div>
      </footer>

      {disclaimerOpen && (
        <div className="disclaimer-backdrop" role="presentation">
          <section className="disclaimer-dialog" role="dialog" aria-modal="true" aria-labelledby="disclaimer-title" aria-describedby="disclaimer-copy">
            <div className="eyebrow"><span /> PLEASE READ</div>
            <h2 id="disclaimer-title">A note before you continue</h2>
            <div id="disclaimer-copy" className="disclaimer-copy">
              <p>This is a sample portfolio website. The name, portrait, qualifications, practice information, and contact details shown here are placeholders and should be replaced with accurate information.</p>
              <p>This website is for general information only and does not provide legal advice. Contacting an advocate through this website does not by itself create an advocate–client relationship.</p>
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