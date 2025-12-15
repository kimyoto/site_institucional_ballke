import React, { createContext, useContext, useEffect, useState } from "react";

interface GlobalSEO {
    keywords: string;
    author: string;
    robots: string;
    country: string;
    language: string;
    currency: string;
    copyright: string;
}

interface SEOContextData {
    seo_global: GlobalSEO | null;
}

const SEOContext = createContext<SEOContextData>({
    seo_global: null,
});

export const SEOProvider = ({ children }: { children: React.ReactNode }) => {
    const [seo_global, setSEOGlobal] = useState<GlobalSEO | null>(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/api/seo/global/`)
            .then((res) => res.json())
            .then((data) => setSEOGlobal(data.seo_global))
            .catch(() => {
                // fallback seguro
                setSEOGlobal({
                    keywords: "Grupo Ballke, Magazine Médica, distribuição de produtos médicos, materiais hospitalares, equipamentos médicos, produtos odontológicos, estética, veterinária, descartáveis, saúde e bem-estar, Chapecó, Santa Catarina, atacado de medicamentos, loja de produtos médicos",
                    author: "Grupo Ballke",
                    robots: "index, follow",
                    country: "BRA",
                    language: "pt-BR",
                    currency: "BRL",
                    copyright: "Grupo Ballke",
                });
            });
    }, []);

    return (
        <SEOContext.Provider value={{ seo_global }}>
            {children}
        </SEOContext.Provider>
    );
};

export const useSEOGlobal = () => useContext(SEOContext);
