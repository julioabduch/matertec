# Esquema de Fontes - Matertec

## Fontes Principais

### Inter (Fonte Universal)
- **Uso**: Toda a interface - títulos, corpo, botões, elementos
- **Características**: 
  - Moderna e profissional
  - Excelente legibilidade em todos os tamanhos
  - Otimizada para interfaces digitais
  - Suporte completo a caracteres especiais
- **Pesos disponíveis**: 300, 400, 500, 600, 700, 800, 900
- **Fallback**: system-ui, -apple-system, BlinkMacSystemFont, sans-serif
- **CDN**: Google Fonts

## Hierarquia Tipográfica Completa

### Títulos Principais
- **Hero (Display)**: 
  - Tamanho: 3.5rem (56px) / 4rem (64px) desktop
  - Peso: font-bold (700)
  - Cor: text-neutral-900
  - Uso: Títulos principais de landing pages
  - Classe: `.text-hero`

- **H1 (Title)**:
  - Tamanho: 2.25rem (36px) / 3rem (48px) desktop
  - Peso: font-semibold (600)
  - Cor: text-neutral-800
  - Uso: Títulos de páginas principais
  - Classe: `.text-title`

- **H2 (Subtitle)**:
  - Tamanho: 1.875rem (30px) / 2.25rem (36px) desktop
  - Peso: font-medium (500)
  - Cor: text-neutral-700
  - Uso: Subtítulos de seções
  - Classe: `.text-subtitle`

### Títulos Secundários
- **H3**: 1.5rem (24px) - font-medium - text-neutral-700
- **H4**: 1.25rem (20px) - font-medium - text-neutral-700
- **H5**: 1.125rem (18px) - font-medium - text-neutral-600
- **H6**: 1rem (16px) - font-medium - text-neutral-600

### Corpo de Texto
- **Body Large**:
  - Tamanho: 1.125rem (18px)
  - Peso: font-normal (400)
  - Cor: text-neutral-600
  - Uso: Texto de destaque, introduções
  - Classe: `.text-body-large`

- **Body Default**:
  - Tamanho: 1rem (16px)
  - Peso: font-normal (400)
  - Cor: text-neutral-600
  - Uso: Texto padrão, parágrafos
  - Classe: `.text-body-default`

- **Body Small**:
  - Tamanho: 0.875rem (14px)
  - Peso: font-normal (400)
  - Cor: text-neutral-500
  - Uso: Texto secundário, descrições

- **Caption**:
  - Tamanho: 0.75rem (12px)
  - Peso: font-normal (400)
  - Cor: text-neutral-500
  - Uso: Legendas, metadados
  - Classe: `.text-caption`

### Elementos Interativos
- **Button Text**:
  - Tamanho: 1rem (16px)
  - Peso: font-medium (500)
  - Uso: Texto de botões
  - Classe: `.text-button`

- **Link Text**:
  - Tamanho: 1rem (16px)
  - Peso: font-medium (500)
  - Cor: text-blue-600
  - Hover: text-blue-800

- **Label Text**:
  - Tamanho: 0.875rem (14px)
  - Peso: font-medium (500)
  - Cor: text-neutral-700

## Responsividade Tipográfica

### Mobile (< 768px)
- Hero: 2.5rem (40px)
- Title: 2rem (32px)
- Subtitle: 1.5rem (24px)
- Body: 1rem (16px)
- Caption: 0.875rem (14px)

### Tablet (768px - 1024px)
- Hero: 3rem (48px)
- Title: 2.5rem (40px)
- Subtitle: 1.875rem (30px)
- Body: 1rem (16px)
- Caption: 0.875rem (14px)

### Desktop (> 1024px)
- Hero: 4rem (64px)
- Title: 3rem (48px)
- Subtitle: 2.25rem (36px)
- Body: 1.125rem (18px)
- Caption: 1rem (16px)

## Line Height (Altura da Linha)

### Títulos
- Hero: leading-tight (1.25)
- Title: leading-tight (1.25)
- Subtitle: leading-snug (1.375)
- H3-H6: leading-normal (1.5)

### Corpo
- Body Large: leading-relaxed (1.625)
- Body Default: leading-relaxed (1.625)
- Body Small: leading-normal (1.5)
- Caption: leading-normal (1.5)

### Interativos
- Buttons: leading-none (1)
- Links: leading-normal (1.5)
- Labels: leading-normal (1.5)

## Letter Spacing

- **Títulos Grandes** (Hero, H1): tracking-tight (-0.025em)
- **Títulos Médios** (H2, H3): tracking-normal (0em)
- **Corpo de Texto**: tracking-normal (0em)
- **Texto Pequeno**: tracking-wide (0.025em)
- **Botões**: tracking-wide (0.025em)

