# 🏆 Fantasy Game

<div align="center">
  <img src="assets/images/logo.png" alt="Fantasy Game Logo" width="200" height="200"/>
  <p><strong>Crie times virtuais, compita com seus amigos e acompanhe seus jogadores favoritos</strong></p>
</div>

## 📋 Sobre o Projeto

Fantasy Game é uma aplicação móvel onde usuários podem montar times virtuais com jogadores reais, acompanhar competições ao vivo e criar ligas personalizadas para competir com amigos. A aplicação foi desenvolvida usando React Native com Expo, seguindo uma arquitetura limpa e bem estruturada.

## 🛠️ Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)

## 🏗️ Arquitetura

O projeto segue uma arquitetura em camadas inspirada nos princípios de Clean Architecture:

```
src/
├── @types/             # Definições de tipos globais
├── app/                # Rotas e telas (Expo Router)
├── application/        # Lógica de aplicação e serviços
├── constants/          # Constantes da aplicação
├── domain/             # Entidades e regras de negócio
├── infrastructure/     # Implementações de APIs e serviços
├── presentation/       # Componentes e hooks de UI
└── status-bar/         # Configuração da barra de status
```

## 🚀 Setup do Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão compatível com seu ambiente)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/fantasygame.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd fantasygame
   ```

3. Instale as dependências:

   ```bash
   yarn install
   # ou
   npm install
   ```

4. Configurando e resolvendo problemas:

   Em caso de problemas com dependências, especialmente com versões do Node.js:

   ```bash
   yarn install --legacy-peer-deps
   ```

   Caso específico para expo-linear-gradient:

   ```bash
   yarn add expo-linear-gradient --legacy-peer-deps
   ```

### ▶️ Executando o Projeto

1. Inicie o servidor de desenvolvimento:

   ```bash
   yarn start
   # ou
   npx expo start
   ```

2. Escolha o ambiente para executar:

   - Pressione `i` para iOS
   - Pressione `a` para Android
   - Escaneie o QR code com o app Expo Go no seu dispositivo

3. Para resetar o cache (se necessário):
   ```bash
   yarn start --clear
   ```

## 📱 Funcionalidades

### Onboarding

A aplicação possui um fluxo de onboarding que orienta os novos usuários, apresentando as principais funcionalidades:

- Bem-vindo e Visão Geral
- Acompanhamento de Competições
- Criação de Ligas Personalizadas

### Login e Autenticação

- Login com email
- Login com Apple
- Login com Google

### Jogos ao Vivo

Visualize partidas acontecendo em tempo real, com:

- Placar atual
- Marcadores de gols
- Tempo de jogo
- Escudos dos times

### Ligas Personalizadas

Crie ligas com seus amigos, defina regras e acompanhe o desempenho.

## 📁 Estrutura de Pastas

```
├── assets/             # Imagens e recursos estáticos
├── src/                # Código-fonte da aplicação
│   ├── @types/         # Tipagens globais
│   ├── app/            # Rotas e configuração (Expo Router)
│   │   ├── (tabs)/     # Navegação por tabs
│   │   ├── onboarding/ # Fluxo de onboarding
│   │   └── index.tsx   # Tela de entrada/login
│   ├── application/    # Lógica de aplicação
│   │   └── services/   # Serviços da aplicação
│   ├── constants/      # Constantes como cores e temas
│   ├── domain/         # Entidades e casos de uso
│   │   └── entities/   # Modelos de dados
│   ├── infrastructure/ # Implementações externas
│   │   ├── api/        # Configuração de API
│   │   └── repositories/ # Acesso a dados
│   └── presentation/   # Componentes de UI
│       ├── components/ # Componentes reutilizáveis
│       ├── hooks/      # Hooks personalizados
│       └── screens/    # Componentes específicos por tela
└── metro.config.js     # Configuração do bundler
```

## ⚙️ Configurações Personalizadas

### Cores e Estilos

As cores do aplicativo são definidas em `src/constants/Colors.ts` e seguem uma paleta consistente com variações para cada cor.

### Fontes

O projeto utiliza a família de fontes Poppins com diferentes pesos:

- Poppins_400Regular
- Poppins_500Medium
- Poppins_600SemiBold
- Poppins_700Bold
- Poppins_900Black

As fontes são carregadas no `src/app/_layout.tsx`.

### Reanimated e Animações

Para animações fluídas, o projeto usa Reanimated. Certifique-se de que o plugin apropriado esteja configurado em `babel.config.js`.

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie sua branch de feature (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add some amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

---

<div align="center">
  <p>Desenvolvido com ❤️ por <b>Wilson Junior</b></p>
</div>
