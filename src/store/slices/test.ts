import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Test } from '../../service/index.js'

export const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async () => {
        const response = await Test()
        return response
    },
)



export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        data: {}
    },
    reducers: {
        increment: state => {
            // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它
            // 并不是真正的改变状态值，因为它使用了 Immer 库
            // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的
            // 不可变的状态
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            // Add user to the state array
            state.data = action.payload
        })
    },
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer