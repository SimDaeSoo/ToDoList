import Vue from 'vue';
import { Toasted } from 'vue-toasted';

declare module 'vue/types/vue' {
    interface Vue {
        $toasted: Toasted;
    }
}