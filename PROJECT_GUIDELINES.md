# Matertec - Diretrizes do Projeto

## 📁 Estrutura de Pastas

```
matertec/
├── assets/                 # Recursos estáticos processados
│   └── css/
│       └── main.css        # Estilos principais do projeto
├── components/             # Componentes Vue reutilizáveis
│   └── sections/          # Componentes de seções específicas
│       └── HeroSection.vue
├── docs/                  # Documentação do projeto
│   ├── color-scheme.md    # Esquema de cores
│   └── font-scheme.md     # Esquema de fontes
├── pages/                 # Páginas da aplicação (roteamento automático)
│   └── index.vue         # Página inicial
├── public/               # Arquivos estáticos servidos diretamente
│   ├── favicon.ico
│   ├── images/          # Imagens do projeto
│   │   └── sections/    # Imagens organizadas por seção
│   └── robots.txt
├── app.vue              # Componente raiz da aplicação
├── nuxt.config.ts       # Configuração do Nuxt
├── tailwind.config.js   # Configuração do Tailwind CSS
└── tsconfig.json        # Configuração do TypeScript
```

## 🎨 Paleta de Cores

### Cores Primárias
- **Azul Principal**: `#1E40AF` (blue-800)
- **Azul Claro**: `#3B82F6` (blue-500)
- **Azul Escuro**: `#1E3A8A` (blue-900)

### Cores Neutras
- **Branco**: `#FFFFFF` (white)
- **Cinza 50**: `#F9FAFB` (neutral-50)
- **Cinza 100**: `#F3F4F6` (neutral-100)
- **Cinza 200**: `#E5E7EB` (neutral-200)
- **Cinza 300**: `#D1D5DB` (neutral-300)
- **Cinza 400**: `#9CA3AF` (neutral-400)
- **Cinza 500**: `#6B7280` (neutral-500)
- **Cinza 600**: `#4B5563` (neutral-600)
- **Cinza 700**: `#374151` (neutral-700)
- **Cinza 800**: `#1F2937` (neutral-800)
- **Cinza 900**: `#111827` (neutral-900)

### Cores de Destaque
- **Verde Sucesso**: `#10B981` (emerald-500)
- **Vermelho Erro**: `#EF4444` (red-500)
- **Amarelo Aviso**: `#F59E0B` (amber-500)
- **Azul Info**: `#3B82F6` (blue-500)

## 🔤 Tipografia

### Fontes
- **Fonte Primária**: Inter (títulos e elementos importantes)
- **Fonte Corpo**: Inter (texto corrido e conteúdo)

### Classes de Texto Semânticas
- `.text-hero`: Texto principal de destaque (text-5xl, font-bold)
- `.text-title`: Títulos de seção (text-4xl, font-semibold)
- `.text-subtitle`: Subtítulos (text-2xl, font-medium)
- `.text-body-large`: Texto corpo grande (text-lg)
- `.text-body-default`: Texto corpo padrão (text-base)
- `.text-caption`: Texto pequeno/legendas (text-sm)
- `.text-button`: Texto de botões (text-base, font-medium)

## 🎯 Componentes

### Estrutura de Componentes
- **Seções**: Componentes grandes que representam seções completas da página
- **Elementos**: Componentes menores e reutilizáveis (botões, cards, etc.)
- **Layout**: Componentes de estrutura (header, footer, sidebar)

### Convenções de Nomenclatura
- Componentes: PascalCase (ex: `HeroSection.vue`)
- Arquivos: kebab-case para pastas, PascalCase para componentes
- Classes CSS: kebab-case (ex: `.hero-section`)
- Variáveis: camelCase

## 📱 Responsividade

### Breakpoints (Tailwind CSS)
- **sm**: 640px e acima (tablets pequenos)
- **md**: 768px e acima (tablets)
- **lg**: 1024px e acima (laptops)
- **xl**: 1280px e acima (desktops)
- **2xl**: 1536px e acima (telas grandes)

### Abordagem Mobile-First
- Desenvolver primeiro para mobile
- Usar classes responsivas do Tailwind (sm:, md:, lg:, xl:)
- Testar em diferentes tamanhos de tela

## 🛠️ Tecnologias

### Stack Principal
- **Framework**: Nuxt.js 4.x
- **CSS**: Tailwind CSS
- **TypeScript**: Para tipagem estática
- **Vue 3**: Composition API

### Ferramentas de Desenvolvimento
- **Vite**: Build tool e dev server
- **PostCSS**: Processamento de CSS
- **ESLint**: Linting de código
- **Prettier**: Formatação de código

## 📋 Convenções de Código

### Vue/Nuxt
- Usar Composition API com `<script setup>`
- Componentes em PascalCase
- Props tipadas com TypeScript
- Emits explícitos quando necessário

### CSS/Tailwind
- Priorizar classes utilitárias do Tailwind
- Criar classes customizadas apenas quando necessário
- Usar variáveis CSS para valores reutilizáveis
- Evitar !important

### TypeScript
- Tipar todas as props e emits
- Usar interfaces para objetos complexos
- Evitar `any`, preferir `unknown` quando necessário

## 🚀 Performance

### Otimizações
- Lazy loading de imagens
- Code splitting automático do Nuxt
- Compressão de assets
- Otimização de fontes

### Boas Práticas
- Componentes pequenos e focados
- Evitar re-renders desnecessários
- Usar `v-memo` quando apropriado
- Otimizar imagens (WebP, tamanhos apropriados)

## 🔧 Configuração do Ambiente

### Requisitos
- Node.js 18+
- npm ou yarn
- Git

### Comandos Principais
```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

## 📝 Git Workflow

### Convenções de Commit
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação, CSS
- `refactor:` Refatoração de código
- `test:` Testes
- `chore:` Tarefas de manutenção

### Branches
- `master`: Branch principal (produção)
- `develop`: Branch de desenvolvimento
- `feature/*`: Novas funcionalidades
- `fix/*`: Correções de bugs

## 🎨 Design System

### Espaçamento
- Usar escala do Tailwind (4px base)
- Espaçamentos consistentes entre elementos
- Padding e margin em múltiplos de 4px

### Bordas e Sombras
- Border radius: rounded-lg (8px) padrão
- Sombras sutis: shadow-sm, shadow-md
- Bordas: border-neutral-200

### Animações
- Transições suaves: transition-all duration-200
- Hover states consistentes
- Loading states quando necessário

---

**Última atualização**: Janeiro 2025
**Versão**: 1.0.0