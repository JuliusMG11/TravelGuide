<template>
  <div class="custom-input relative">
     <label :for="name"> {{ label }} </label>
     <input
        :placeholder="placeholder"
        :type="type" 
        :name="name" 
    >
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        label: {
            type: String,
            required: false,
            default: ''
        },
        placeholder: {
            type: String,
            required: false,
            default: ''
        },
        name: {
            type: String,
            required: false,
            default: ''
        },
        type: {
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

.custom-input label {
    padding-bottom: 16px;
    display: block;
    color: var(--ion-color-primary-contrast);
}
.custom-input input {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    padding: 16px 22px;
    height: 42px;
    background: #121212;
    border: 1px solid var(--ion-color-primary);
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.14);
    border-radius: 32px;
}

.custom-input input:focus {
    border: 2px solid var(--ion-color-secondary);
}
 .custom-input input:focus {
    border: 2px solid var(--ion-color-secondary);
}

.custom-input input::placeholder {
    color: var(--ion-color-primary-contrast); 
}
            
 .custom-input input:focus-visible {
    outline: unset;
    border: 2px solid var(--ion-color-secondary);
}

</style>