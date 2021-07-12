import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'default',
        special_power: '',
        home_planet: '',
        nemesis: '',
        weakness: '',
    },
    reducers: {
        chooseName: (state, action) => {state.name = action.payload},
        choosePower: (state, action) => { state.special_power = action.payload},
        chooseHome: (state, action) => { state.home_planet = action.payload},
        chooseNemesis: (state, action) => { state.nemesis = action.payload},
        chooseWeakness: (state, action) => { state.weakness = action.payload},
        


    }
})

export const reducer = rootSlice.reducer
export const { chooseName, choosePower, chooseHome, chooseNemesis, chooseWeakness } = rootSlice.actions;