# Esquema de Cores - Site Manutenção de Máquinas de Lavar

## Paleta de Cores Principal

### 🔵 Primary (Azul) - Confiança e Tecnologia
- **Uso**: Botões principais, links, elementos de destaque
- **Variações**: `primary-50` até `primary-950`
- **Cor principal**: `primary-500` (#0ea5e9)
- **Gradiente**: `bg-gradient-primary`

### 🔘 Secondary (Cinza Azulado) - Profissionalismo
- **Uso**: Textos secundários, bordas, elementos neutros
- **Variações**: `secondary-50` até `secondary-950`
- **Cor principal**: `secondary-500` (#64748b)
- **Gradiente**: `bg-gradient-secondary`

### 🟡 Accent (Amarelo Dourado) - Destaque e Energia
- **Uso**: Call-to-actions, destaques especiais, preços
- **Variações**: `accent-50` até `accent-950`
- **Cor principal**: `accent-500` (#eab308)
- **Gradiente**: `bg-gradient-accent`

## Cores Funcionais

### 🟢 Success (Verde) - Sucesso e Confiabilidade
- **Uso**: Mensagens de sucesso, status positivos
- **Variações**: `success-50` até `success-950`
- **Cor principal**: `success-500` (#22c55e)

### 🟠 Warning (Laranja) - Atenção e Manutenção
- **Uso**: Alertas, manutenções programadas
- **Variações**: `warning-50` até `warning-950`
- **Cor principal**: `warning-500` (#f59e0b)

### 🔴 Danger (Vermelho) - Urgência e Problemas
- **Uso**: Erros, problemas críticos, emergências
- **Variações**: `danger-50` até `danger-950`
- **Cor principal**: `danger-500` (#ef4444)

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