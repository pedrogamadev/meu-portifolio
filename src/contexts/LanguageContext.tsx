import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    'nav.about': 'Sobre',
    'nav.stack': 'Stack',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'nav.talk': 'Falar comigo',
    'hero.label': 'Fullstack web Developer',
    'hero.subtitle': 'React, Node.js e TypeScript construindo SaaS escaláveis e prontos para produção',
    'hero.location': 'Natal, RN',
    'hero.available': 'aberto a oportunidades',
    'hero.languages': 'Língua nativa: português e inglês técnico',
    'hero.viewProjects': 'Ver projetos',
    'hero.chat': 'Conversar',
  },
  en: {
    'nav.about': 'About',
    'nav.stack': 'Stack',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.talk': 'Let\'s talk',
    'hero.label': 'Fullstack web Developer',
    'hero.subtitle': 'React, Node.js, and TypeScript building scalable and production-ready SaaS',
    'hero.location': 'Natal, RN (Brazil)',
    'hero.available': 'open to work',
    'hero.languages': 'Native language: Portuguese and technical English',
    'hero.viewProjects': 'View projects',
    'hero.chat': 'Chat',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-lang');
    return (saved as Language) || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
