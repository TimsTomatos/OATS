<template>

    <nav class="navbar navbar-toggleable-md bg-info navbar-inverse">

        <div class="container">
            <button class="navbar-toggler" data-toggle="collapse" data-target="#mainNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNav">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home</a>
                    <a class="nav-item nav-link" href="#">About</a>
                    <a class="nav-item nav-link" href="#">Training</a>
                    <a class="nav-item nav-link" href="#">Contact</a>
                </div>
            </div>
        </div>


    </nav>

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
