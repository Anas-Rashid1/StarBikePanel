import { useState } from "react";
import { Client } from "paho-mqtt";
import { updateOrAddScooter } from "../../Redux/ScooterData";
import { useDispatch, useSelector } from "react-redux";

import { json } from "react-router-dom";

const Imei = [
  "862427062327087", //YES
  "862427062323607",
  "862427062327145", //YES
  "862427062322211", //YES

  "862427062327285", //YES
  "862427062327046", //YES
  "862427065357917", //YES
  "862427062327327", //Yes
  "862427062327301",
  "862427062323490", //YES
];

const StartMqtt = () => {
  const dispatch = useDispatch();
  const ScooterData = useSelector((state) => state.Scooters.Scooters);

  // Create an instance of the MQTT client
  const client = new Client(
    "broker.hivemq.com",
    8000,
    "/mqtt",
    "24345456567767675654"
  );

  // Set up event listeners
  // client.onConnectionLost = (responseObject) => {
  //   if (responseObject.errorCode !== 0) {
  //     console.error(`Connection lost: ${responseObject.errorMessage}`);
  //   }
  // };

  // Connect to the MQTT broker

  client.connect({
    onSuccess: () => {
      console.log("Connected to MQTT broker");

      // Subscribe to a specific topic
      // client.subscribe("cmd/KW/scootor");

      for (let Subscribing_imei of Imei) {
        client.subscribe(`data/KW/scootor/${Subscribing_imei}`);
      }

      // setInterval(() => {
      //   for (let Subscribing_imei of Imei) {
      //     client.publish(`${Subscribing_imei}`, `{"cmd":"getmt5packet"}`);
      //   }
      // }, 5000);
    },
  });

  client.onMessageArrived = (message) => {
    // console.log(
    //   `Message received from topic ${message.destinationName}: ${message.payloadString}`
    // );
    let temp = message.destinationName.split("/");
    let imei = temp[temp.length - 1];
    let { mt } = JSON.parse(message.payloadString);
    if (mt === 2) {
      // ,la,lo,ss,ib,sb,cy,sl
      let { la, lo, ss, ib, sb, cy, sl, pw, rf, sf } = JSON.parse(
        message.payloadString
      );

      console.log("status ", sf);

      dispatch(
        updateOrAddScooter({
          imei: imei,
          latitude: la,
          longitude: lo,
          signalstrength: ss,
          iotbattery: ib,
          scooterbattery: sb,
          batterycycles: cy,
          speedlimit: sl,
          powerstusflag: "anas",
        })
      );
      console.log("Imei :", imei, "Message Type ", mt);
    } else if (mt == 5) {
      let { totrip, totime, tocap } = JSON.parse(message.payloadString);

      dispatch(
        updateOrAddScooter({
          imei: imei,
          totaltrips: `${totrip} km`,
          totaltime: `${totime} s`,
          batterycapacity: `${tocap} mAh`,
        })
      );
      console.log("Imei :", imei, "Message Type 445 ", mt);
    }
    console.log("yele :", ScooterData);
  };

  // Return the MQTT client instance
  //   return client;
};

export default StartMqtt;
