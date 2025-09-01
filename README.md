# 🔧 Matertec

**Site institucional da Matertec** - Especialistas em manutenção de máquinas de lavar industriais Speed Queen.

## 📋 Sobre o Projeto

Site moderno e responsivo desenvolvido com Nuxt.js 4, focado em apresentar os serviços de manutenção especializada em equipamentos Speed Queen. O projeto utiliza as melhores práticas de desenvolvimento web, design system consistente e otimização para performance.

## 🚀 Tecnologias Utilizadas

- **Framework**: [Nuxt.js 4.x](https://nuxt.com/) - Framework Vue.js para produção
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- **TypeScript**: Tipagem estática para JavaScript
- **Vue 3**: Framework JavaScript reativo
- **Vite**: Build tool e servidor de desenvolvimento
- **PostCSS**: Processamento de CSS

## 🎨 Design System

### Paleta de Cores
- **Primária**: Azul corporativo (`#2563EB`)
- **Neutros**: Escala de cinzas para texto e backgrounds
- **Estados**: Verde, amarelo e vermelho para feedback

### Tipografia
- **Fonte**: Inter - Otimizada para interfaces digitais
- **Hierarquia**: 7 níveis de títulos + variações de corpo
- **Responsiva**: Adaptação automática para diferentes telas

## 📁 Estrutura do Projeto

```
matertec/
├── assets/css/           # Estilos globais e customizações
├── components/sections/  # Componentes de seções da página
├── docs/                # Documentação do design system
├── pages/               # Páginas da aplicação (roteamento)
├── public/              # Arquivos estáticos (imagens, ícones)
├── app.vue             # Componente raiz da aplicação
├── nuxt.config.ts      # Configuração do Nuxt
├── tailwind.config.js  # Configuração do Tailwind CSS
└── PROJECT_GUIDELINES.md # Diretrizes completas do projeto
```

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Git

### Passos para Instalação

1. **Clone o repositório**
```bash
git clone git@github.com:julioabduch/matertec.git
cd matertec
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse a aplicação**
```
http://localhost:3000
```

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build para produção
npm run preview      # Preview da build de produção

# Qualidade de Código
npm run lint         # Executa linting
npm run lint:fix     # Corrige problemas de linting automaticamente

# Utilitários
npm run clean        # Limpa cache e node_modules
npm run type-check   # Verifica tipos TypeScript
```

## 🎯 Funcionalidades Principais

### ✅ Implementadas
- [x] Landing page responsiva
- [x] Seção Hero com CTA
- [x] Design system completo
- [x] Otimização de performance
- [x] SEO básico configurado
- [x] Tipografia e cores padronizadas

### 🔄 Em Desenvolvimento
- [ ] Seção de serviços
- [ ] Galeria de projetos
- [ ] Formulário de contato
- [ ] Integração com WhatsApp
- [ ] Blog/Artigos técnicos

### 📋 Roadmap
- [ ] Sistema de agendamento
- [ ] Portal do cliente
- [ ] Integração com CRM
- [ ] Multilíngue (PT/EN/ES)
- [ ] PWA (Progressive Web App)

## 🎨 Guias de Desenvolvimento

### Componentes
- Utilize Composition API com `<script setup>`
- Mantenha componentes pequenos e focados
- Siga a convenção PascalCase para nomes
- Documente props e emits com TypeScript

### Styling
- Priorize classes utilitárias do Tailwind
- Use classes semânticas customizadas quando necessário
- Mantenha consistência com o design system
- Teste responsividade em diferentes dispositivos

### Performance
- Otimize imagens (WebP, lazy loading)
- Use code splitting quando apropriado
- Minimize re-renders desnecessários
- Monitore bundle size

## 📚 Documentação Adicional

- [📋 Diretrizes Completas do Projeto](./PROJECT_GUIDELINES.md)
- [🎨 Esquema de Cores](./docs/color-scheme.md)
- [🔤 Esquema de Fontes](./docs/font-scheme.md)

## 🤝 Contribuição

### Workflow de Desenvolvimento

1. **Crie uma branch para sua feature**
```bash
git checkout -b feature/nova-funcionalidade
```

2. **Faça suas alterações seguindo as diretrizes**
- Siga as convenções de código estabelecidas
- Mantenha commits pequenos e descritivos
- Teste suas alterações localmente

3. **Commit suas alterações**
```bash
git add .
git commit -m "feat: adiciona nova funcionalidade X"
```

4. **Push e crie Pull Request**
```bash
git push origin feature/nova-funcionalidade
```

### Convenções de Commit
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação, CSS
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Manutenção

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instale a CLI da Vercel
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
npm run build

# Deploy da pasta .output/public
```

### Servidor Próprio
```bash
# Build
npm run build

# Inicie o servidor
node .output/server/index.mjs
```

## 📊 Performance

### Métricas Alvo
- **Lighthouse Score**: 90+ em todas as categorias
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### Otimizações Implementadas
- Lazy loading de imagens
- Code splitting automático
- Compressão de assets
- Otimização de fontes
- Minificação de CSS/JS

## 🔧 Troubleshooting

### Problemas Comuns

**Erro de dependência circular no CSS**
```bash
# Verifique se não há @apply referenciando a própria classe
# Exemplo: .text-hero { @apply text-hero; } ❌
```

**Servidor não inicia**
```bash
# Limpe cache e reinstale dependências
rm -rf node_modules package-lock.json
npm install
```

**Problemas de tipagem**
```bash
# Execute verificação de tipos
npm run type-check
```

## 📞 Suporte

- **Desenvolvedor**: [Julio Abduch](https://github.com/julioabduch)
- **Email**: contato@matertec.com.br
- **Issues**: [GitHub Issues](https://github.com/julioabduch/matertec/issues)

## 📄 Licença

Este projeto é propriedade da Matertec. Todos os direitos reservados.

---

**Última atualização**: Janeiro 2025  
**Versão**: 1.0.0  
**Status**: 🟢 Ativo
