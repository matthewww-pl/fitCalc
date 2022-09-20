import { defineStore } from 'pinia'

export const useCalcStore = defineStore('calc', () => {
  const { t } = useI18n()
  const person = reactive({
    gender: 0,
    weight: 0,
    height: 0,
    age: 0,
    body: 0,
    lifestyle: 0,
    goal: 0
  })
  const bmi = reactive({
    result: ref(0),
    status: ref("")
  })
  const bmr = reactive({
    A: ref(0),
    B: ref(0),
    C: ref(0)
  })
  const ppm = ref(0)
  const dayKcal = ref(0)
  const goalKcal = ref(0)
  
  function bmiCalc(object: any){
    person.gender = object.gender
    person.height = object.height
    person.weight = object.weight
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

  function ppmCalc(){
    if (person.gender==2){
      ppm.value = 66.5 + (13.7*person.weight) + (5*person.height) - (6.8*person.age)
      return
    }
    ppm.value = 655 + (9.6*person.weight) + (1.85*person.height) - (4.7*person.age)
  }

  function dayKcalCalc(){
    dayKcal.value = ppm.value*person.lifestyle
  }

  function goalKcalCalc(){
    if (person.goal==1){
      if (person.body==1) goalKcal.value = dayKcal.value+0.2*dayKcal.value
      if (person.body==2) goalKcal.value = dayKcal.value+0.1*dayKcal.value
      if (person.body==3) goalKcal.value = dayKcal.value+0.15*dayKcal.value
    }else if (person.goal==2){
      if (person.body==1) goalKcal.value = dayKcal.value-0.1*dayKcal.value
      if (person.body==2) goalKcal.value = dayKcal.value-0.2*dayKcal.value
      if (person.body==3) goalKcal.value = dayKcal.value-0.15*dayKcal.value
    }
    goalKcal.value = parseFloat(goalKcal.value.toFixed(2))
  }

  function bmrCalc(object: any){
    person.age = object.age
    person.body = object.body
    person.lifestyle = object.lifestyle
    person.goal = object.goal
    ppmCalc()
    dayKcalCalc()
    goalKcalCalc()
  }

  return { person, bmi, bmr, ppm, dayKcal, goalKcal, bmiCalc, bmrCalc}
})