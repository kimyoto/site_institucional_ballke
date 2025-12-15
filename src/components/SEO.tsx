import { useEffect } from "react";
import { useGlobalSEO } from "../contexts/SEOContent";

interface SEOProps {
  title?: string;
  description?: string;
}

export function SEO({ title, description }: SEOProps) {
  const { globalSEO } = useGlobalSEO();

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

    // SEO por página
    updateMeta("description", description);

    // SEO global (vem do Context)
    updateMeta("keywords", globalSEO?.keywords);
    updateMeta("author", globalSEO?.author);
    updateMeta("robots", globalSEO?.robots);
    updateMeta("country", globalSEO?.country);
    updateMeta("language", globalSEO?.language);
    updateMeta("currency", globalSEO?.currency);
    updateMeta("copyright", globalSEO?.copyright);

  }, [title, description, globalSEO]);

  return null;
}