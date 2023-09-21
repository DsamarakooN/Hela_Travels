import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import guideService from './guideService'

const initialState = {
    guides: [],
    guide: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Get all guides
export const getGuides = createAsyncThunk(
    'guide/getGuides',
    async (_, thunkAPI) => {
        try {
            return await guideService.getGuides()
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Get guide by id
export const getGuideById = createAsyncThunk(
    'guide/getGuideById',
    async (guideId, thunkAPI) => {
        try {
            return await guideService.getGuideById(guideId)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Add a guide
export const createGuide = createAsyncThunk(
    'guide/createGuide',
    async (guide, thunkAPI) => {
        try {
            return await guideService.createGuide(guide)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Update a guide
export const updateGuide = createAsyncThunk(
    'guide/updateGuide',
    async ({ guideId, guideData }, thunkAPI) => {
        try {
            return await guideService.updateGuide(guideId, guideData)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Delete a guide
export const deleteGuide = createAsyncThunk(
    'guide/deleteGuide',
    async (guideId, thunkAPI) => {
        try {
            return await guideService.deleteGuide(guideId)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const guideSlice = createSlice({
    name: 'guide',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGuides.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getGuides.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.guides = action.payload
            })
            .addCase(getGuides.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getGuideById.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getGuideById.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.guide = action.payload
            })
            .addCase(getGuideById.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(createGuide.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createGuide.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.guide = action.payload
            })
            .addCase(createGuide.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateGuide.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateGuide.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.guide = action.payload
            })
            .addCase(updateGuide.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteGuide.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteGuide.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.guide = action.payload
            })
            .addCase(deleteGuide.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    },
})

export default guideSlice.reducer