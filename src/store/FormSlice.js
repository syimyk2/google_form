import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  form: {},
  answersData: {},
  answersSettings: [],
  selectedSetting: {},
  showSelectModal : false,
};

export const FormSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    selectSetting(state, actions) {
      let id = actions.payload;
      
      const selectedItem = state.answersSettings.find((el) => el.id === id);
      state.selectedSetting = selectedItem
      state.showSelectModal = false
    },
    addSettings(state,actions){
      state.answersSettings =[...actions.payload] 
    },
    showSelectModal(state, actions){
      state.showSelectModal = actions.payload
    }
  },
});

export const FormActions = FormSlice.actions;
