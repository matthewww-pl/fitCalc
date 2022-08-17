<script setup lang="ts">
  const { t } = useI18n()
</script>

<template>
  <div>
    <section class="">
      <div class="text-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-24 px-6">
        <h1 class="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">{{ $t('intro.title') }}</h1>
        <p class="text-2xl font-bold">{{ $t('intro.subtitle') }}</p>
        <p class="text-xl my-4">{{ $t('intro.text') }}</p>
        <a class="inline-block px-7 py-3 mt-5 bg-gray-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">{{ $t('intro.next') }}</a>
      </div>
    </section>
  </div>
</template>