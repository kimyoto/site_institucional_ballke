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
    globalSEO: GlobalSEO | null;
}

const SEOContext = createContext<SEOContextData>({
    globalSEO: null,
});

export const SEOProvider = ({ children }: { children: React.ReactNode }) => {
    const [globalSEO, setGlobalSEO] = useState<GlobalSEO | null>(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/api/seo/global/`)
            .then((res) => res.json())
            .then((data) => setGlobalSEO(data))
            .catch(() => {
                // fallback seguro
                setGlobalSEO({
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
        <SEOContext.Provider value={{ globalSEO }}>
            {children}
        </SEOContext.Provider>
    );
};

export const useGlobalSEO = () => useContext(SEOContext);
