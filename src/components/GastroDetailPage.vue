<template>
    <div class="gastro-detail">
        <h1>{{gastro.name}}</h1>
        <img
                :src="require('../assets/img/gastro_logos/' + gastro.logo)"
                height="300x"
                width="300px"
        >
        <p>{{gastro.detail}}</p>

        <div class="gastro-detail-contact">
            <p v-if="gastro.contact.tel">Tel: {{gastro.contact.tel}}</p>
            <p v-if="gastro.contact.email">Email: {{gastro.contact.email}}</p>
            <p v-if="gastro.contact.instagram">Ig: {{gastro.contact.instagram}}</p>
            <p v-if="gastro.contact.facebook">Facebook: {{gastro.contact.facebook}}</p>
        </div>
    </div>

</template>

<script>

    export default {
        name: "GastroDetailPage",
        data: function() {
            return {
                gastro: {
                    name: "Reynabi",
                    detail: "BAZAAR. Der etwas andere Supermarkt. Wer die Lust hat etwas außergewöhnliches zukochen ist bei uns richtig. Alles was Sie für die pakistanische, indische, persische, afghanische, afrikanische und südamerikanische Küche brauchen finden Sie bei uns.",
                    contact: {
                        tel: "0641 2797720",
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
    .gastro-detail {
        width: 300px;
    }
</style>
