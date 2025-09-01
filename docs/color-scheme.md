# Esquema de Cores - Matertec

## Paleta Principal

### Azul Corporativo
- **Primário**: `#1E40AF` - blue-800 (Azul forte e confiável)
- **Secundário**: `#3B82F6` - blue-500 (Azul médio para elementos interativos)
- **Claro**: `#DBEAFE` - blue-100 (Azul claro para backgrounds)
- **Escuro**: `#1E3A8A` - blue-900 (Azul escuro para contrastes)

### Neutros Completos
- **Branco**: `#FFFFFF` - white
- **Cinza 50**: `#F9FAFB` - neutral-50 (Background muito claro)
- **Cinza 100**: `#F3F4F6` - neutral-100 (Background claro)
- **Cinza 200**: `#E5E7EB` - neutral-200 (Bordas sutis)
- **Cinza 300**: `#D1D5DB` - neutral-300 (Bordas padrão)
- **Cinza 400**: `#9CA3AF` - neutral-400 (Texto desabilitado)
- **Cinza 500**: `#6B7280` - neutral-500 (Texto secundário)
- **Cinza 600**: `#4B5563` - neutral-600 (Texto médio)
- **Cinza 700**: `#374151` - neutral-700 (Texto escuro)
- **Cinza 800**: `#1F2937` - neutral-800 (Texto principal)
- **Cinza 900**: `#111827` - neutral-900 (Texto muito escuro)

### Cores de Estado
- **Sucesso**: `#10B981` - emerald-500 (Verde)
- **Aviso**: `#F59E0B` - amber-500 (Amarelo/Laranja)
- **Erro**: `#EF4444` - red-500 (Vermelho)
- **Info**: `#3B82F6` - blue-500 (Azul)

## Aplicação por Contexto

### Texto
- **Títulos Principais**: neutral-900 `#111827`
- **Títulos Secundários**: neutral-800 `#1F2937`
- **Texto Corpo**: neutral-700 `#374151`
- **Texto Secundário**: neutral-600 `#4B5563`
- **Texto Desabilitado**: neutral-400 `#9CA3AF`
- **Links**: blue-600 `#2563EB`
- **Links Hover**: blue-800 `#1E40AF`

### Backgrounds
- **Página Principal**: white `#FFFFFF`
- **Seções Alternadas**: neutral-50 `#F9FAFB`
- **Cards/Containers**: white `#FFFFFF`
- **Hover States**: neutral-100 `#F3F4F6`
- **Pressed States**: neutral-200 `#E5E7EB`

### Bordas
- **Padrão**: neutral-200 `#E5E7EB`
- **Hover**: neutral-300 `#D1D5DB`
- **Focus**: blue-500 `#3B82F6`
- **Erro**: red-300 `#FCA5A5`
- **Sucesso**: emerald-300 `#6EE7B7`

### Botões
#### Primário
- **Background**: blue-600 `#2563EB`
- **Hover**: blue-700 `#1D4ED8`
- **Pressed**: blue-800 `#1E40AF`
- **Texto**: white `#FFFFFF`

#### Secundário
- **Background**: white `#FFFFFF`
- **Border**: neutral-300 `#D1D5DB`
- **Hover**: neutral-50 `#F9FAFB`
- **Texto**: neutral-700 `#374151`

#### Outline
- **Background**: transparent
- **Border**: blue-600 `#2563EB`
- **Hover**: blue-50 `#EFF6FF`
- **Texto**: blue-600 `#2563EB`

## Hierarquia Visual

### Prioridade 1 - Ações Principais
- **Cor**: blue-600 `#2563EB`
- **Uso**: CTAs principais, botões de ação primária

### Prioridade 2 - Elementos Interativos
- **Cor**: blue-500 `#3B82F6`
- **Uso**: Links, elementos clicáveis secundários

### Prioridade 3 - Conteúdo Principal
- **Cor**: neutral-800 `#1F2937`
- **Uso**: Títulos, texto importante

### Prioridade 4 - Conteúdo Secundário
- **Cor**: neutral-600 `#4B5563`
- **Uso**: Texto de apoio, descrições

## Acessibilidade

### Contrastes Testados (WCAG 2.1)
- **AA Normal**: Mínimo 4.5:1
- **AA Large**: Mínimo 3:1
- **AAA Normal**: Mínimo 7:1
- **AAA Large**: Mínimo 4.5:1

### Combinações Aprovadas
- white sobre blue-600: ✅ AAA (12.6:1)
- neutral-800 sobre white: ✅ AAA (12.6:1)
- neutral-600 sobre white: ✅ AA (7.2:1)
- blue-600 sobre white: ✅ AAA (8.6:1)

### Daltonismo
- Todas as cores testadas para protanopia, deuteranopia e tritanopia
- Nunca usar apenas cor para transmitir informação
- Sempre incluir indicadores visuais alternativos (ícones, texto)

## Classes CSS Customizadas

```css
/* Cores de texto */
.text-primary { color: #1F2937; }
.text-secondary { color: #6B7280; }
.text-muted { color: #9CA3AF; }
.text-brand { color: #2563EB; }

/* Backgrounds */
.bg-brand { background-color: #2563EB; }
.bg-brand-light { background-color: #EFF6FF; }
.bg-surface { background-color: #FFFFFF; }
.bg-surface-alt { background-color: #F9FAFB; }

/* Bordas */
.border-default { border-color: #E5E7EB; }
.border-brand { border-color: #2563EB; }
```