## Configuração Tailwind

### Famílias de Fontes
```javascript
fontFamily: {
  'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
  'primary': ['Inter', 'system-ui', 'sans-serif'],
  'body': ['Inter', 'system-ui', 'sans-serif']
}
```

## Classes CSS Customizadas

```css
/* Família de fontes */
.font-primary { font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif; }
.font-body { font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif; }

/* Classes semânticas */
.text-hero { 
  @apply font-primary text-5xl font-bold text-neutral-900 leading-tight tracking-tight;
}

.text-title { 
  @apply font-primary text-4xl font-semibold text-neutral-800 leading-tight;
}

.text-subtitle { 
  @apply font-primary text-2xl font-medium text-neutral-700 leading-snug;
}

.text-body-large { 
  @apply font-body text-lg text-neutral-600 leading-relaxed;
}

.text-body-default { 
  @apply font-body text-base text-neutral-600 leading-relaxed;
}

.text-caption { 
  @apply font-body text-sm text-neutral-500 leading-normal tracking-wide;
}

.text-button { 
  @apply font-primary text-base font-medium leading-none tracking-wide;
}

/* Classes responsivas */
@media (min-width: 768px) {
  .text-hero { @apply text-6xl; }
  .text-title { @apply text-5xl; }
  .text-subtitle { @apply text-3xl; }
}

@media (min-width: 1024px) {
  .text-hero { @apply text-7xl; }
  .text-title { @apply text-6xl; }
  .text-subtitle { @apply text-4xl; }
  .text-body-large { @apply text-xl; }
  .text-caption { @apply text-base; }
}
```

## Boas Práticas

### Hierarquia Visual
1. Use apenas uma fonte (Inter) para manter consistência
2. Varie peso e tamanho para criar hierarquia
3. Mantenha contraste adequado com o background
4. Limite a 3-4 tamanhos diferentes por página

### Legibilidade
- Mínimo 16px para texto de corpo em mobile
- Máximo 75 caracteres por linha
- Espaçamento adequado entre parágrafos
- Contraste mínimo 4.5:1 (WCAG AA)

### Performance
- Carregue apenas os pesos necessários
- Use font-display: swap para melhor performance
- Considere preload para fontes críticas

### Acessibilidade
- Permita zoom até 200% sem quebrar layout
- Mantenha hierarquia semântica (h1, h2, h3...)
- Use rem/em para tamanhos escaláveis
- Teste com leitores de tela

## Exemplos de Uso

### HTML/Vue
```vue
<template>
  <!-- Título principal -->
  <h1 class="text-hero text-primary-800">
    Manutenção Profissional
  </h1>
  
  <!-- Título de seção -->
  <h2 class="text-title text-gradient-primary">
    Nossos Serviços
  </h2>
  
  <!-- Subtítulo -->
  <h3 class="text-subtitle text-neutral-700">
    Reparo Rápido
  </h3>
  
  <!-- Texto corpo -->
  <p class="text-body-default text-neutral-600">
    Descrição detalhada do serviço oferecido.
  </p>
  
  <!-- Botão -->
  <button class="btn-primary text-button">
    Solicitar Orçamento
  </button>
  
  <!-- Legenda -->
  <span class="text-caption text-neutral-500">
    * Disponível 24/7
  </span>
</template>
```

### Combinações Recomendadas

#### Para Títulos Principais
```css
text-hero + text-primary-800 + font-public-bold
```

#### Para Títulos de Seção
```css
text-title + text-gradient-primary + font-public-semibold
```

#### Para Subtítulos
```css
text-subtitle + text-neutral-700 + font-public-medium
```

#### Para Corpo de Texto
```css
text-body-default + text-neutral-600 + font-public-normal
```

## Responsividade

Todos os tamanhos de fonte são responsivos e se adaptam automaticamente:

```vue
<!-- Título que se adapta ao tamanho da tela -->
<h1 class="text-hero md:text-6xl lg:text-7xl">
  Título Responsivo
</h1>
```

## Acessibilidade

- **Contraste**: Todas as combinações de cores seguem WCAG 2.1 AA
- **Legibilidade**: Public Sans foi escolhida por sua excelente legibilidade
- **Tamanhos**: Tamanhos mínimos respeitam diretrizes de acessibilidade
- **Line Height**: Espaçamento otimizado para leitura confortável

## Carregamento das Fontes

As fontes são carregadas via Google Fonts no arquivo `main.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
```

## Performance

- **Display Swap**: Garante que o texto seja visível durante o carregamento
- **Preload**: Considere adicionar preload para fontes críticas
- **Fallbacks**: Sistema de fallback robusto configurado

---

**Desenvolvido para Matertec - Manutenção de Máquinas de Lavar e Secar**