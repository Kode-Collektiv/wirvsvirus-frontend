<template>
    <h1>{{gastro.name}}</h1>
</template>

<script>
    export default {
        name: "GastroDetailPage",
        data: function() {
            return {
                gastro: {
                    name: "Reynabi",
                    contact: {
                        facebook: "https://www.facebook.com/KussmundGiessen/",
                        tel: "0641 2797720"
                    },
                    address: {
                        postal_code: 35394,
                        street: "Grünberger Str.",
                        number: "115"
                    },
                    logo: "reynabi.png"
                }
            };
        }
    }
</script>

<style scoped>

</style>
