# 🎨 Frontend React - Site Institucional

Interface moderna e responsiva do site corporativo, desenvolvida em React.

## 📋 Sumário
1. [Visão Geral](#visão-geral)
2. [Instalação e Rodando](#instalação-e-rodando)
3. [Variáveis de Ambiente](#variáveis-de-ambiente)
4. [Estrutura de Pastas](#estrutura-de-pastas)
5. [Scripts Disponíveis](#scripts-disponíveis)

---

## 🎯 Visão Geral

O frontend consome a API do CMS Django para renderizar conteúdo dinâmico.
- **Porta Local (npm)**: `3000`
- **Porta Docker**: `8080`
- **Comunicação**: API REST

## 🚀 Instalação e Rodando

### Opção A: Via Docker (Recomendado)
Na raiz do projeto (onde está o `docker-compose.yml`):
```bash
docker-compose up -d --build
```
Acesse em: `http://localhost:8080`

### Opção B: Desenvolvimento Local (Sem Docker)

1. Instale as dependências:
```bash
npm install
```

2. Crie o arquivo `.env` na raiz do frontend (veja seção abaixo).

3. Inicie o servidor:
```bash
npm start
```
Acesse em: `http://localhost:3000`

---

## 🔑 Variáveis de Ambiente

Crie um arquivo `.env` na pasta `Front-End React/`:

```env
# URL da API do Django (Backend)
REACT_APP_BASE_URL=http://localhost:8000/api
```

---

## 📁 Estrutura de Pastas

```
src/
├── components/       # Componentes reutilizáveis (Header, Footer, UI)
├── pages/           # Páginas principais (Home, Quem Somos, etc)
├── services/        # Configuração da API (axios)
├── styles/          # Estilos globais e temas
├── App.js           # Rotas e layout principal
└── index.js         # Ponto de entrada
```

## 📦 Scripts Disponíveis

- `npm start`: Roda em modo de desenvolvimento.
- `npm run build`: Gera a build de produção na pasta `build/`.
- `npm test`: Roda os testes unitários.
