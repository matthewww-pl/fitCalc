<template>
  <div class="flex flex-col h-screen">
    <Header v-motion-fade />
    <div class="flex-grow">
       <RouterView />
    </div>
    <Footer v-motion-fade/>
  </div>
</template>