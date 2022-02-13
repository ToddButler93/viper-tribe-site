<template>
    <div class="quote_card">
        <p>{{ $props.content.quote }}</p>
        <div class="quote_card_bottom">
            <div class="quote_card_image" v-html="compute_identicon"></div>
            <p>{{ $props.content.name }}, {{ $props.content.location }}</p>
        </div>
    </div>
</template>

<script>
const jdenticon = require("jdenticon");

export default {
    name: 'QuoteCard',
    props: {
        content: Object
    },
    computed: {
        compute_identicon() {
            let svg = jdenticon.toSvg(this.content.name, 40);
            return svg;
        }
    }
}
</script>

<style scoped>
.quote_card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 500px;
    height: fit-content;
    min-height: 200px;
    margin: 40px 35px 0px 35px;
    padding: 5px 25px 15px 25px;
    background-color: #FFFFFF;
    border: 1px solid var(--lightblue);
    border-radius: var(--border_radius_larger);
    box-shadow: 2px 4px 10px -7px black;
}
.quote_card:before {
    content: "";
    position: absolute;
    top: -30px;
    left: -45px;
    display: block;
    width: 70px;
    height: 70px;
    background-size: 100%;
    background-repeat: no-repeat;
    transform: rotateY(180deg);
    user-select: none;
    pointer-events: none;
}
.quote_card > p {
    color: black;
    text-align: start;
}
.quote_card_bottom {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    align-self: flex-end;
    margin-top: 10px;
    font-weight: bold;
}
.quote_card_image {
    margin-right: 10px;
}
</style>
