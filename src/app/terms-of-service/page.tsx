"use client";

import { LegalPageLayout, linkifyEmails } from '@/components/legal/legal-page-layout';
import { useLanguage } from '@/contexts/language-context';

export default function TermsOfServicePage() {
  const { t } = useLanguage();

  const sections = [
    { id: 'acceptance', title: t.termsOfServiceAcceptance, content: <p>{t.termsOfServiceAcceptanceP1}</p> },
    { id: 'user-accounts', title: t.termsOfServiceUserAccounts, content: <p>{t.termsOfServiceUserAccountsP1}</p> },
    { id: 'user-conduct', title: t.termsOfServiceUserConduct, content: <p>{t.termsOfServiceUserConductP1}</p> },
    { id: 'intellectual-property', title: t.termsOfServiceIntellectualProperty, content: <p>{t.termsOfServiceIntellectualPropertyP1}</p> },
    { id: 'termination', title: t.termsOfServiceTermination, content: <p>{t.termsOfServiceTerminationP1}</p> },
    { id: 'disclaimers', title: t.termsOfServiceDisclaimers, content: <p>{t.termsOfServiceDisclaimersP1}</p> },
    { id: 'limitation', title: t.termsOfServiceLimitation, content: <p>{t.termsOfServiceLimitationP1}</p> },
    { id: 'governing-law', title: t.termsOfServiceGoverningLaw, content: <p>{t.termsOfServiceGoverningLawP1}</p> },
    { id: 'changes', title: t.termsOfServiceChanges, content: <p>{t.termsOfServiceChangesP1}</p> },
    { id: 'contact', title: t.termsOfServiceContact, content: <p>{linkifyEmails(t.termsOfServiceContactP1)}</p> },
  ];

  return (
    <LegalPageLayout
      title={t.termsOfServiceTitle}
      lastUpdatedTemplate={t.termsOfServiceLastUpdated}
      intro={<p>{t.termsOfServiceIntro}</p>}
      sections={sections}
    />
  );
}
