import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from './config';
import { headers } from 'next/headers';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  const headerList = headers();
  const nextUrl = headerList.get("next-url");
  //Split de nextUrl om de organizationID van de huidige organisatie op te halen
  //Deze kun je vervolgens gebruiken om alle vertalingen op te halen via getIntlMessages
  //Deze vertalingen verlaten de server niet, dus je kunt hier alle namespaces ophalen zodat je zeker weet dat je alle vertalingen tot je beschikking hebt

  return {
    messages: (
      await (locale === 'en'
        ? // When using Turbopack, this will enable HMR for `en`
        import('../messages/en.json')
        : import(`../messages/${locale}.json`))
    ).default
  };
});
