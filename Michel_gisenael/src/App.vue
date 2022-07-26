<script setup>
    import cardFront from '@/components/cardFront.vue'
    import cardBack from '@/components/cardBack.vue'
    import { useCreditCardValidation } from '@/composables/inputValidations'
    import { useFormCard } from '@/composables/formCard'

    const handleInputKey = useCreditCardValidation()
    const { form, months, years, handleFormatCard } = useFormCard()

</script>

<template>
    <div id="card-container">
        <div class="card card-awesome relative">

            <div class="card-platform">
                <div class="card-physic-container">
                    
                </div>
            </div>

            <div class="card-body">
                <div class="form-group my-4">
                    <label for="cardnumber" class="label-form">Cards Number</label>
                    <input 
                        type="text" 
                        id="cardnumber" 
                        name="cardnumber" 
                        @keypress="handleInputKey"
                        class="form-control"
                        :value="form.cardNumber"
                        @input="handleFormatCard"
                        maxlength="19" 
                    >
                </div>

                <div class="form-group my-4">
                    <label for="cardholder" class="label-form my-2">Cards holder</label>
                    <input type="text" id="cardholder" class="form-control" v-model="form.cardHolder">
                </div>

                <div class="row my-4">
                    <div class="col-md-8">
                        <div class="form-group">
                            <label for="cardmonth" class="label-form my-2">Expiration date</label>
                            <div class="row">
                                <div class="col-md-6">
                                    <select name="" id="cardmonth" class="form-select" v-model="form.month">
                                        <option :value="month" v-for="(month, i) in months" :key="'month'+i">{{ month }}</option>
                                    </select>
                                </div>

                                <div class="col-md-6">
                                    <select name="" id="cardmonth" class="form-select" v-model="form.year">
                                        <option :value="year" v-for="(year, i) in years" :key="'year'+i">{{ year }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="cardcw" class="label-form my-2">CW</label>
                            <input 
                                type="text" 
                                id="cardcw" 
                                class="form-control" 
                                pattern="[0-9.]+"
                                maxlength="4" 
                                @keypress="handleInputKey"
                                v-model="form.cw"
                            >
                        </div>
                    </div>
                </div>

                <div>
                    <button type="button" class="btn btn-primary btn-lg btn-submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    @import '@/assets/app.scss'
</style>


