import { useState } from "react";
import { Client } from "paho-mqtt";

const StartMqtt = () => {
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
      client.subscribe("data/KW/scootor/862427062327145");
    },
  });

  client.onMessageArrived = (message) => {
    console.log(
      `Message received from topic ${message.destinationName}: ${message.payloadString}`
    );
  };

  // Return the MQTT client instance
  //   return client;
};

export default StartMqtt;
