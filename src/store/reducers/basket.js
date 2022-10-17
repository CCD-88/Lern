import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: [], // создание пустого массива
    countProducts: 0,
    priceBasket: 0,
  },
  reducers: {
    //добавление нового объекта в массив 
    addProductInBasket(state, action) {
      state.basket.push(action.payload);
      state.priceBasket = state.basket.reduce((sum, current) => {
        return sum + current.price;
      }, 0);
      state.countProducts = state.basket.length;
    },



    //удаление из объекта 
    removeProductInBasket(state, action) {
      state.basket = state.basket.filter((item) => {
        return item.idx !== action.payload;
      });
      state.priceBasket = state.basket.reduce((sum, current) => {
        return sum + current.price;
      },0);
      state.countProducts = state.basket.length;
    },
  },
});

export const { addProductInBasket, removeProductInBasket } = basketSlice.actions;

export default basketSlice.reducer;
