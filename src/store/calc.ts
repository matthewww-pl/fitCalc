import { defineStore } from 'pinia'

export const useCalcStore = defineStore('calc', () => {
  const { t } = useI18n()
  const bmi = reactive({
    result: ref(0),
    status: ref("")
  })
  
  function bmiCalc(object: any) {
    bmi.result = parseFloat(((object.weight/(object.height*object.height))*10000).toFixed(2))
    if (bmi.result<16) bmi.status = t('bmi.status.1')
    if (bmi.result>=16 && bmi.result<=16.99) bmi.status = t('bmi.status.2')
    if (bmi.result>=17 && bmi.result<=18.49) bmi.status = t('bmi.status.3')
    if (bmi.result>=18.5 && bmi.result<=24.99) bmi.status = t('bmi.status.4')
    if (bmi.result>=25 && bmi.result<=29.99) bmi.status = t('bmi.status.5')
    if (bmi.result>=30 && bmi.result<=34.99) bmi.status = t('bmi.status.6')
    if (bmi.result>=35 && bmi.result<=39.99) bmi.status = t('bmi.status.7')
    if (bmi.result>=40) bmi.status = t('bmi.status.8')
  }

  return { bmi, bmiCalc}
})