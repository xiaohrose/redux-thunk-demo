import { configureStore } from '@reduxjs/toolkit'
import test from './slices/test.ts'

export default configureStore({
    reducer: {
        test: test
    }
})