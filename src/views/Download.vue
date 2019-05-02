<template>

    <div class="download">

        <b-container>

            <b-row>

                <b-col sm="12">

                    <img :src="require('@/assets/Oats.svg')" alt="">

                </b-col>

            </b-row>

        </b-container>

    </div>

</template>

<script>
export default {
    data() {
        button : [

        ]
    }
}
</script>

<style lang="scss" scoped>
    .download {
        width: 100%;
        height: 100%;
        background-image : url('https://cdn.discordapp.com/attachments/409805680535404544/573073539276734474/Amazon-3-of-8.png');
        background-position: center;
        background-size: cover;
    }
</style>
