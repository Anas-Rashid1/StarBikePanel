import { createSlice } from "@reduxjs/toolkit";

const ScooterData = createSlice({
  name: "Scooter",
  initialState: {
    Scooters: [],
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
          imei,
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
