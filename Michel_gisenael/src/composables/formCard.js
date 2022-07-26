import { reactive, computed, ref } from 'vue'
import { useDateHelper } from '@/composables/date'
import { useformatCreditCard } from '@/composables/inputValidations'

export function useFormCard(){
    const { generateyear, generatemonth } = useDateHelper()
    const formatCard = useformatCreditCard()

    const form = reactive({
        cardNumber: '',
        cardHolder: '',
        month: null,
        year: null,
        cw: ''
    })

    const cwFocus = ref(false)

    const months = generatemonth()
    const years = generateyear()

    const handleFormatCard = function(e){
        form.cardNumber = formatCard(e.target.value)
    }

    const dataFront = computed(() => ({
        cardNumber: form.cardNumber,
        cardHolder: form.cardHolder,
        month: form.month,
        year: form.year,
    }))

    const dataBack = computed(() => ({
        cw: form.cw
    }))

    const inputFocusing = function(e){
        cwFocus.value = e.type == 'focus' ? true : false
    }

    return {
        form,
        months,
        years,
        handleFormatCard,
        dataFront,
        dataBack,
        inputFocusing,
        cwFocus
    }
}