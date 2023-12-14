<template>
    <div class="home">
        <h1>
            {{ count }}
        </h1>
        <button class="btn" @click="$store.commit('increment')">Increment</button>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Home-page',
    computed: {
        ... mapState({
            count: state => state.count,
        }),
     }
};

</script>