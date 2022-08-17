<script setup lang="ts">
  const { t } = useI18n()
  const router = useRouter()
</script>

<template>
  <div>
    <div class="container my-auto px-6 mx-auto">
      <section class="mb-32 text-gray-800 dark:text-white text-center">
        <div class="px-6 py-12 md:px-12">
          <h2 class="text-5xl my-12 font-bold tracking-tight">
            404 ;/ <br /><br>
            <span class="text-gray-700">{{ $t('404.notFound') }}</span>
          </h2>
          <a class="inline-block px-7 py-3 bg-gray-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2"
            href="#" @click="router.back()" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">{{ $t('404.back') }}</a>
        </div>
      </section>
    </div>
  </div>
</template>

<route lang="yaml">
  meta:
    layout: 404
</route>