import { Flex } from "@mantine/core";
import { useTranslation } from "react-i18next";

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

  void analyticsEnabled;
  void privacyPolicy;
  void termsAndConditions;
  void accessibilityStatement;
  void cookiePolicy;
  void impressum;

  // Default Ngalihya PDF public legal pages.
  const defaultTermsUrl = "https://ngalihyapdf.com/terms";
  const defaultPrivacyUrl = "https://ngalihyapdf.com/privacy";

  const finalTermsUrl = defaultTermsUrl;
  const finalPrivacyUrl = defaultPrivacyUrl;

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
      </Flex>
    </div>
  );
}
