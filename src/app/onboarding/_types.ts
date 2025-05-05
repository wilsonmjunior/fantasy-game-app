import React from 'react';

// Este arquivo não será tratado como rota pelo expo-router porque começa com '_'
// Arquivos que começam com _ são ignorados pelo sistema de roteamento

declare module './page1' {
  import { FC } from 'react';
  const OnboardingPage1: FC;
  export default OnboardingPage1;
}

declare module './page2' {
  import { FC } from 'react';
  const OnboardingPage2: FC;
  export default OnboardingPage2;
}

declare module './page3' {
  import { FC } from 'react';
  const OnboardingPage3: FC;
  export default OnboardingPage3;
}

// Exportamos um componente vazio para evitar alertas de exportação padrão
export default function EmptyComponent() {
  return null;
} 