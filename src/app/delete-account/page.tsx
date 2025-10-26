"use client";

import Link from 'next/link';
import { ThemeAwareLogo } from '@/components/theme-aware-logo';
import { ThemeToggleButton } from '@/components/theme-toggle-button';
import { LanguageSwitcher } from '@/components/language-switcher';
import { useLanguage } from '@/contexts/language-context';
import { appName } from '@/lib/translations';
import { useEffect, useState } from 'react';

const Header = () => {
    const { t } = useLanguage();
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 md:px-6 bg-background/80 backdrop-blur-md shadow-sm">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
                <ThemeAwareLogo width={28} height={28} className="h-7 w-7" />
                <span className="text-2xl font-bold font-headline text-primary">{appName}</span>
            </Link>
            <div className="flex items-center space-x-2">
                <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
                    <Link href="/#features" className="hover:text-primary transition-colors" prefetch={false}>
                        {t.navFeatures}
                    </Link>
                    <Link href="/#testimonials" className="hover:text-primary transition-colors" prefetch={false}>
                        {t.navTestimonials}
                    </Link>
                    <Link href="/#download" className="hover:text-primary transition-colors" prefetch={false}>
                        {t.navDownload}
                    </Link>
                </nav>
                <LanguageSwitcher />
                <ThemeToggleButton />
            </div>
        </header>
    );
};

const Footer = () => {
    const { t } = useLanguage();
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="py-12 bg-muted text-muted-foreground">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center items-center mb-6">
                    <ThemeAwareLogo width={32} height={32} className="h-8 w-8" />
                    <span className="ml-2 text-2xl font-bold font-headline text-primary">{appName}</span>
                </div>
                <p className="mb-2">{t.footerSlogan}</p>
                <p className="text-sm mb-6">
                    {t.footerCopyright.replace('{year}', currentYear.toString())}
                </p>
                <div className="flex justify-center space-x-4">
                    <Link href="/privacy-policy" className="hover:text-primary transition-colors" prefetch={false}>
                        {t.footerPrivacy}
                    </Link>
                    <Link href="/terms-of-service" className="hover:text-primary transition-colors" prefetch={false}>
                        {t.footerTerms}
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default function DeleteAccountPage() {
    const { t } = useLanguage();
    const supportEmail = "support.4eyeslearning@gmail.com";

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20 pb-12 container mx-auto px-4 md:px-6">
                <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert mx-auto">
                    <h1 className="text-3xl font-bold font-headline text-primary mb-4">{t.deleteAccountTitle}</h1>

                    <section className="mb-8">
                        <p>{t.deleteAccountIntro}</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold font-headline mb-3">{t.deleteAccountBeforeTitle}</h2>
                        <p className="mb-3">{t.deleteAccountBeforeP1}</p>
                        <ul className="list-disc pl-6 space-y-2">
                            {t.deleteAccountBeforeList.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className="mt-3">
                            <strong>{t.deleteAccountBeforeImportant}</strong>
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold font-headline mb-3">{t.deleteAccountHowToTitle}</h2>
                        <p className="mb-3">{t.deleteAccountHowToP1}</p>
                        <ol className="list-decimal pl-6 space-y-3">
                            <li>
                                <strong>{t.deleteAccountHowToStep1.replace('{email}', '')}</strong>
                                <a
                                    href={`mailto:${supportEmail}?subject=Delete My Account`}
                                    className="text-primary hover:underline font-semibold"
                                >
                                    {supportEmail}
                                </a>
                            </li>
                            <li>
                                <strong>{t.deleteAccountHowToStep2}</strong>
                            </li>
                            <li>
                                <strong>{t.deleteAccountHowToStep3}</strong>
                                <ul className="list-disc pl-6 mt-2 space-y-1">
                                    {t.deleteAccountHowToStep3List.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </li>
                        </ol>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold font-headline mb-3">{t.deleteAccountWhatDataTitle}</h2>
                        <p className="mb-3">{t.deleteAccountWhatDataP1}</p>
                        <ul className="list-disc pl-6 space-y-2">
                            {t.deleteAccountWhatDataList.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold font-headline mb-3">{t.deleteAccountRetentionTitle}</h2>
                        <p className="mb-3">{t.deleteAccountRetentionP1}</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>{t.deleteAccountRetentionItem1}</li>
                            <li>
                                {t.deleteAccountRetentionItem2}
                                <ul className="list-disc pl-6 mt-2 space-y-1">
                                    {t.deleteAccountRetentionItem2List.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </li>
                            <li>{t.deleteAccountRetentionItem3}</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold font-headline mb-3">{t.deleteAccountConfirmationTitle}</h2>
                        <p>{t.deleteAccountConfirmationP1}</p>
                        <ol className="list-decimal pl-6 space-y-2 mt-3">
                            {t.deleteAccountConfirmationList.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ol>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold font-headline mb-3">{t.deleteAccountAlternativesTitle}</h2>
                        <p className="mb-3">{t.deleteAccountAlternativesP1}</p>
                        <ul className="list-disc pl-6 space-y-2">
                            {t.deleteAccountAlternativesList.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold font-headline mb-3">{t.deleteAccountQuestionsTitle}</h2>
                        <p>
                            {t.deleteAccountQuestionsP1.replace('{email}', '')}
                            <a
                                href={`mailto:${supportEmail}`}
                                className="text-primary hover:underline font-semibold"
                            >
                                {supportEmail}
                            </a>.
                        </p>
                        <p className="mt-3">
                            {t.deleteAccountQuestionsP2.replace('Privacy Policy', '')}
                            <Link href="/privacy-policy" className="text-primary hover:underline font-semibold">
                                {t.footerPrivacy}
                            </Link>.
                        </p>
                    </section>
                </article>
            </main>
            <Footer />
        </div>
    );
}
