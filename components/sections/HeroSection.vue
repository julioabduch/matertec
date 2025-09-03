<template>
  <section class="section-hero-soft relative overflow-hidden">
    <!-- Background com gradiente suave para melhor legibilidade -->
    <div class="absolute inset-0 bg-slate-900/10"></div>
    
    <!-- Conteúdo principal -->
    <div class="relative z-10 container-section py-20 lg:py-32">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        
        <!-- Coluna de texto -->
        <div class="text-center lg:text-left text-white">
          <!-- Título principal -->
          <h1 class="text-hero mb-6 text-white font-public-bold">
            Manutenção e Montagem de
            <span class="text-secondary-400 block">
              Lavanderias Profissionais
            </span>
          </h1>
          
          <!-- Subtítulo -->
          <p class="text-subtitle mb-8 opacity-90 font-public-normal max-w-2xl mx-auto lg:mx-0">
            Especialistas em <strong>Speed Queen, LG, Electrolux</strong> e outras — 
            manutenção ágil, instalação completa e abertura de lavanderias express.
          </p>
          
          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button @click="handleRequestQuote" class="bg-gradient-secondary text-primary-950 font-semibold px-8 py-4 rounded-xl shadow-glow-secondary hover:shadow-xl transition-all duration-300">
              Pedir Orçamento
            </button>
            
            <button @click="handleWhatsAppContact" class="bg-primary-950/20 text-white border border-secondary-500/30 font-semibold px-8 py-4 rounded-xl hover:bg-primary-950/30 transition-all duration-300">
              Falar no WhatsApp
            </button>
          </div>
        </div>
        
        <!-- Coluna de imagem -->
        <div class="relative">
          <!-- Imagem principal com moldura -->
          <div class="relative">
            <!-- Frame decorativo externo -->
            <div class="absolute -inset-4 bg-gradient-to-br from-secondary-500/20 to-primary-950/30 rounded-3xl blur-sm"></div>
            
            <!-- Frame interno -->
            <div class="relative border-2 border-transparent bg-gradient-to-br from-secondary-500/30 to-primary-950/20 rounded-2xl p-1">
              <div class="aspect-[4/3] rounded-xl overflow-hidden relative">
                <img 
                  src="/images/sections/hero/speedqueen_painel_web.webp" 
                  alt="Speed Queen - Painel de Controle" 
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
                <!-- Overlay sutil para contraste -->
                <div class="absolute inset-0 bg-gradient-to-t from-primary-950/30 to-transparent"></div>
              </div>
            </div>
            
            <!-- Efeito de brilho nas bordas -->
            <div class="absolute -inset-2 border border-secondary-500/20 rounded-2xl pointer-events-none"></div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Emits para ações dos botões
const emit = defineEmits<{
  'request-quote': []
  'contact-whatsapp': []
}>()

// Métodos para lidar com cliques nos CTAs
const handleRequestQuote = (): void => {
  emit('request-quote')
}

const handleWhatsAppContact = (): void => {
  emit('contact-whatsapp')
}
</script>