import { createSlice } from "@reduxjs/toolkit";

const mode = localStorage.getItem('mode');
let currentmode;
if(mode===null){
currentmode=false   
}else{currentmode=mode}
const myid = localStorage.getItem('myid')
export const modeSlice = createSlice({
    name:"mode",
    initialState:{value:{colormode:false,colorBgtext:'bg-white',colortext:'text-black'}},
    reducers:{
        changemode:(state)=>{
            state.value.colormode = !state.value.colormode;
            state.value.colorBgtext = state.value.colormode?'bg-black':'bg-white'
            state.value.colortext = state.value.colormode?'text-white':'text-black'
            // localStorage.setItem('mode',!mode);
        }
    }
    
});

export const {changemode} = modeSlice.actions;

export default modeSlice.reducer;