<script setup lang="ts">
  const { locale, t } = useI18n()
  const isDark = useDark()
  const cookies = useCookies()

  if(cookies.get('locale')){
    locale.value = cookies.get('locale')
  }

  if(cookies.get('darkMode')){
    isDark.value = cookies.get('darkMode')
  }
  
  useHead({
    title: t('header.title'),
    meta: [
      { name: 'description', content: t('header.description') },
    ]
  })
</script>

<template>
  <RouterView />
</template>