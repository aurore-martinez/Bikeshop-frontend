import { createSlice } from '@reduxjs/toolkit';


const initialState = {
   value: [],
};

export const PanierSlice = createSlice({
   name: 'panier',
   initialState,
   reducers: {
      addArticle : (state,action)=> {
       state.value.push(action.payload);
     },
     removeAllArticle :  (state, action) => {
      state.value = [];
   }
    },
});
   
   export const { addArticle, removeAllArticle } = PanierSlice.actions;
   export default PanierSlice.reducer;