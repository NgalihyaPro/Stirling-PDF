import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AppProviders } from "@app/components/AppProviders";
import { AppLayout } from "@app/components/AppLayout";
import SeoManager from "@app/components/seo/SeoManager";
import { LoadingFallback } from "@app/components/shared/LoadingFallback";
import { RainbowThemeProvider } from "@app/components/shared/RainbowThemeProvider";
import { PreferencesProvider } from "@app/contexts/PreferencesContext";
import HomePage from "@app/pages/HomePage";
import PublicSeoHomePage from "@app/pages/PublicSeoHomePage";
import MobileScannerPage from "@app/pages/MobileScannerPage";
import { PrivacyPolicyPage, TermsPage } from "@app/pages/LegalPage";
import Onboarding from "@app/components/onboarding/Onboarding";

// Import global styles
import "@app/styles/tailwind.css";
import "@app/styles/cookieconsent.css";
import "@app/styles/index.css";

// Import file ID debugging helpers (development only)
import "@app/utils/fileIdSafety";

// Minimal providers for mobile scanner - no API calls, no authentication
function MobileScannerProviders({ children }: { children: React.ReactNode }) {
  return (
    <PreferencesProvider>
      <RainbowThemeProvider>{children}</RainbowThemeProvider>
    </PreferencesProvider>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SeoManager />
      <Routes>
        {/* Mobile scanner route - no backend needed, pure P2P WebRTC */}
        <Route
          path="/mobile-scanner"
          element={
            <MobileScannerProviders>
              <MobileScannerPage />
            </MobileScannerProviders>
          }
        />

        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />

        {/* All other routes need AppProviders for backend integration */}
        <Route
          path="/"
          element={
            <AppProviders>
              <PublicSeoHomePage />
            </AppProviders>
          }
        />

        <Route
          path="*"
          element={
            <AppProviders>
              <AppLayout>
                <HomePage />
                <Onboarding />
              </AppLayout>
            </AppProviders>
          }
        />
      </Routes>
    </Suspense>
  );
}
