import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import ClientSideComponent from 'components/ClientSideComponent';
import PageLayout from 'components/PageLayout';

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Deze t methode heeft alle messages die in i18n.ts worden ingeladen
  const t = useTranslations('IndexPage');

  return (
    <PageLayout title={t('title')}>
      <p className="max-w-[590px]">
        {t.rich('description', {
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          )
        })}
      </p>
      <ClientSideComponent />
    </PageLayout>
  );
}
