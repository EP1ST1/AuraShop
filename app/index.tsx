import React from "react"
import { Redirect } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, ScrollView, Image } from "react-native"
import {images} from '@/constants'
import CustomButton from "@/components/CustomButton"
import { useRouter } from "expo-router"

export default function Index() {
  const router = useRouter();
  const products = [
    {
      id: 1,
      name: "Workshop Python Django 5 with Next.JS 15 and Supabase",
      price: 100,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/workshop_django_nextjs.jpg",
    },
    {
      id: 2,
      name: "Basic React Native with Expo",
      price: 100,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/Basic_React_Native_Expo_Pic_Course.jpg",
    },
    {
      id: 3,
      name: "Basic Vue and Nuxt 3 with Prisma and Supabase",
      price: 100,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/Basic_Vue_Nuxt_Pic_Course.jpg",
    },
    {
      id: 4,
      name: "Basic Kubernetes (K8s) for Web Developer",
      price: 100,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/k8s-for-dev-cover.jpg",
    },
    {
      id: 5,
      name: "Internet of Things with MicroPython สำหรับผู้เริ่มต้น",
      price: 100,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/IOT_MicroPython_Cover.jpg",
    },
    {
      id: 6,
      name: "Full Stack Web Application with Go and React",
      price: 100,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/Go_and_React_PicCourse.jpg",
    },
    {
      id: 7,
      name: "Workshop Web API Spring Boot 3 Kotlin with Nuxt 3 and Docker",
      price: 100,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/SpringBoot3_With_Nuxt3_PicCourse.jpg",
    },
    {
      id: 8,
      name: "Workshop Laravel 11 with Vue 3",
      price: 100,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/Laravel11_Vue3_Pic_Course.jpg",
    },
    {
      id: 9,
      name: "Workshop Angular 17 with .NET Core 8",
      price: 100,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/Angular_with_NET8_PictureCourse.jpg",
    },
    {
      id: 10,
      name: "สร้างรายงานด้วย Power BI ร่วมกับ Power Query สำหรับผู้เริ่มต้น",
      price: 100,
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/PowerBI_With_Power_Query_Pic_Course.jpg",
    },
  ]
  return (

   <Redirect href={"/(tabs)/home"} />       //เปิดหน้าเว็บแล้วให้ขึ้นไปหน้าHomeเลย
//    <SafeAreaView className="bg-gray-900 h-full">
//     <ScrollView contentContainerStyle={{ height: "100%"}}>
//         <View className=" w-full flex justify-center items-center h-full px-4 ">
//             <Image source={images.logo} className="h-[84px]" resizeMode="contain" />
//             <Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMode="contain" />
//             <View className="relative mt-5 ">
//                 <Text className=" text-3xl text-white font-bold text-center ">
//                     Lorem ipsum dolor sit {"\n"}  amet Aurashop 
//                     <Text className=" text-orange-300 "> AuraShop.</Text>
//                 </Text>
//                 <Image source={images.path} className="w-[150px] h-[15px] absolute bottom-0 -right-1 " resizeMode="contain" />
//             </View>
//             <Text className="text-sm text-gray-100 mt-7 text-center">
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque error sit culpa incidunt. Eius, at.
//             </Text>

//             <CustomButton
//             title="Continue with Email"
//             handlePress={() => { 
//               router.push("/(auth)/login");
//             }}
//             containerStyles="w-full mt-7"
//           />
//         </View>
//     </ScrollView>
//    </SafeAreaView>

  )
}