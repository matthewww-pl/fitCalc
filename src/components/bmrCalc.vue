<script setup lang="ts">
  const { t } = useI18n()
  const calc = useCalcStore()
  const displayResult = ref(false)
  const formData = reactive({
    age: null,
    body: null,
    lifestyle: null,
    goal: null,
  })

  const submitHandler = () => {
    calc.bmrCalc(formData)
    displayResult.value = true
  }

  const clearForm = () => {
    formData.age = null
    formData.body = null
    formData.lifestyle = null
    formData.goal = null
    displayResult.value = false
  }
</script>

<template>
  <section id="bmr">
    <div class="text-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-24 px-6">
      <h1 class="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">{{ $t('bmr.title') }}</h1>
      <div v-if="calc.bmi.result==0" class="bg-blue-100 rounded-lg py-5 px-6 mb-10 text-lg font-bold text-blue-700" role="alert">
        {{ $t('bmr.alert') }}
      </div>
      <div class="flex justify-center">
        <FormKit
          type="form"
          id="bmrForm"
          :actions="false"
          @submit="submitHandler"
          :disabled="calc.bmi.result==0"
        >
          <FormKit type="text" :label="t('bmr.form.age')"
            v-model="formData.age"
            validation-visibility="blur"
            validation="required|number|between:1,100"
          />
          <FormKit
            type="select"
            :label="t('bmr.form.body')"
            :options="[
              {label: '', value: ''},
              {label: t('bmr.body.ectomorphs'), value: 1},
              {label: t('bmr.body.endomorphs'), value: 2},
              {label: t('bmr.body.mesomorphs'), value: 3}
            ]"
            v-model="formData.body"
            validation-visibility="blur"
            validation="required"
            input-class="dark:text-white text-black"
            option-class="text-black"
          />
          <button type="button" :disabled="calc.bmi.result==0" class="mb-4 inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#modalHelper">
            {{ $t('bmr.form.bodyHelp') }}
          </button>
          <FormKit
            type="select"
            :label="t('bmr.form.goal')"
            :options="[
              {label: '', value: ''},
              {label: t('bmr.lifestyle.mass'), value: 1},
              {label: t('bmr.lifestyle.reduction'), value: 2}
            ]"
            v-model="formData.goal"
            validation-visibility="blur"
            validation="required"
            input-class="dark:text-white text-black"
            option-class="text-black"
          />
          <FormKit
            type="select"
            :label="t('bmr.form.lifestyle')"
            :options="[
              {label: '', value: ''},
              {label: t('bmr.goal.1,0'), value: 1},
              {label: t('bmr.goal.1,2'), value: 1.2},
              {label: t('bmr.goal.1,4'), value: 1.4},
              {label: t('bmr.goal.1,6'), value: 1.6},
              {label: t('bmr.goal.1,8'), value: 1.8},
              {label: t('bmr.goal.2,0'), value: 2}
            ]"
            v-model="formData.lifestyle"
            validation-visibility="blur"
            validation="required"
            input-class="dark:text-white text-black"
            option-class="text-black"
          />
          <button v-if="!displayResult" :disabled="calc.bmi.result==0" class="inline-block px-7 py-3 mt-2 bg-gray-700 dark:bg-gray-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">{{ $t('bmi.form.calc') }}</button>
        </FormKit>
      </div>
      <div class="flex justify-center">
        <button @click="clearForm()" v-if="displayResult" class="inline-block px-7 py-3 mt-2 bg-gray-700 dark:bg-gray-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">{{ $t('bmi.form.clear') }}</button>
      </div>
    </div>
    <div v-if="displayResult" class="pb-32 px-10 text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900 text-center">
      <h2 class="text-4xl font-bold mb-20">{{ $t('bmr.results') }}</h2>
      <div class="grid lg:gap-x-12 lg:grid-cols-3">
        <div class="mb-12 lg:mb-0" >
          <div class="rounded-lg drop-shadow-lg h-full block bg-slate-200 dark:bg-gray-700">
            <div class="flex justify-center">
              <div class="p-4 bg-gray-700 dark:bg-gray-800 rounded-full drop-shadow-lg inline-block -mt-8">
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
              <h3 class="text-3xl font-bold text-blue-600 mb-4">{{ $t('bmr.ppm') }}:</h3>
              <h3 class="text-3xl font-bold text-blue-600 mb-4">{{ calc.ppm }} kcal</h3>
            </div>
          </div>
        </div>
        <div class="mb-12 lg:mb-0">
          <div class="rounded-lg shadow-lg h-full block bg-slate-200 dark:bg-gray-700">
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
              <h3 class="text-3xl font-bold text-blue-600 mb-4">{{ $t('bmr.dayKcal') }}:</h3>
              <h3 class="text-3xl font-bold text-blue-600 mb-4">{{ calc.dayKcal }} kcal</h3>
            </div>
          </div>
        </div>
        <div class="mb-12 lg:mb-0">
          <div class="rounded-lg shadow-lg h-full block bg-slate-200 dark:bg-gray-700">
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
              <h3 class="text-3xl font-bold text-blue-600 mb-4">{{ $t('bmr.goalKcal') }}:</h3>
              <h3 class="text-3xl font-bold text-blue-600 mb-4">{{ calc.goalKcal }} kcal</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>