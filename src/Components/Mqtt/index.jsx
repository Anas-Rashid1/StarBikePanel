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
    "broker.emqx.io",
    8084, // Port for HTTPS
    "starbike522245555778995545662331555"

    // {
    //   protocol: "wss", // Use wss instead of ws
    //   useSSL: true, // Enable SSL/TLS
    // }
  );

  // const client = new Client({
  //   uri: "wss://your.hivemq.server:8884/mqtt", // Specify the WebSocket Secure (WSS) URL
  //   clientId: "clientId", // Specify your client ID
  //   useSSL: true, // Enable SSL/TLS
  //   // Specify SSL/TLS options
  //   ssl: {
  //     rejectUnauthorized: true, // Reject unauthorized connections
  //   },
  // });

  // Set up event listeners
  // client.onConnectionLost = (responseObject) => {
  //   if (responseObject.errorCode !== 0) {
  //     console.error(`Connection lost: ${responseObject.errorMessage}`);
  //   }
  // };

  // Connect to the MQTT broker

  // setInterval(() => {
  //   for (let Subscribing_imei of Imei) {
  //     client.publish(`${Subscribing_imei}`, `{"cmd":"getmt5packet"}`);
  //   }
  // }, 5000);

  client.connect({
    useSSL: true,
    cleanSession: true,
    onSuccess: () => {
      console.log("Connected to MQTT broker");

      // Subscribe to a specific topic
      // client.subscribe("cmd/KW/scootor");

      for (let Subscribing_imei of Imei) {
        client.subscribe(`data/KW/scootor/${Subscribing_imei}`);
      }
    },
  });

  client.onMessageArrived = (message) => {
    for (let Subscribing_imei of Imei) {
      client.publish(`${Subscribing_imei}`, `{"cmd":"getmt5packet"}`);
    }

    // console.log(
    //   `Message received from topic ${message.destinationName}: ${message.payloadString}`
    // );
    let temp = message.destinationName.split("/");
    let imei = temp[temp.length - 1];
    // console.log("ye check", imei);
    let { mt, ss, lo, la, td, tt } = JSON.parse(message.payloadString);

    console.log("ye check", imei, la, lo, td, tt);

    if (mt === 2) {
      // ,la,lo,ss,ib,sb,cy,sl
      let { la, lo, ss, ib, sb, cy, sl, pw, rf, sf, io, ws, td } = JSON.parse(
        message.payloadString
      );
      console.log("ssss", imei, mt, la, lo, ss, sb, rf);

      dispatch(
        updateOrAddScooter({
          imei: imei,
          latitude: la,
          longitude: lo,
          signalstrength: ss,
          iotbattery: `${ib} %`,
          scooterbattery: `${sb} %`,
          batterycycles: cy,
          speedlimit: `${sl} kph`,
          wheelspeed: `${ws} kph`,
        })
      );
      console.log("Imei :", imei, "Message Type ", mt);
    } else if (mt == 5) {
      let { totrip, totime, tocap } = JSON.parse(message.payloadString);
      // console.log("sss", mt);/

      dispatch(
        updateOrAddScooter({
          imei: imei,
          totaltrips: `${totrip} km`,
          totaltime: `${totime} s`,
          batterycapacity: `${tocap} mAh`,
        })
      );
    }
  };

  // Return the MQTT client instance
  //   return client;
};

export default StartMqtt;
