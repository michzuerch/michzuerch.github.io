<template>
<v-container grid-list-md text-center>
    <AboutCard></AboutCard>
</v-container>
</template>

<script>
import AboutCard from '@/components/AboutCard.vue';

export default {
  name: 'About',
    components: {
        AboutCard
    },
    data: () => ({
        //
    }),
}
</script>

<style>

</style>
