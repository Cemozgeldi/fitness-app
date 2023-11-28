import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { fetchExercises } from "../api/exerciseDb";
import { demoExercises } from "../constants";
import { StatusBar } from "expo-status-bar";
import ExerciseList from "../components/ExerciseList";

export default function Exercises() {
  const router = useRouter();
  const [exercises, setExercises] = useState(demoExercises);
  const item = useLocalSearchParams();
  console.log("got item: ", item);
  useEffect(() => {
    // if (item) getExercises(item.name);
  }, [item]);

  const getExercises = async (bodyPart) => {
    let data = await fetchExercises(bodyPart);
    // console.log("got data : ", data);
    setExercises(data);
  };
  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-rose-500 mx-4 flex items-center pr-1 justify-center absolute rounded-full"
        style={{ height: hp(5), width: hp(5), marginTop: hp(7) }}
      >
        <Icon name="arrow-left" size={hp(3)} color="white" />
      </TouchableOpacity>
      {/*body part exercises*/}
      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-900"
        >
          {item.name} exercises
        </Text>
        <View className="mb-10">
          <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
}
