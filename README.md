# 🎬 TMDb Filmes - Aplicação React

**Classificação de filmes**, uma aplicação construída com **React + TypeScript**, que consome a **API pública do The Movie Database (TMDb)** para exibir os principais filmes em destaque e lançamentos recentes.

---

## 🚀 Funcionalidades

- 🔍 Visualização de **filmes populares**
- 🗓️ Acompanhamento de **lançamentos do ano atual**
- 📱 Interface **responsiva**
- ⭐ Exibição de avaliação (nota) dos filmes
- 🎨 Design com uso de **SASS (SCSS)** e **Bootstrap 5**

---

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [SASS (SCSS)](https://sass-lang.com/)
- [Bootstrap 5+](https://getbootstrap.com/)
- [TMDb API](https://www.themoviedb.org/documentation/api)

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/Gabrielmarcs/classificacao-de-filmes.git

# Acesse a pasta
cd classificacao-de-filmes

# Instale as dependências
npm install

# Rode a aplicação
npm run dev
```

Acesse no navegador: `http://localhost:5173`

---

## 🔑 Configurando a API do TMDb

1. Acesse: [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
2. Crie uma conta e gere sua chave de API
3. Solicite uma chave de API (Bearer Token).
4. Após obter sua chave, abra o arquivo src/servicos/api.ts e substitua "suaChave" pela sua chave real
---

## 📁 Estrutura de Pastas

```
src/
│
├── componentes/
│   └── Header.tsx
├── paginas/
│   ├── Populares.tsx
│   └── Lancamentos.tsx
├── estilos/
│   └── lancamentos.scss
├── servicos/
│   └── api.ts
├── App.tsx
└── main.tsx
```


---
