import {reactive} from "vue";

const inventory = reactive({})
export default function useInventory() {
    return {
        addItemToInventory: (item) => {
            inventory[item] = true
        },
        inventory
    }
}
