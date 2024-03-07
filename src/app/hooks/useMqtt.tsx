"use client";

import { useEffect, useState, createContext } from "react";
import mqtt from "mqtt";

export interface IMqttProvider {
  children: JSX.Element | JSX.Element[] | string;
}

export const MqttContext = createContext<null | mqtt.MqttClient>(null);

export function MqttProvider({ children }: IMqttProvider) {
  const [client, setClient] = useState<null | mqtt.MqttClient>(null);

  useEffect(() => {
    const client = mqtt.connect("", {
      protocol: "ws",
      port: 1882,
      username: "peach",
      password: "password1",
    });

    client.on("connect", () => {
      console.log("Connected");

      setClient(client);

      client.subscribe("channel_1", (err) => {
        if (!err) {
          console.log("Connected!!");
        }
      });
    });

    client.on("disconnect", () => {
      console.log("disconnected");
    });
  }, []);

  return <MqttContext.Provider value={client}>{children}</MqttContext.Provider>;
}
