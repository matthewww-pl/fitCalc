<script setup lang="ts">
  const { t } = useI18n()
</script>

<template>
  <div>
    <section id="intro">
      <div class="text-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-24 px-6">
        <h1 class="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">{{ $t('intro.title') }}</h1>
        <p class="text-2xl font-bold">{{ $t('intro.bmi.subtitle') }}</p>
        <p class="text-xl my-4">{{ $t('intro.bmi.text') }}</p>
        <p>-- {{ $t('intro.bmi.quote') }}</p>
        <a v-scroll-to="'#bmi'" class="inline-block px-7 py-3 mt-10 bg-gray-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">{{ $t('intro.bmi.next') }}</a>
      
        <p class="text-2xl font-bold mt-20">{{ $t('intro.bmr.subtitle') }}</p>
        <p class="text-xl my-4">{{ $t('intro.bmr.text') }}</p>
        <p>-- {{ $t('intro.bmr.quote') }}</p>
        <a v-scroll-to="'#bmr'" class="inline-block px-7 py-3 mt-10 bg-gray-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">{{ $t('intro.bmr.next') }}</a>
      </div>
    </section>
  </div>
</template>