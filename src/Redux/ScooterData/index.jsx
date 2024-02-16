import { createSlice } from "@reduxjs/toolkit";

const ScooterData = createSlice({
  name: "Scooter",
  initialState: {
    Scooters: [
      { imei: "862427062327145" },
      { imei: "862427062327087" },
      { imei: "862427062327285" },
      { imei: "862427062327046" },
      { imei: "862427062323490" },
      { imei: "862427062327327" },
      { imei: "862427062322211" },
      { imei: "862427062327301" },
    ],
  },
  reducers: {
    updateOrAddScooter: (state, action) => {
      const { imei, ...updateValues } = action.payload;
      const existingScooter = state.Scooters.find(
        (scooter) => scooter.imei === imei
      );

      if (existingScooter) {
        // If scooter with the given imei exists, update its properties
        Object.assign(existingScooter, updateValues);
      } else {
        // If no scooter with the given imei exists, create a new one
        const newScooter = {
          imei: imei,
          iotbattery: null,
          scooterbattery: null,
          totalRide: null,
          batterycycles: null,
          powerstusflag: null,
          speedlimit: null,
          latitude: null,
          longitude: null,
          signalstrength: null,
          riderName: "",
          riderContact: null,
          totaltrips: null,
          totaltime: null,
          batterycapacity: null,
          ...updateValues,
        };

        state.Scooters.push(newScooter);
      }
      console.log(JSON.stringify(state.Scooters));
    },
  },
});

export const { updateOrAddScooter } = ScooterData.actions;
export default ScooterData;