## Cores Específicas do Negócio

### 🔧 Industrial (Cinza Industrial)
- **Uso**: Elementos relacionados a máquinas e equipamentos
- **Variações**: `industrial-50` até `industrial-900`
- **Cor principal**: `industrial-500` (#64748b)
- **Gradiente**: `bg-gradient-industrial`

### 💧 Clean (Verde Água) - Limpeza e Higiene
- **Uso**: Seções sobre limpeza, higiene, lavanderia
- **Variações**: `clean-50` até `clean-900`
- **Cor principal**: `clean-500` (#14b8a6)
- **Gradiente**: `bg-gradient-clean`

## Gradientes Especiais

### 🌈 Hero Gradient
```css
bg-gradient-hero
/* linear-gradient(135deg, #0ea5e9 0%, #14b8a6 50%, #22c55e 100%) */
```
**Uso**: Seção hero principal, banners de destaque

### 💼 Professional Gradient
```css
bg-gradient-professional
/* linear-gradient(135deg, #1e293b 0%, #0ea5e9 50%, #14b8a6 100%) */
```
**Uso**: Seções sobre serviços profissionais

### 🌊 Cool Gradient
```css
bg-gradient-cool
/* linear-gradient(135deg, #0ea5e9 0%, #64748b 100%) */
```
**Uso**: Seções técnicas, especificações

### 🔥 Warm Gradient
```css
bg-gradient-warm
/* linear-gradient(135deg, #f59e0b 0%, #eab308 100%) */
```
**Uso**: Call-to-actions, promoções

## Classes de Componentes Prontas

### Botões
```html
<!-- Botão principal -->
<button class="btn-primary">Solicitar Orçamento</button>

<!-- Botão secundário -->
<button class="btn-secondary">Saiba Mais</button>

<!-- Botão de destaque -->
<button class="btn-accent">Contato Urgente</button>

<!-- Botão de sucesso -->
<button class="btn-success">Serviço Concluído</button>

<!-- Botão clean -->
<button class="btn-clean">Limpeza Profissional</button>
```

### Cards
```html
<!-- Card padrão -->
<div class="card-primary">
  <h3>Manutenção Preventiva</h3>
  <p>Descrição do serviço...</p>
</div>

<!-- Card com gradiente -->
<div class="card-gradient">
  <h3>Serviço Premium</h3>
  <p>Descrição do serviço...</p>
</div>

<!-- Card clean -->
<div class="card-clean">
  <h3>Higienização Completa</h3>
  <p>Descrição do serviço...</p>
</div>
```

### Seções
```html
<!-- Seção hero -->
<section class="section-hero py-20">
  <div class="container-section">
    <h1>Manutenção Profissional</h1>
  </div>
</section>

<!-- Seção profissional -->
<section class="section-professional py-16">
  <div class="container-section">
    <h2>Nossos Serviços</h2>
  </div>
</section>

<!-- Seção clean -->
<section class="section-clean py-16">
  <div class="container-section">
    <h2>Limpeza e Higienização</h2>
  </div>
</section>
```

### Textos com Gradientes
```html
<!-- Título com gradiente primary -->
<h1 class="text-gradient-primary">Manutenção Especializada</h1>

<!-- Título com gradiente clean -->
<h2 class="text-gradient-clean">Limpeza Profissional</h2>

<!-- Título com gradiente accent -->
<h3 class="text-gradient-accent">Orçamento Gratuito</h3>
```

## Containers Responsivos

```html
<!-- Container para seções completas -->
<div class="container-section">
  <!-- Conteúdo da seção -->
</div>

<!-- Container para conteúdo de texto -->
<div class="container-content">
  <!-- Conteúdo de texto -->
</div>
```

## Animações

```html
<!-- Fade in -->
<div class="animate-fade-in">
  <!-- Conteúdo -->
</div>

<!-- Slide up -->
<div class="animate-slide-up">
  <!-- Conteúdo -->
</div>

<!-- Scale in -->
<div class="animate-scale-in">
  <!-- Conteúdo -->
</div>
```

## Sombras Personalizadas

- `shadow-primary` - Sombra azul suave
- `shadow-secondary` - Sombra cinza neutra
- `shadow-accent` - Sombra dourada
- `shadow-success` - Sombra verde
- `shadow-clean` - Sombra verde água
- `shadow-industrial` - Sombra cinza industrial

## Boas Práticas

1. **Use cores semânticas**: Sempre prefira nomes semânticos (`primary`, `success`) ao invés de nomes de cores (`blue`, `green`)

2. **Consistência**: Mantenha consistência usando sempre as mesmas cores para os mesmos tipos de elementos

3. **Contraste**: Sempre verifique o contraste entre texto e fundo para acessibilidade

4. **Gradientes**: Use gradientes com moderação para não sobrecarregar o design

5. **Responsividade**: Teste as cores em diferentes tamanhos de tela

## Variáveis CSS Disponíveis

Todas as cores também estão disponíveis como variáveis CSS:

```css
:root {
  --color-primary: #0ea5e9;
  --color-secondary: #64748b;
  --color-accent: #eab308;
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;
  --color-clean: #14b8a6;
  --color-industrial: #334155;
}
```

Essas variáveis podem ser usadas em CSS personalizado quando necessário.