<template>
  <div class="flex flex-col h-screen">
    <Header v-motion-fade />
    <Modal />
    <div class="flex-grow">
       <RouterView />
    </div>
    <Footer v-motion-fade/>
  </div>
</template>