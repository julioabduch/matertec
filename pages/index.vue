<template>
  <div>
    <SectionsHeroSection 
      @request-quote="handleRequestQuote"
      @contact-whatsapp="handleWhatsAppContact"
    />
    <SectionsAboutSection />
    <SectionsBrandsSection />
    <SectionsServicesSection />
    <SectionsMaintenanceSection />
    <SectionsPortfolioSection />
  </div>
</template>

<script setup lang="ts">
// Handlers para os eventos do HeroSection
const handleRequestQuote = (): void => {
  console.log('Solicitação de orçamento')
  // Aqui você pode implementar a lógica para abrir um modal de orçamento
  // ou redirecionar para uma página de contato
}

const handleWhatsAppContact = (): void => {
  console.log('Contato via WhatsApp')
  // Aqui você pode implementar a lógica para abrir o WhatsApp
  // window.open('https://wa.me/5511999999999', '_blank')
}
</script>