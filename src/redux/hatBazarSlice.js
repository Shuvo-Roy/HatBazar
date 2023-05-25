import { createSlice } from '@reduxjs/toolkit'
const initialState= {
    productData: [],
    userInfo: null,
}


export const hatBazarSlice = createSlice({
    name:"hatbazar",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item= state.productData.find((item)=>item._id ===action.payload._id)//for checking available data

            if(item){
                item.quantity +=action.payload.quantity

                //if item in available, then increase the quantity
            }else{
                state.productData.push(action.payload)
            }



            // initial step state.productData = action.payload
        },
        deleteItem:(state,action)=>{
            state.productData= state.productData.filter((item)=>item._id !==action.payload)//for checking available data
        },
        resetCart: (state)=>{
            state.productData =[]
        },
        incrementQnty :(state,action)=>{
            const item= state.productData.find((item)=> item._id === action.payload._id)
            if(item){
                item.quantity++;
            }
        },
        decrementQnty :(state,action)=>{
            const item= state.productData.find((item)=> item._id === action.payload._id)
            if(item.quantity ===1){
                item.quantity=1;
            }else{
                item.quantity--;
            }
        },
        //for sign in sign out
        addUser:(state,action)=>{
            state.userInfo = action.payload
        },
        removeUser: (state)=>{
            state.userInfo = null
        },
        sortByCategory: (state, action) => {
            const { category } = action.payload;
            if (category === "men") {
              state.productData = state.productData
                .filter((item) => item.category === "men")
                .sort((a, b) => a.title.localeCompare(b.title));
            } else {
              state.productData.sort((a, b) => a.title.localeCompare(b.title));
            }
          },
    }
})

export const{
    addToCart,
    deleteItem,
    incrementQnty,
    decrementQnty,
    resetCart,
    addUser,
    removeUser,
    sortByCategory,
} = hatBazarSlice.actions
export default hatBazarSlice.reducer