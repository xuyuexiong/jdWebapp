<template>
    <div>
        <Heador />
        <Slider />
        <Novice />
        <Borrow />
        <Money />
    </div>
</template>

<script>
import Heador from '../public/header.vue';
import Slider from './hslider.vue';
import Novice from './novice.vue';
import Borrow from './borrow.vue';
import Money from './Money.vue';
export default {
  components:{
    Heador,
    Slider,
    Novice,
    Borrow,
    Money
  }
}
</script>