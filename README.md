# 🐾 PetCare – Sistema de Agendamento Pet

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss)

> Sistema completo de agendamento de serviços para pets, desenvolvido com React e Next.js. Permite criar, visualizar e gerenciar agendamentos com persistência de dados no localStorage.

---

## 📸 Prévia

| Home | Confirmação | Dashboard |
|------|-------------|-----------|
| Formulário de agendamento | Dados do agendamento | Agenda geral com estatísticas |

---

## ✨ Funcionalidades

- 📋 **Agendamento de serviços** — formulário completo com validação
- ✅ **Confirmação visual** — página com resumo do agendamento realizado
- 📊 **Dashboard administrativo** — lista e estatísticas de todos os agendamentos
- 🔄 **Gerenciamento de status** — confirmar, cancelar e remover agendamentos
- 💾 **Persistência de dados** — agendamentos salvos no localStorage
- 🧭 **Navegação entre páginas** — sem recarregamento (SPA)
- 📱 **Layout responsivo** — funciona em desktop e mobile

---

## 🗂️ Estrutura do Projeto

```
src/
├── app/
│   ├── _components/          # Componentes da landing page
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── footer.tsx
│   │   └── aos-init.tsx
│   ├── confirm/
│   │   └── page.tsx          # Página de confirmação do agendamento
│   ├── dashboard/
│   │   └── page.tsx          # Agenda geral com estatísticas
│   ├── globals.css
│   ├── layout.tsx            # Layout global com NavHeader
│   └── page.tsx              # Página inicial (Home)
├── components/               # Componentes reutilizáveis
│   ├── NavHeader.tsx         # Header fixo com navegação
│   ├── AppointmentForm.tsx   # Formulário de agendamento
│   ├── AppointmentCard.tsx   # Card de agendamento com ações
│   ├── StatsCard.tsx         # Card de estatísticas
│   └── CTA.tsx               # Seção de chamada para ação
├── hooks/
│   └── useAppointments.ts    # Hook centralizado de agendamentos
├── data/
│   └── services.ts           # Lista de serviços disponíveis
├── lib/
│   └── storage.ts            # Funções de persistência no localStorage
└── styles/                   # CSS Modules por responsabilidade
    ├── layout.module.css
    ├── form.module.css
    └── dashboard.module.css
```

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/thiagorefatorandogit/Pagina-Pet.git

# Entre na pasta do projeto
cd Pagina-Pet

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:3000** no navegador.

---

## 📄 Páginas

### `/` — Home
- Seção de apresentação do PetCare (Hero)
- Seção Sobre
- Serviços oferecidos
- **Formulário de agendamento**
- Chamada para ação (CTA)
- Depoimentos de clientes
- Footer com marcas parceiras

### `/confirm` — Confirmação
- Mensagem de sucesso
- Exibição dos dados do último agendamento
- Botão para voltar ao início
- Botão para acessar a agenda geral

### `/dashboard` — Agenda Geral
- Estatísticas: Total, Em análise, Confirmados, Cancelados
- Lista completa de agendamentos
- Ações por agendamento: Confirmar, Cancelar, Remover
- Estado vazio com chamada para ação

---

## 🧩 Componentes Principais

### `useAppointments`
Hook centralizado que gerencia todo o estado dos agendamentos:
```ts
const { appointments, create, confirm, cancel, remove, stats } = useAppointments();
```

### `AppointmentForm`
Formulário completo com os campos:
- Nome do Pet
- Nome do Responsável
- Telefone
- Serviço (seleção)
- Data e Horário
- Observações (opcional)

### `AppointmentCard`
Card com badge de status colorido e botões de ação:
- 🟡 **Em análise** — agendamento pendente
- 🟢 **Confirmado** — atendimento confirmado
- 🔴 **Cancelado** — atendimento cancelado

---

## 🎨 Design

- **Paleta de cores:** Azul Royal (`#2563eb`) como cor principal
- **CSS Modules** organizados por responsabilidade
- **Variáveis CSS** para cores, espaçamentos e tipografia
- Cards com sombra, bordas arredondadas e efeitos de hover
- Layout responsivo com Flexbox e Grid
- Header fixo com navegação ativa destacada

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| Next.js 15 | Framework React com App Router |
| React 19 | Biblioteca de UI |
| TypeScript | Tipagem estática |
| Tailwind CSS 4 | Estilização utilitária |
| CSS Modules | Estilos encapsulados por componente |
| localStorage | Persistência de dados no cliente |
| AOS | Animações ao rolar a página |
| Embla Carousel | Carrossel de depoimentos |

---

## 📚 Aprendizados

Este projeto foi desenvolvido como parte de um currículo de aprendizado em React + Next.js, cobrindo:

- ✅ Roteamento com App Router do Next.js
- ✅ Diferença entre Server e Client Components
- ✅ Gerenciamento de estado com React Hooks
- ✅ Persistência de dados com localStorage
- ✅ CSS Modules e variáveis CSS
- ✅ Componentização e reutilização de código
- ✅ Tipagem com TypeScript
- ✅ Versionamento com Git e GitHub

---

## 👤 Autor

Feito por **Thiago** — [@thiagorefatorandogit](https://github.com/thiagorefatorandogit)

---

⭐ Se gostou do projeto, deixa uma estrela no repositório!

