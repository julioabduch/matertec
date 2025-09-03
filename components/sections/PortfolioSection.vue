<template>
  <section class="section-hero-soft bg-slate-900/10 py-20 lg:py-32 relative overflow-hidden">
    <!-- Background decorativo -->
    <div class="absolute inset-0 bg-gradient-to-br from-secondary-500/5 to-primary-950/10"></div>
    
    <div class="container mx-auto px-6 lg:px-8 relative z-10">
      <div class="max-w-7xl mx-auto">
        
        <!-- Cabeçalho da seção -->
        <div class="text-center mb-16 lg:mb-20">
          <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Portfólio
          </h2>
          <p class="text-lg lg:text-xl text-white text-opacity-80 font-normal max-w-3xl mx-auto leading-relaxed">
            Alguns projetos e manutenções recentes.
          </p>
        </div>

        <!-- Filtros da galeria -->
        <div class="flex flex-wrap justify-center gap-4 mb-12 lg:mb-16">
          <button 
            v-for="filter in filters" 
            :key="filter.id"
            @click="activeFilter = filter.id"
            :class="[
              'px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2',
              activeFilter === filter.id 
                ? 'bg-secondary-500 text-white shadow-lg' 
                : 'bg-white bg-opacity-10 text-white text-opacity-80 border border-white border-opacity-20 hover:bg-opacity-20'
            ]"
          >
            <div class="flex items-center justify-center">
              <component :is="filter.icon" class="w-5 h-5" />
            </div>
            {{ filter.label }}
          </button>
        </div>

        <!-- Galeria de fotos -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          <!-- Foto 1 - Manutenção -->
          <div 
            v-show="activeFilter === 'all' || activeFilter === 'manutencao'"
            class="transition-all duration-300"
            data-category="manutencao"
          >
            <div class="relative rounded-2xl overflow-hidden bg-white bg-opacity-5 border border-white border-opacity-20 group cursor-pointer" style="aspect-ratio: 1;">
              <div class="w-full h-full flex items-center justify-center" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(15, 23, 42, 0.2));">
                <svg class="w-16 h-16 text-white text-opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end" style="background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);">
                <div class="p-6 w-full">
                  <h4 class="text-white font-bold text-lg mb-2">
                    Manutenção Preventiva
                  </h4>
                  <p class="text-white text-opacity-80 text-sm mb-3">
                    Lavadora Speed Queen - Calibração completa
                  </p>
                  <div class="flex items-center space-x-4">
                    <span class="text-secondary-400 text-sm font-semibold">Manutenção</span>
                    <span class="text-white text-opacity-60 text-sm">2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Foto 2 - Instalação -->
          <div 
            v-show="activeFilter === 'all' || activeFilter === 'instalacao'"
            class="transition-all duration-300"
            data-category="instalacao"
          >
            <div class="relative rounded-2xl overflow-hidden bg-white bg-opacity-5 border border-white border-opacity-20 group cursor-pointer" style="aspect-ratio: 1;">
              <div class="w-full h-full flex items-center justify-center" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(15, 23, 42, 0.2));">
                <svg class="w-16 h-16 text-white text-opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end" style="background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);">
                <div class="p-6 w-full">
                  <h4 class="text-white font-bold text-lg mb-2">
                    Instalação Completa
                  </h4>
                  <p class="text-white text-opacity-80 text-sm mb-3">
                    Lavanderia Express - 8 máquinas LG
                  </p>
                  <div class="flex items-center space-x-4">
                    <span class="text-secondary-400 text-sm font-semibold">Instalação</span>
                    <span class="text-white text-opacity-60 text-sm">2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Foto 3 - Obras -->
          <div 
            v-show="activeFilter === 'all' || activeFilter === 'obras'"
            class="transition-all duration-300"
            data-category="obras"
          >
            <div class="relative rounded-2xl overflow-hidden bg-white bg-opacity-5 border border-white border-opacity-20 group cursor-pointer" style="aspect-ratio: 1;">
              <div class="w-full h-full flex items-center justify-center" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(15, 23, 42, 0.2));">
                <svg class="w-16 h-16 text-white text-opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end" style="background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);">
                <div class="p-6 w-full">
                  <h4 class="text-white font-bold text-lg mb-2">
                    Reforma Completa
                  </h4>
                  <p class="text-white text-opacity-80 text-sm mb-3">
                    Adaptação elétrica e hidráulica
                  </p>
                  <div class="flex items-center space-x-4">
                    <span class="text-secondary-400 text-sm font-semibold">Obras</span>
                    <span class="text-white text-opacity-60 text-sm">2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Foto 4 - Adesivagem -->
          <div 
            v-show="activeFilter === 'all' || activeFilter === 'adesivagem'"
            class="transition-all duration-300"
            data-category="adesivagem"
          >
            <div class="relative rounded-2xl overflow-hidden bg-white bg-opacity-5 border border-white border-opacity-20 group cursor-pointer" style="aspect-ratio: 1;">
              <div class="w-full h-full flex items-center justify-center" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(15, 23, 42, 0.2));">
                <svg class="w-16 h-16 text-white text-opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2M9 12h6m-6 4h6m-6-8h6"></path>
                </svg>
              </div>
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end" style="background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);">
                <div class="p-6 w-full">
                  <h4 class="text-white font-bold text-lg mb-2">
                    Identidade Visual
                  </h4>
                  <p class="text-white text-opacity-80 text-sm mb-3">
                    Adesivagem e sinalização completa
                  </p>
                  <div class="flex items-center space-x-4">
                    <span class="text-secondary-400 text-sm font-semibold">Adesivagem</span>
                    <span class="text-white text-opacity-60 text-sm">2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Estatísticas -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 lg:mt-20">
          
          <div class="text-center bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10">
            <div class="text-3xl lg:text-4xl font-bold text-secondary-400 mb-2">
              50+
            </div>
            <div class="text-white text-opacity-80 font-normal text-sm lg:text-base">
              Projetos Concluídos
            </div>
          </div>

          <div class="text-center bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10">
            <div class="text-3xl lg:text-4xl font-bold text-secondary-400 mb-2">
              200+
            </div>
            <div class="text-white text-opacity-80 font-normal text-sm lg:text-base">
              Manutenções Realizadas
            </div>
          </div>

          <div class="text-center bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10">
            <div class="text-3xl lg:text-4xl font-bold text-secondary-400 mb-2">
              15+
            </div>
            <div class="text-white text-opacity-80 font-normal text-sm lg:text-base">
              Lavanderias Instaladas
            </div>
          </div>

          <div class="text-center bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10">
            <div class="text-3xl lg:text-4xl font-bold text-secondary-400 mb-2">
              98%
            </div>
            <div class="text-white text-opacity-80 font-normal text-sm lg:text-base">
              Satisfação dos Clientes
            </div>
          </div>

        </div>

        <!-- Call to action -->
        <div class="text-center mt-16 lg:mt-20">
          <p class="text-lg text-white text-opacity-80 font-normal mb-8">
            Quer ver seu projeto aqui? Entre em contato conosco!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
              Ver Mais Projetos
            </button>
            <button class="bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold px-8 py-4 rounded-xl border border-white border-opacity-30 transition-all duration-300">
              Solicitar Orçamento
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Estado reativo para o filtro ativo
const activeFilter = ref('all')

// Definição dos filtros disponíveis
const filters = [
  {
    id: 'all',
    label: 'Todos',
    icon: 'IconGrid'
  },
  {
    id: 'manutencao',
    label: 'Manutenção',
    icon: 'IconTool'
  },
  {
    id: 'instalacao',
    label: 'Instalação',
    icon: 'IconInstall'
  },
  {
    id: 'obras',
    label: 'Obras',
    icon: 'IconBuilding'
  },
  {
    id: 'adesivagem',
    label: 'Adesivagem',
    icon: 'IconDesign'
  }
]

// Componentes de ícones inline
const IconGrid = {
  template: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>`
}

const IconTool = {
  template: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`
}

const IconInstall = {
  template: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>`
}

const IconBuilding = {
  template: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>`
}

const IconDesign = {
  template: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2M9 12h6m-6 4h6m-6-8h6"></path></svg>`
}
</script>