<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-4">
        <GiftCards v-for="g in gifts" :key="g.id" :gift="g" />
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import Pop from '../utils/Pop';
import { giftService } from '../services/GiftService'
import GiftCards from '../components/GiftCards.vue';
export default {
  setup() {
    onMounted(getGifts);
    async function getGifts() {
      try {
        await giftService.getGifts();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    return {
      getGifts
    };
  },
  components: { GiftCards }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
