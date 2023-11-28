import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 flex bg-white space-y-5" edges={["top"]}>
      <StatusBar style="dark" />
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-semibold tracking-wider text-gray-600"
          >
            Ready To
          </Text>
          <Text
            style={{ fontSize: hp(4) }}
            className="font-semibold tracking-wider text-rose-700"
          >
            WORKOUT
          </Text>
        </View>
        <View className="flex justify-center items-center space-y-2">
          <Image
            className="rounded-full"
            source={require("../assets/images/avatar.png")}
            style={{ height: hp(5), width: hp(5) }}
          />
          <View
            className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
            style={{ height: hp(4), width: hp(4) }}
          >
            <Icon name="bell" size={hp(2.5)} color="gray" />
          </View>
        </View>
      </View>
      {/*slider*/}
      <View>
        <ImageSlider />
      </View>
      {/*body parts*/}
      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
}
