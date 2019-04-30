<template>

    <b-navbar toggleable="md" type="dark" style="height:10%; background:#5f4238">

        <b-navbar-brand href="#">OATS</b-navbar-brand>

        <b-navbar-toggle target="drawer"></b-navbar-toggle>

        <b-collapse id="drawer">

            <b-navbar-nav>
                <b-nav-item href="#">About</b-nav-item>
                <b-nav-item href="#">Download</b-nav-item>
            </b-navbar-nav>

        </b-collapse>

        <b-navbar-nav class="ml-auto">

            <b-nav-item class="px-4">About</b-nav-item>
            <b-nav-item class="px-4">Download</b-nav-item>
            <b-nav-item class="px-4">Catelog</b-nav-item>

        </b-navbar-nav>

    </b-navbar>

</template>

<script>
export default {
    data( ) {
        return {
            something: "lol"
        }
    }
}
</script>
