import { Link } from "react-router-dom";
import "./LegalPage.css";

const LAST_UPDATED = "June 6, 2026";
const CONTACT_EMAIL = "support@ngalihyapdf.com";

function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="legal-page">
      <header className="legal-page__header">
        <div className="legal-page__header-inner">
          <Link className="legal-page__brand" to="/">
            <img src="/modern-logo/favicon.ico" alt="" />
            <span>Ngalihya PDF</span>
          </Link>
          <Link className="legal-page__back" to="/">
            Back to app
          </Link>
        </div>
      </header>
      <div className="legal-page__content">
        <article className="legal-page__card">
          <h1>{title}</h1>
          <p className="legal-page__updated">Last updated: {LAST_UPDATED}</p>
          {children}
        </article>
      </div>
    </main>
  );
}

export function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        Ngalihya PDF provides online PDF tools for converting, editing,
        compressing, organizing, signing, and managing documents. This Privacy
        Policy explains how information is handled when you use our website and
        services.
      </p>

      <h2>Information We Collect</h2>
      <p>We may collect the following information:</p>
      <ul>
        <li>Account information, such as username, email address, and password.</li>
        <li>Files you upload or create while using PDF tools.</li>
        <li>Basic technical data, such as IP address, browser type, device type, and log data.</li>
        <li>Support messages or other information you send to us.</li>
      </ul>

      <h2>How Uploaded Files Are Handled</h2>
      <p>
        Uploaded files are processed so the selected PDF tool can work. Files may
        be temporarily stored while processing is running and may be stored in
        your account if file storage features are enabled. You are responsible
        for removing files you no longer want to keep in the service.
      </p>

      <h2>How We Use Information</h2>
      <p>We use information to:</p>
      <ul>
        <li>Provide and operate Ngalihya PDF.</li>
        <li>Process files and deliver requested PDF outputs.</li>
        <li>Secure accounts and prevent abuse.</li>
        <li>Maintain, troubleshoot, and improve the service.</li>
        <li>Respond to support requests.</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        We may use essential cookies or similar storage to keep you signed in,
        remember preferences, and protect the service. If analytics are enabled
        in the future, this policy should be updated to describe those tools.
      </p>

      <h2>Sharing Information</h2>
      <p>
        We do not sell your personal information. We may share information with
        hosting providers, security providers, payment providers if payments are
        added, or when required by law.
      </p>

      <h2>Data Security</h2>
      <p>
        We use reasonable technical and organizational measures to protect data.
        No online service can guarantee complete security, so avoid uploading
        documents that you are not authorized to process.
      </p>

      <h2>Your Choices</h2>
      <p>
        You may request account or data deletion by contacting us. Some records
        may be retained where needed for security, legal compliance, or dispute
        resolution.
      </p>

      <h2>Changes To This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The updated version
        will be posted on this page with a new last updated date.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this Privacy Policy can be sent to{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}

export function TermsPage() {
  return (
    <LegalLayout title="Terms and Conditions">
      <p>
        These Terms and Conditions govern your use of Ngalihya PDF. By using the
        service, you agree to these terms.
      </p>

      <h2>Use Of The Service</h2>
      <p>
        You may use Ngalihya PDF to process documents that you own or are
        authorized to handle. You must use the service only for lawful purposes.
      </p>

      <h2>Accounts</h2>
      <p>
        If accounts are enabled, you are responsible for keeping your login
        details secure and for all activity under your account. Contact us if you
        believe your account has been compromised.
      </p>

      <h2>Uploaded Content</h2>
      <p>
        You retain ownership of files you upload. You grant Ngalihya PDF the
        limited permission needed to store, process, convert, edit, and deliver
        files according to the actions you request.
      </p>

      <h2>Prohibited Use</h2>
      <p>You must not use the service to:</p>
      <ul>
        <li>Upload or process illegal, harmful, or unauthorized content.</li>
        <li>Violate privacy, intellectual property, or other rights.</li>
        <li>Attack, overload, scrape, reverse engineer, or disrupt the service.</li>
        <li>Bypass security, authentication, limits, or access controls.</li>
      </ul>

      <h2>Service Availability</h2>
      <p>
        We aim to keep Ngalihya PDF available, but we do not guarantee that the
        service will be uninterrupted, error-free, or available at all times.
        Features may change, be limited, or be removed.
      </p>

      <h2>No Professional Advice</h2>
      <p>
        Ngalihya PDF is a document processing tool. It does not provide legal,
        financial, medical, or other professional advice.
      </p>

      <h2>Limitation Of Liability</h2>
      <p>
        To the maximum extent permitted by law, Ngalihya PDF is not liable for
        indirect, incidental, special, consequential, or punitive damages, or for
        loss of data, revenue, profits, or business opportunities.
      </p>

      <h2>Termination</h2>
      <p>
        We may suspend or terminate access if we believe these terms have been
        violated or if continued access creates risk for the service or other
        users.
      </p>

      <h2>Changes To These Terms</h2>
      <p>
        We may update these Terms and Conditions from time to time. Continued use
        of the service after changes are posted means you accept the updated
        terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
