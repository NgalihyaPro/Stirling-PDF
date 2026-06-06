import { Flex } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useCookieConsent } from "@app/hooks/useCookieConsent";

interface FooterProps {
  privacyPolicy?: string;
  termsAndConditions?: string;
  accessibilityStatement?: string;
  cookiePolicy?: string;
  impressum?: string;
  analyticsEnabled?: boolean;
  forceLightMode?: boolean;
}

export default function Footer({
  privacyPolicy,
  termsAndConditions,
  accessibilityStatement,
  cookiePolicy,
  impressum,
  analyticsEnabled,
  forceLightMode = false,
}: FooterProps) {
  const { t } = useTranslation();

  const finalAnalyticsEnabled = analyticsEnabled ?? false;
  void privacyPolicy;
  void termsAndConditions;
  const finalAccessibilityStatement = accessibilityStatement;
  const finalCookiePolicy = cookiePolicy;
  const finalImpressum = impressum;

  const { showCookiePreferences } = useCookieConsent({
    analyticsEnabled: finalAnalyticsEnabled,
    forceLightMode,
  });

  // Default Ngalihya PDF public legal pages.
  const defaultTermsUrl = "https://ngalihyapdf.com/terms";
  const defaultPrivacyUrl = "https://ngalihyapdf.com/privacy";

  const finalTermsUrl = defaultTermsUrl;
  const finalPrivacyUrl = defaultPrivacyUrl;

  // Helper to check if a value is valid (not null/undefined/empty string)
  const isValidLink = (link?: string) => link && link.trim().length > 0;

  return (
    <div
      style={{
        height: "var(--footer-height)",
        backgroundColor: forceLightMode
          ? "#f1f3f5"
          : "var(--mantine-color-gray-1)",
        borderTop: forceLightMode
          ? "1px solid #e9ecef"
          : "1px solid var(--mantine-color-gray-2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="row"
        style={{
          fontSize: "0.75rem",
          color: forceLightMode ? "#495057" : undefined,
        }}
      >
        <a
          className="footer-link px-3"
          target="_blank"
          rel="noopener noreferrer"
          href={finalPrivacyUrl}
        >
          {t("legal.privacy", "Privacy Policy")}
        </a>
        <a
          className="footer-link px-3"
          target="_blank"
          rel="noopener noreferrer"
          href={finalTermsUrl}
        >
          {t("legal.terms", "Terms and Conditions")}
        </a>
        {isValidLink(finalAccessibilityStatement) && (
          <a
            className="footer-link px-3"
            target="_blank"
            rel="noopener noreferrer"
            href={finalAccessibilityStatement}
          >
            {t("legal.accessibility", "Accessibility")}
          </a>
        )}
        {isValidLink(finalCookiePolicy) && (
          <a
            className="footer-link px-3"
            target="_blank"
            rel="noopener noreferrer"
            href={finalCookiePolicy}
          >
            {t("legal.cookie", "Cookie Policy")}
          </a>
        )}
        {isValidLink(finalImpressum) && (
          <a
            className="footer-link px-3"
            target="_blank"
            rel="noopener noreferrer"
            href={finalImpressum}
          >
            {t("legal.impressum", "Impressum")}
          </a>
        )}
        {finalAnalyticsEnabled && (
          <button
            className="footer-link px-3"
            id="cookieBanner"
            onClick={showCookiePreferences}
          >
            {t("legal.showCookieBanner", "Cookie Preferences")}
          </button>
        )}
      </Flex>
    </div>
  );
}
