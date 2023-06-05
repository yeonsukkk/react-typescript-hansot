import {
  createAsyncThunk,
  createSlice,
  configureStore,
} from '@reduxjs/toolkit';

export const fetchAllProduct = createAsyncThunk(
  'fetch-all-product',
  async (apiUrl: string) => {
    console.log(apiUrl);
    const response = await fetch(apiUrl);
    return response.json();
  }
);

const productData = createSlice({
  name: 'productData',
  initialState: { data: [], fetchStatus: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.fetchStatus = '성공';
      })
      .addCase(fetchAllProduct.pending, (state) => {
        state.fetchStatus = '진행중';
      })
      .addCase(fetchAllProduct.rejected, (state) => {
        state.fetchStatus = '실패';
        throw new Error('실패');
      });
  },
});

export default configureStore({
  reducer: {
    productData: productData.reducer,
  },
});
