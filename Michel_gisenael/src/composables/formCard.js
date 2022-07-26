import { reactive } from 'vue'
import { useDateHelper } from '@/composables/date'
import { useformatCreditCard } from '@/composables/inputValidations'

export function useFormCard(){
    const { generateyear, generatemonth } = useDateHelper()
    const formatCard = useformatCreditCard()

    const form = reactive({
        cardNumber: '',
        cardHolder: 'haha',
        month: null,
        year: null,
        cw: ''
    })

    const months = generatemonth()
    const years = generateyear()

    const handleFormatCard = function(e){
        form.cardNumber = formatCard(e.target.value)
    }

    return {
        form,
        months,
        years,
        handleFormatCard
    }
}