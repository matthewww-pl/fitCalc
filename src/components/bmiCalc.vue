<script setup lang="ts">
  const { t, locale } = useI18n()
  const config : any = inject(Symbol.for('FormKitConfig'))
  const displayResult = ref(false)
  const formData = reactive({
    gender: null,
    weight: null,
    height: null
  })
  const calc = useCalcStore()

  watch(locale, () => {
    config.locale = locale.value
  })

  const submitHandler = () => {
    calc.bmiCalc(formData)
    displayResult.value = true
  }

  const clearForm = () => {
    formData.gender = null
    formData.height = null
    formData.weight = null
    displayResult.value = false
  }
</script>

<template>
  <section id="bmi">
    <div class="text-center bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-24 px-6">
      <h1 class="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">{{ $t('bmi.title') }}</h1>
      <div class="flex justify-center">
        <FormKit
          type="form"
          id="bmiForm"
          :actions="false"
          @submit="submitHandler"
        >
          <FormKit
            type="select"
            :label="t('bmi.form.gender')"
            :options="[
              '',
              t('bmi.form.woman'),
              t('bmi.form.man')
            ]"
            v-model="formData.gender"
            validation-visibility="submit"
            validation="required"
          />
          <FormKit type="text" :label="t('bmi.form.weight')"
            v-model="formData.weight"
            validation-visibility="blur"
            validation="required|number|between:1,200"
          />
          <FormKit type="text" :label="t('bmi.form.height')"
            v-model="formData.height"
            validation-visibility="blur"
            validation="required|number|between:1,250"
          />
          <button v-if="!displayResult" class="inline-block px-7 py-3 mt-2 bg-gray-700 dark:bg-gray-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">{{ $t('bmi.form.calc') }}</button>
        </FormKit>
      </div>
      <div class="flex justify-center">
        <button @click="clearForm()" v-if="displayResult" class="inline-block px-7 py-3 mt-2 bg-gray-700 dark:bg-gray-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">{{ $t('bmi.form.clear') }}</button>
      </div>
    </div>
    <div v-if="displayResult" class="pb-32 px-10 text-gray-800 dark:text-gray-200 dark:bg-gray-700 text-center">
      <h2 class="text-4xl font-bold mb-20">{{ $t('bmi.results') }}</h2>
      <div class="grid lg:gap-x-12 lg:grid-cols-2">
        <div class="mb-12 lg:mb-0" >
          <div class="rounded-lg drop-shadow-lg h-full block bg-slate-50 dark:bg-gray-900">
            <div class="flex justify-center">
              <div class="p-4 bg-gray-700 dark:bg-gray-800 rounded-full drop-shadow-lg inline-block -mt-8">
                <svg
                  class="w-7 h-7 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-3xl font-bold text-blue-600 mb-4">{{ calc.bmi.status }}</h3>
            </div>
          </div>
        </div>
        <div class="mb-12 lg:mb-0">
          <div class="rounded-lg shadow-lg h-full block bg-slate-50 dark:bg-gray-900">
            <div class="flex justify-center">
              <div class="p-4 bg-gray-700 dark:bg-gray-800 rounded-full shadow-lg inline-block -mt-8">
                <svg
                  class="w-7 h-7 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 544 512"
                >
                  <path
                    fill="currentColor"
                    d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-3xl font-bold text-blue-600 mb-4">{{ $t('bmi.valueBMI') }} {{ calc.bmi.result }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>