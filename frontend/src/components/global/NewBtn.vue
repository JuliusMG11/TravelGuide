<template>
     <div class="new-cake">
        <router-link :to="link">
          <strong>+</strong>
        </router-link>
      </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        link: {
            type: String,
            required: false,
            default: ''
        }
    },
    setup() {
        return {

        }
    }
})
</script>

<style scoped>
.new-cake a {
    width: 52px;
    height: 52px;
    background: var(--ion-color-secondary);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--ion-color-tertiary-contrast);
    border-radius: 50%;
    padding: 6px;
    font-size: 46px;
    position: fixed;
    right: 16px;
    bottom: 16px;
    border: 1px solid var(--ion-color-secondary);
    box-shadow: 0 10px 20px -10px var(--ion-color-secondary);
    transform: all ease .3s;
}

.new-cake a:hover {
  background: var(--ion-color-tertiary-contrast);
  color: var(--ion-color-secondary);
  transform: all ease .3s;
}

</style>