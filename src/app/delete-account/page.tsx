"use client";

import Link from 'next/link';
import { AlertTriangle, Mail } from 'lucide-react';
import { LegalPageLayout, interpolate } from '@/components/legal/legal-page-layout';
import { useLanguage } from '@/contexts/language-context';

const SUPPORT_EMAIL = 'support.4eyeslearning@gmail.com';

export default function DeleteAccountPage() {
  const { t } = useLanguage();

  const emailLink = (subject?: string) => (
    <a
      href={`mailto:${SUPPORT_EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`}
      className="font-semibold text-primary hover:underline"
    >
      {SUPPORT_EMAIL}
    </a>
  );

  const sections = [
    {
      id: 'before-you-delete',
      title: t.deleteAccountBeforeTitle,
      content: (
        <>
          <p>{t.deleteAccountBeforeP1}</p>
          <ul>
            {t.deleteAccountBeforeList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="flex gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-base">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
            <p className="font-medium">{t.deleteAccountBeforeImportant}</p>
          </div>
        </>
      ),
    },
    {
      id: 'how-to-request',
      title: t.deleteAccountHowToTitle,
      content: (
        <>
          <p>{t.deleteAccountHowToP1}</p>
          <ol>
            <li>{interpolate(t.deleteAccountHowToStep1, 'email', emailLink('Delete My Account'))}</li>
            <li>{t.deleteAccountHowToStep2}</li>
            <li>
              {t.deleteAccountHowToStep3}
              <ul className="mt-2">
                {t.deleteAccountHowToStep3List.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          </ol>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Delete My Account')}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" />
            {SUPPORT_EMAIL}
          </a>
        </>
      ),
    },
    {
      id: 'what-data',
      title: t.deleteAccountWhatDataTitle,
      content: (
        <>
          <p>{t.deleteAccountWhatDataP1}</p>
          <ul>
            {t.deleteAccountWhatDataList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      ),
    },
    {
      id: 'retention',
      title: t.deleteAccountRetentionTitle,
      content: (
        <>
          <p>{t.deleteAccountRetentionP1}</p>
          <ul>
            <li>{t.deleteAccountRetentionItem1}</li>
            <li>
              {t.deleteAccountRetentionItem2}
              <ul className="mt-2">
                {t.deleteAccountRetentionItem2List.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
            <li>{t.deleteAccountRetentionItem3}</li>
          </ul>
        </>
      ),
    },
    {
      id: 'confirmation',
      title: t.deleteAccountConfirmationTitle,
      content: (
        <>
          <p>{t.deleteAccountConfirmationP1}</p>
          <ol>
            {t.deleteAccountConfirmationList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </>
      ),
    },
    {
      id: 'alternatives',
      title: t.deleteAccountAlternativesTitle,
      content: (
        <>
          <p>{t.deleteAccountAlternativesP1}</p>
          <ul>
            {t.deleteAccountAlternativesList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      ),
    },
    {
      id: 'questions',
      title: t.deleteAccountQuestionsTitle,
      content: (
        <>
          <p>{interpolate(t.deleteAccountQuestionsP1, 'email', emailLink())}</p>
          <p>
            {interpolate(
              t.deleteAccountQuestionsP2,
              'privacy',
              <Link href="/privacy-policy" className="font-semibold text-primary hover:underline">
                {t.footerPrivacy}
              </Link>
            )}
          </p>
        </>
      ),
    },
  ];

  return <LegalPageLayout title={t.deleteAccountTitle} intro={<p>{t.deleteAccountIntro}</p>} sections={sections} />;
}
