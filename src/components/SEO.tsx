import { useEffect } from "react";
import { useSEOGlobal } from "../contexts/SEOContent";

interface SEOProps {
  title?: string;
  description?: string;
}

export function SEO({ title, description }: SEOProps) {
  const { seo_global } = useSEOGlobal();

  useEffect(() => {
    // Atualiza o title da aba
    if (title) {
      document.title = title;
    }

    const updateMeta = (name: string, content?: string) => {
      if (!content) return;

      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMeta("title", title);
    updateMeta("description", description);

    updateMeta("keywords", seo_global?.keywords);
    updateMeta("author", seo_global?.author);
    updateMeta("robots", seo_global?.robots);
    updateMeta("country", seo_global?.country);
    updateMeta("language", seo_global?.language);
    updateMeta("currency", seo_global?.currency);
    updateMeta("copyright", seo_global?.copyright);

  }, [title, description, seo_global]);

  return null;
}