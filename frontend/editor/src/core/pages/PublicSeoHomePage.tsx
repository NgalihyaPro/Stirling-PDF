import { type MouseEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DescriptionIcon from "@mui/icons-material/Description";
import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";
import BoltIcon from "@mui/icons-material/Bolt";
import { NgalihyaBrand } from "@app/components/shared/NgalihyaBrand";
import "@app/pages/PublicSeoHomePage.css";

const featuredTools = [
  {
    title: "Merge PDF",
    description: "Combine multiple PDF files into one clean document online.",
    href: "/merge",
    category: "Organize",
  },
  {
    title: "Compress PDF",
    description: "Reduce PDF file size while keeping documents clear to share.",
    href: "/compress",
    category: "Optimize",
  },
  {
    title: "PDF to Word",
    description: "Convert PDF files into editable Word documents quickly.",
    href: "/pdf-to-word",
    category: "Convert",
  },
  {
    title: "Edit PDF",
    description: "Add text, images, annotations, and form content to PDFs.",
    href: "/pdf-text-editor",
    category: "Edit",
  },
  {
    title: "OCR PDF",
    description: "Recognize text from scanned PDFs and image-based documents.",
    href: "/ocr",
    category: "Intelligence",
  },
  {
    title: "Sign PDF",
    description: "Add signatures and prepare documents for approval.",
    href: "/sign",
    category: "Signing",
  },
  {
    title: "Watermark PDF",
    description: "Add text or image watermarks to protect your documents.",
    href: "/add-watermark",
    category: "Security",
  },
  {
    title: "Protect PDF",
    description: "Add passwords and permissions to sensitive PDF files.",
    href: "/add-password",
    category: "Security",
  },
];

const benefits = [
  {
    title: "Fast PDF tools",
    description:
      "Open the tool you need, upload your file, and finish common PDF work in a few clicks.",
    icon: BoltIcon,
  },
  {
    title: "Useful file actions",
    description:
      "Merge, split, compress, convert, OCR, sign, watermark, and protect PDF documents from one place.",
    icon: DescriptionIcon,
  },
  {
    title: "Built for privacy",
    description:
      "Ngalihya PDF is designed for controlled deployment, with clear privacy and terms pages for users.",
    icon: SecurityIcon,
  },
  {
    title: "Ready for accounts later",
    description:
      "Start public for search visibility, then enable login when you want private user accounts and storage.",
    icon: LockIcon,
  },
];

const faqs = [
  {
    question: "Is Ngalihya PDF free to use?",
    answer:
      "Yes. Ngalihya PDF provides free online PDF tools for common document tasks such as merging, compressing, converting, editing, OCR, signing, and watermarking.",
  },
  {
    question: "Can I convert PDF to Word online?",
    answer:
      "Yes. Use the PDF to Word tool to convert PDF files into editable Word documents from your browser.",
  },
  {
    question: "Can I compress large PDF files?",
    answer:
      "Yes. The Compress PDF tool helps reduce file size so documents are easier to upload, email, and share.",
  },
  {
    question: "Does Ngalihya PDF support scanned documents?",
    answer:
      "Yes. The OCR PDF tool can recognize text from scanned PDFs and image-based documents.",
  },
];

export default function PublicSeoHomePage() {
  useEffect(() => {
    document.documentElement.classList.add("public-home-page");
    document.body.classList.add("public-home-page");
    return () => {
      document.documentElement.classList.remove("public-home-page");
      document.body.classList.remove("public-home-page");
    };
  }, []);

  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (!section) return;
    window.history.pushState(null, "", `#${sectionId}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="public-home">
      <header className="public-home__nav">
        <Link to="/" className="public-home__brand" aria-label="Ngalihya PDF home">
          <NgalihyaBrand
            iconClassName="public-home__brand-icon"
            textClassName="public-home__brand-text"
          />
        </Link>
        <nav className="public-home__links" aria-label="Primary tools">
          <a href="#tools" onClick={(event) => scrollToSection(event, "tools")}>
            Tools
          </a>
          <a href="#why" onClick={(event) => scrollToSection(event, "why")}>
            Why Us
          </a>
          <a href="#faq" onClick={(event) => scrollToSection(event, "faq")}>
            FAQ
          </a>
          <a
            href="#contact"
            onClick={(event) => scrollToSection(event, "contact")}
          >
            Contact
          </a>
        </nav>
        <Link to="/login" className="public-home__login">
          Login
        </Link>
      </header>

      <section className="public-home__hero">
        <div className="public-home__hero-copy">
          <p className="public-home__eyebrow">Free online PDF tools</p>
          <h1>Every PDF tool you need in one simple workspace</h1>
          <p>
            Ngalihya PDF helps you merge, compress, convert, edit, OCR, sign,
            watermark, and protect PDF files online. Choose a tool, upload your
            document, and get work done from your browser.
          </p>
          <div className="public-home__hero-actions">
            <Link to="/pdf-to-word" className="public-home__primary">
              Start with PDF to Word
              <ArrowForwardIcon fontSize="small" aria-hidden="true" />
            </Link>
            <Link to="/merge" className="public-home__secondary">
              Merge PDFs
            </Link>
          </div>
        </div>
        <div className="public-home__hero-panel" aria-hidden="true">
          <div className="public-home__document">
            <span />
            <span />
            <span />
            <strong>PDF</strong>
          </div>
          <div className="public-home__mini-tools">
            <span>Convert</span>
            <span>Compress</span>
            <span>OCR</span>
            <span>Sign</span>
          </div>
        </div>
      </section>

      <section
        id="tools"
        className="public-home__section"
        aria-labelledby="tools-title"
      >
        <div className="public-home__section-heading">
          <p className="public-home__eyebrow">Popular tools</p>
          <h2 id="tools-title">Work with PDFs online</h2>
          <p>
            Open the right Ngalihya PDF tool for your document task. These pages
            are public so users and search engines can find the tools directly.
          </p>
        </div>
        <div className="public-home__tool-grid">
          {featuredTools.map((tool) => (
            <Link key={tool.href} to={tool.href} className="public-home__tool">
              <span className="public-home__tool-category">{tool.category}</span>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <span className="public-home__tool-link">
                Open tool <ArrowForwardIcon fontSize="small" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="why" className="public-home__band" aria-labelledby="why-title">
        <div className="public-home__section-heading">
          <p className="public-home__eyebrow">Why Ngalihya PDF</p>
          <h2 id="why-title">A practical PDF workspace for everyday documents</h2>
        </div>
        <div className="public-home__benefit-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article key={benefit.title} className="public-home__benefit">
                <Icon fontSize="medium" aria-hidden="true" />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="faq"
        className="public-home__section"
        aria-labelledby="faq-title"
      >
        <div className="public-home__section-heading">
          <p className="public-home__eyebrow">FAQ</p>
          <h2 id="faq-title">Ngalihya PDF questions</h2>
        </div>
        <div className="public-home__faq-list">
          {faqs.map((item) => (
            <article key={item.question} className="public-home__faq">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="public-home__footer">
        <div className="public-home__footer-brand">
          <div className="public-home__brand public-home__brand--footer">
            <NgalihyaBrand
              iconClassName="public-home__brand-icon"
              textClassName="public-home__brand-text"
            />
          </div>
          <p>
            Free online PDF tools for converting, compressing, editing,
            organizing, signing, and protecting documents.
          </p>
          <p className="public-home__contact-line">
            Contact: <a href="mailto:support@ngalihyapdf.com">support@ngalihyapdf.com</a>
          </p>
        </div>

        <div className="public-home__footer-column">
          <h2>Popular tools</h2>
          <Link to="/pdf-to-word">PDF to Word</Link>
          <Link to="/merge">Merge PDF</Link>
          <Link to="/compress">Compress PDF</Link>
          <Link to="/ocr">OCR PDF</Link>
        </div>

        <div className="public-home__footer-column">
          <h2>More tools</h2>
          <Link to="/pdf-text-editor">Edit PDF</Link>
          <Link to="/sign">Sign PDF</Link>
          <Link to="/add-watermark">Watermark PDF</Link>
          <Link to="/add-password">Protect PDF</Link>
        </div>

        <div className="public-home__footer-column">
          <h2>Company</h2>
          <a href="#why" onClick={(event) => scrollToSection(event, "why")}>
            About Ngalihya PDF
          </a>
          <a href="#faq" onClick={(event) => scrollToSection(event, "faq")}>
            FAQ
          </a>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms and Conditions</Link>
        </div>

        <div className="public-home__footer-bottom">
          <span>Copyright 2026 Ngalihya PDF. All rights reserved.</span>
          <span>ngalihyapdf.com</span>
        </div>
      </footer>
    </main>
  );
}
