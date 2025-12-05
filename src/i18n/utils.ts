import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
    return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    const getNested = (obj: any, path: string) =>
      path.split('.').reduce((acc, part) => acc?.[part], obj);

    return (
      getNested(ui[lang], key) ??
      getNested(ui[defaultLang], key) ??
      key
    );
  };
}



