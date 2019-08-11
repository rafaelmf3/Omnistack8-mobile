import React from "react";
import { SafeAreaView, Image } from "react-native";

import logo from "../assets/logo.png";

export default function pages() {
  return (
    <SafeAreaView>
      <Image source={logo} />
    </SafeAreaView>
  );
}
