"use client";

import { useEffect, useState, createContext, ReactNode } from "react";
import mqtt from "mqtt";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

export interface IMqttProvider {
  children: ReactNode;
  userName: string;
}

export const MqttContext = createContext<null | mqtt.MqttClient>(null);
export const UserContext = createContext("");

export function MqttProvider({ children, userName }: IMqttProvider) {
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

  return (
    <MqttContext.Provider value={client}>
      <UserContext.Provider value={userName}>{children}</UserContext.Provider>
    </MqttContext.Provider>
  );
}
