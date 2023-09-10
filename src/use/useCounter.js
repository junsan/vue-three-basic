import { ref, reactive, computed, nextTick } from 'vue'

export function userCounter() {

    const counterTitle = ref('My Counter:')

    const data = reactive({
        counter: 10,
        title: 'Counter'
    })
    
    const addOrEven = computed(() => {
        if(data.counter  % 2 === 0) return 'Even'
        return 'Odd' 
    })

    const increaseCounter = (counter, e) => {
        data.counter += counter
        nextTick(() => {
          console.log('Do something when dom is finish updated.')
        })
      }
      
    const decreaseCounter = counter => {
        data.counter -= counter
    }


    return {
        counterTitle,
        data,
        addOrEven,
        increaseCounter,
        decreaseCounter
    }
}