"use client";

import { LegalPageLayout, linkifyEmails } from '@/components/legal/legal-page-layout';
import { useLanguage } from '@/contexts/language-context';
import { appName } from '@/lib/translations';

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();
  // Some privacy strings use a literal '${appName}' marker instead of template interpolation
  const withAppName = (text: string) => text.replaceAll('${appName}', appName);

  const sections = [
    {
      id: 'info-collected',
      title: t.privacyPolicyInfoCollected,
      content: (
        <>
          <p>{withAppName(t.privacyPolicyInfoCollectedP1)}</p>
          <p>{withAppName(t.privacyPolicyInfoCollectedP2)}</p>
        </>
      ),
    },
    { id: 'how-we-use', title: t.privacyPolicyHowWeUse, content: <p>{withAppName(t.privacyPolicyHowWeUseP1)}</p> },
    { id: 'how-we-share', title: t.privacyPolicyHowWeShare, content: <p>{t.privacyPolicyHowWeShareP1}</p> },
    { id: 'data-security', title: t.privacyPolicyDataSecurity, content: <p>{t.privacyPolicyDataSecurityP1}</p> },
    { id: 'your-rights', title: t.privacyPolicyYourRights, content: <p>{t.privacyPolicyYourRightsP1}</p> },
    { id: 'children', title: t.privacyPolicyChildren, content: <p>{withAppName(t.privacyPolicyChildrenP1)}</p> },
    { id: 'changes', title: t.privacyPolicyChanges, content: <p>{t.privacyPolicyChangesP1}</p> },
    { id: 'contact', title: t.privacyPolicyContact, content: <p>{linkifyEmails(t.privacyPolicyContactP1)}</p> },
  ];

  return (
    <LegalPageLayout
      title={t.privacyPolicyTitle}
      lastUpdatedTemplate={t.privacyPolicyLastUpdated}
      intro={<p>{withAppName(t.privacyPolicyIntro)}</p>}
      sections={sections}
    />
  );
}
