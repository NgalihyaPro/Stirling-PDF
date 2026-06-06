import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { URL_TO_TOOL_MAP } from "@app/utils/urlMapping";

const SITE_URL = "https://ngalihyapdf.com";
const SITE_NAME = "Ngalihya PDF";
const DEFAULT_TITLE = "Ngalihya PDF - Free Online PDF Tools";
const DEFAULT_DESCRIPTION =
  "Use Ngalihya PDF to merge, compress, convert, edit, OCR, sign, watermark, and protect PDF files online.";

const TOOL_METADATA: Record<string, { title: string; description: string }> = {
  merge: {
    title: "Merge PDF Online - Ngalihya PDF",
    description:
      "Combine multiple PDF files into one document quickly with Ngalihya PDF.",
  },
  compress: {
    title: "Compress PDF Online - Ngalihya PDF",
    description:
      "Reduce PDF file size online while keeping your documents clear and easy to share.",
  },
  convert: {
    title: "Convert PDF Online - Ngalihya PDF",
    description:
      "Convert PDF, Word, images, HTML, Markdown, and other files with Ngalihya PDF.",
  },
  ocr: {
    title: "OCR PDF Online - Ngalihya PDF",
    description:
      "Recognize text in scanned PDFs and images using Ngalihya PDF OCR tools.",
  },
  redact: {
    title: "Redact PDF Online - Ngalihya PDF",
    description:
      "Hide sensitive text and information from PDF documents before sharing them.",
  },
  sign: {
    title: "Sign PDF Online - Ngalihya PDF",
    description:
      "Add signatures to PDF documents online using Ngalihya PDF signing tools.",
  },
  watermark: {
    title: "Add Watermark To PDF - Ngalihya PDF",
    description:
      "Add text or image watermarks to PDF files online with Ngalihya PDF.",
  },
  split: {
    title: "Split PDF Online - Ngalihya PDF",
    description:
      "Split PDF files, extract pages, or separate documents into smaller files.",
  },
  rotate: {
    title: "Rotate PDF Online - Ngalihya PDF",
    description:
      "Rotate PDF pages online and save corrected documents with Ngalihya PDF.",
  },
  repair: {
    title: "Repair PDF Online - Ngalihya PDF",
    description:
      "Repair damaged or broken PDF files online using Ngalihya PDF tools.",
  },
  pdfTextEditor: {
    title: "PDF Text Editor Online - Ngalihya PDF",
    description:
      "Edit PDF text and make document changes online with Ngalihya PDF.",
  },
  addPassword: {
    title: "Password Protect PDF - Ngalihya PDF",
    description:
      "Add password protection and permissions to PDF documents online.",
  },
  removePassword: {
    title: "Remove PDF Password - Ngalihya PDF",
    description:
      "Unlock PDF files you are authorized to access by removing password protection.",
  },
};

const PATH_METADATA: Record<string, { title: string; description: string }> = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  "/privacy": {
    title: "Privacy Policy - Ngalihya PDF",
    description:
      "Read the Ngalihya PDF Privacy Policy and learn how account information, uploaded files, cookies, and service data are handled.",
  },
  "/terms": {
    title: "Terms and Conditions - Ngalihya PDF",
    description:
      "Read the Ngalihya PDF Terms and Conditions for using the online PDF tools and document processing service.",
  },
  "/about": {
    title: "About Ngalihya PDF - Free Online PDF Tools",
    description:
      "Learn about Ngalihya PDF, an online workspace for converting, compressing, editing, organizing, signing, and protecting PDF documents.",
  },
  "/contact": {
    title: "Contact Ngalihya PDF Support",
    description:
      "Contact Ngalihya PDF for support questions, privacy requests, account questions, and online PDF tool inquiries.",
  },
  "/cookie-policy": {
    title: "Cookie Policy - Ngalihya PDF",
    description:
      "Read how Ngalihya PDF uses cookies, local storage, analytics, and advertising technologies.",
  },
  "/accessibility": {
    title: "Accessibility - Ngalihya PDF",
    description:
      "Read the Ngalihya PDF accessibility statement and learn how to report accessibility issues.",
  },
};

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attrs).forEach(([key, value]) => element?.setAttribute(key, value));
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

function upsertJsonLd(id: string, data: unknown) {
  let element = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
}

export function getSeoMetadata(pathname: string) {
  const cleanPath = pathname.replace(/\/+$/, "") || "/";
  const direct = PATH_METADATA[cleanPath];
  if (direct) return direct;

  const toolId = URL_TO_TOOL_MAP[cleanPath];
  if (toolId && TOOL_METADATA[toolId]) {
    return TOOL_METADATA[toolId];
  }

  return {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  };
}

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const cleanPath = location.pathname.replace(/\/+$/, "") || "/";
    const canonicalUrl = `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;
    const { title, description } = getSeoMetadata(cleanPath);

    document.title = title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: "index,follow,max-image-preview:large",
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: SITE_NAME,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: `${SITE_URL}/modern-logo/logo512.png`,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });

    upsertLink("canonical", canonicalUrl);

    upsertJsonLd("ngalihya-pdf-structured-data", {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: SITE_NAME,
      url: SITE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: DEFAULT_DESCRIPTION,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    });
  }, [location.pathname]);

  return null;
}
