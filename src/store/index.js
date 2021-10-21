import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // Khai báo global state
        username:'Lương Anh Tú',
        age:21,
        todos: [
            { id: 1, text: 'task 1', done: true },
            { id: 2, text: 'task 2', done: true },
            { id: 3, text: 'task 3', done: false },
        ],
        data:[],
        // unit07
        items :[
            {
                id:1,
                name: 'iPhone 12 Pro Max Chính Hãng',
                image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
                price: 32990000,
                quantity: 566,
                isAvailable: true
            },
            {
                id:2,
                name: 'iPhone 12 Chính Hãng (VN/A)',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwXfjwuJIi7teNG13soue7Rgc0qofzaMMJcLczgssD2AXBbtjmvavqDriZ0Rk6xQ7k1s&usqp=CAU',
                price: 21790000,
                quantity: 123,
                isAvailable: true
            },
            {
                id:3,
                name: 'iPhone 11 Chính hãng',
                image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
                price: 16690000,
                quantity: 0,
                isAvailable: false
            },
            {
                id:4,
                name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
                price: 12190000,
                quantity: 1023,
                isAvailable: true
            },
            {
                id:5,
                name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwXfjwuJIi7teNG13soue7Rgc0qofzaMMJcLczgssD2AXBbtjmvavqDriZ0Rk6xQ7k1s&usqp=CAU',
                price: 26500000,
                quantity: 45,
                isAvailable: true
            }
        ],
        cartOut:[],
        total:'',
    },
    getters: {
        doneTodos: (state) => {
            return state.todos.filter(todo => todo.done)
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        }
    },
    mutations: {
        // Khai báo mutations
        updateUserName (state,value){
            state.username = value
        },
        updateData(state,value){
            state.data.push(value)
        },
        deleteData(state,value){
            state.data.splice(value, 1);
        },
        doneData(state,value) {
            console.log(state.data[value])
            if (state.data[value].done === true) {
                state.data[value].done = false
                state.data[value].decor = false
            } else {
                state.data[value].done = true
                state.data[value].decor = true
            }
        },

        // Unit07
        updateCart(state,value){
            state.cartOut.push(value)
        },
        updateTotal(state){
            let totalList = state.cartOut
            state.total = 0;
            for (let i = 0 ; i < totalList.length;i++){
                state.total += state.cartOut[i].soluong*state.cartOut[i].price
            }
        },
        changeCartStore(state,value){
            state.cartOut.splice(value, 1);
        },
        deleteProductStore(state,value){
            state.cartOut.splice(value, 1);
        },
    }
})

export default store