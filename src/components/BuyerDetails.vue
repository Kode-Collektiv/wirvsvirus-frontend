<template>
    <div class="buyer-details">
        <form novalidate class="md-layout" @submit.prevent="validateUser">

            <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('firstName')">
                        <label for="first-name">Vorname</label>
                        <md-input name="first-name" id="first-name" autocomplete="given-name"
                                  v-model="form.firstName" :disabled="sending"/>
                        <span class="md-error"
                              v-if="!$v.form.firstName.required">The first name is required</span>
                        <span class="md-error"
                              v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
                    </md-field>
                </div>

                <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('lastName')">
                        <label for="last-name">Nachnahme</label>
                        <md-input name="last-name" id="last-name" autocomplete="family-name"
                                  v-model="form.lastName" :disabled="sending"/>
                        <span class="md-error"
                              v-if="!$v.form.lastName.required">The last name is required</span>
                        <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
                    </md-field>
                </div>
            </div>

            <md-field :class="getValidationClass('email')">
                <label for="email">Email</label>
                <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email"
                          :disabled="sending"/>
                <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
            </md-field>

            <md-button class="md-raised md-primary"  @click="onClickConfirm">Bestätigen</md-button>
        </form>
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import {
        required,
        email,
        minLength,
    } from 'vuelidate/lib/validators'

    export default {
        name: 'BuyerDetails',
        mixins: [validationMixin],
        data: () => ({
            form: {
                firstName: null,
                lastName: null,
                email: null,
            },
            userSaved: false,
            sending: false,
            lastUser: null
        }),
        validations: {
            form: {
                firstName: {
                    required,
                    minLength: minLength(3)
                },
                lastName: {
                    required,
                    minLength: minLength(3)
                },
                email: {
                    required,
                    email
                }
            }
        },
        methods: {
            onClickConfirm: function() {
                this.$emit('contact-selected', this.form);
            },
            getValidationClass (fieldName) {
                const field = this.$v.form[fieldName]

                if (field) {
                    return {
                        'md-invalid': field.$invalid && field.$dirty
                    }
                }
            },
            clearForm () {
                this.$v.$reset()
                this.form.firstName = null
                this.form.lastName = null
                this.form.email = null
            },
            validateUser () {
                this.$v.$touch()

                if (!this.$v.$invalid) {
                    this.saveUser()
                }
            }
        }
    }
</script>

<style scoped>
</style>
