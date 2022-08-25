import { useRouter } from "next/router";

export const Languages = ["ru", "bg"] as const; 
export type LanguagesKey = typeof Languages[number];

export const DefaultLanguage: LanguagesKey = "bg";

export type Localized<T> = {	
	[K in LanguagesKey]: T;
};

export type LocalizedDictionary<T> = { [key: string]: Localized<T> };

export function localize<T>(item: Localized<T>): Localized<T> {
	return item;
}

export function localized<T>(items: LocalizedDictionary<T>): LocalizedDictionary<T> {
	return items;
}

export function isLanguageKey(lang: string): lang is LanguagesKey {
	return Languages.includes(lang as LanguagesKey);
}

export function getLanguageKey(lang: string): LanguagesKey {
	return isLanguageKey(lang) ? lang : DefaultLanguage;
}

export function getTranslation<T>(item: Localized<T>, lang: string | undefined) {
	var langKey = lang == undefined ? DefaultLanguage : getLanguageKey(lang);
	return item[langKey];
}

export function useTranslator() {
    const router = useRouter();
    const { locale } = router;

    return <T>(item: Localized<T>) => getTranslation(item, locale);
}
