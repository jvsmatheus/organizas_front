# Organizas App

Aplicativo cliente do Organizas, uma aplicação para organizar listas de compras pessoais. O projeto está em desenvolvimento e usa Angular, Ionic e Capacitor para oferecer uma interface web preparada para execução em dispositivos móveis.

## Estado atual

- Tela de login com validação de e-mail e senha e chamada ao endpoint de autenticação da API.
- Tela de criação de conta com validações de e-mail, senha e confirmação de senha. O envio do formulário ainda não está conectado à API.
- Serviço para consultar o perfil do usuário na API.
- Serviço local inicial para criação e remoção de listas, ainda sem integração com a API.
- Estrutura Android configurada com Capacitor.

As rotas disponíveis atualmente são `/login` e `/create-account`. O fluxo autenticado, telas de perfil e gerenciamento de listas ainda não estão implementados como funcionalidades completas no app.

## Tecnologias

- Angular 22 e TypeScript.
- Ionic 9.
- Capacitor 8 e Android.
- Bootstrap 5, Bootstrap Icons e Ionicons.
- RxJS.
- ESLint e Vitest para qualidade e testes.

## Estrutura principal

```text
src/app/
├── core/                  # Validações e modelos HTTP compartilhados
├── features/
│   ├── auth/               # Login e criação de conta
│   └── profile/            # Serviço e modelo de perfil
├── home/                   # Página inicial em desenvolvimento
├── services/               # Serviços da aplicação, incluindo listas
├── app.routes.ts           # Rotas do cliente
└── app.component.ts        # Componente raiz
```
