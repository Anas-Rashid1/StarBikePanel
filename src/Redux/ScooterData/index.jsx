import { createSlice } from "@reduxjs/toolkit";

export const ScooterLed = createSlice({
  name: "ScooterLed",
  initialState: {
    ScootersLed: [],
  },
  reducers: {
    updateOrAddLed: (state, action) => {
      const { imei, status } = action.payload;
      console.log(status , "stat");

      const exist = state.ScootersLed.find((scooter) => scooter.imei === imei);
      if (exist) {
        exist.status = status;
      } else {
        state.ScootersLed.push({ imei: imei, status: status });
      }
    },
  },
});

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
          riderName: null,
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

export const { updateOrAddScooter  } = ScooterData.actions;
export const {updateOrAddLed} = ScooterLed.actions;
export default ScooterData;
