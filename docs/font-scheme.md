# Esquema de Fontes - Matertec

## Fontes Principais

### Public Sans
- **Uso**: Fonte principal do projeto
- **Características**: Moderna, limpa, excelente legibilidade
- **Aplicação**: Títulos, subtítulos, botões e textos importantes
- **Pesos disponíveis**: 100, 200, 300, 400, 500, 600, 700, 800, 900

### Inter
- **Uso**: Fonte secundária/alternativa
- **Características**: Otimizada para interfaces digitais
- **Aplicação**: Textos longos, corpo de texto
- **Pesos disponíveis**: 100, 200, 300, 400, 500, 600, 700, 800, 900

## Configuração Tailwind

### Famílias de Fontes
```javascript
fontFamily: {
  'sans': ['Public Sans', 'Inter', 'system-ui', 'sans-serif'],
  'primary': ['Public Sans', 'sans-serif'],
  'secondary': ['Inter', 'sans-serif'],
  'display': ['Public Sans', 'sans-serif'],
  'body': ['Public Sans', 'sans-serif']
}
```

### Tamanhos Semânticos
- `text-hero`: 3.5rem - Para títulos principais (Hero)
- `text-title`: 2.5rem - Para títulos de seção
- `text-subtitle`: 1.5rem - Para subtítulos
- `text-body-lg`: 1.125rem - Para texto corpo grande
- `text-body`: 1rem - Para texto corpo padrão
- `text-caption`: 0.875rem - Para legendas e textos pequenos
- `text-button`: 1rem - Para texto de botões

## Classes Utilitárias Prontas

### Classes Semânticas
```css
.text-hero          /* Título principal - Public Sans Bold 3.5rem */
.text-title         /* Título de seção - Public Sans Semibold 2.5rem */
.text-subtitle      /* Subtítulo - Public Sans Medium 1.5rem */
.text-body-large    /* Corpo grande - Public Sans Regular 1.125rem */
.text-body-default  /* Corpo padrão - Public Sans Regular 1rem */
.text-caption       /* Legenda - Public Sans Regular 0.875rem */
.text-button        /* Botão - Public Sans Medium 1rem */
```

### Classes de Peso Específicas
```css
.font-public-thin       /* Public Sans Thin (100) */
.font-public-light      /* Public Sans Light (300) */
.font-public-normal     /* Public Sans Regular (400) */
.font-public-medium     /* Public Sans Medium (500) */
.font-public-semibold   /* Public Sans Semibold (600) */
.font-public-bold       /* Public Sans Bold (700) */
.font-public-extrabold  /* Public Sans Extra Bold (800) */
.font-public-black      /* Public Sans Black (900) */
```

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