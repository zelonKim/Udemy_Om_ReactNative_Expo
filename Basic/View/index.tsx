import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WIDTH = Dimensions.get("window").width;

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F9FC" }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View
          style={{
            margin: 16,
            borderRadius: 12,
            overflow: "hidden",
            // Your code here
          }}
        >
          <Image
            source={{
              uri: "https://res.cloudinary.com/dbspz5tmg/image/upload/v1740636562/holidia/core%20components/view/Serene_Moonlit_Landscape_jxnd87.jpg",
            }}
            style={{
              width: "100%",
              height: 200,
              resizeMode: "cover",
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: 16,
            backgroundColor: "#032A33",
          }}
        >
          <View
            style={{
              marginBottom: 16,
              backgroundColor: "white",
              borderRadius: 16,
              padding: 8,
            }}
          >
            <Image
              source={{
                uri: "https://res.cloudinary.com/dbspz5tmg/image/upload/v1740636563/holidia/core%20components/view/Whimsical_Forest_Scene_zhnl3n.jpg",
              }}
              style={{
                width: Math.floor(WIDTH / 4),
                height: 140,
                borderRadius: 12,
                resizeMode: "cover",
              }}
            />
          </View>

          <View
            style={{
              marginBottom: 16,
              backgroundColor: "white",
              borderRadius: 16,
              padding: 8,
            }}
          >
            <Image
              source={{
                uri: "https://res.cloudinary.com/dbspz5tmg/image/upload/v1740636562/holidia/core%20components/view/Serene_Moonlit_Landscape_jxnd87.jpg",
              }}
              style={{
                width: Math.floor(WIDTH / 4),
                height: 140,
                borderRadius: 12,
                resizeMode: "cover",
              }}
            />
          </View>

          <View
            style={{
              marginBottom: 16,
              backgroundColor: "white",
              borderRadius: 16,

              padding: 8,
            }}
          >
            <Image
              source={{
                uri: "https://res.cloudinary.com/dbspz5tmg/image/upload/v1740636563/holidia/core%20components/view/Serene_Night_Lake_1_nr0biz.jpg",
              }}
              style={{
                width: Math.floor(WIDTH / 4),
                height: 140,
                borderRadius: 12,
                resizeMode: "cover",
              }}
            />
          </View>

          <View
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              padding: 8,
              flex: 1,
              marginLeft: 8,
            }}
          >
            <Image
              source={{
                uri: "https://res.cloudinary.com/dbspz5tmg/image/upload/v1740636561/holidia/core%20components/view/Fluid_Nature_Illustration_fsjmww.jpg",
              }}
              style={{
                width: 80,
                height: 120,
                borderRadius: 12,
                resizeMode: "cover",
              }}
            />
          </View>

          <View
            style={{
              backgroundColor: "white",
              padding: 8,
              flex: 3,
              marginLeft: 8,
              borderRadius: 16,
            }}
          >
            <Image
              source={{
                uri: "https://res.cloudinary.com/dbspz5tmg/image/upload/v1740636561/holidia/core%20components/view/Serene_Night_Landscape_Illustration_wcxph0.jpg",
              }}
              style={{
                width: "100%",
                height: 120,
                resizeMode: "cover",
                borderRadius: 16,
              }}
            />
          </View>
        </View>

        <View
          style={{
            padding: 16,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 24,
              padding: 16,
              marginBottom: 16,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                alignItems: "center",
              }}
            >
              <Ionicons name="notifications" size={24} color="black" />
            </View>

            <View
              style={{
                marginLeft: 16,
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#000",
                  marginBottom: 6,
                }}
              >
                Notifications
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#8A8A8A",
                  lineHeight: 22,
                }}
              >
                Allows Dot to deliver timely reminders and proactive messages
              </Text>
            </View>
          </View>

          {/* TASK 4 // # Shadow comparison container
             - Set flexDirection to 'row'
             - Add justifyContent of 'space-between'
             - Set marginBottom to 16
          */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: "16",
            }}
          >
            <View
              style={{
                width: "48%",
                backgroundColor: "white",
                padding: 16,
                borderRadius: 12,
                shadowColor: "#101010",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.4,
                shadowRadius: 5,
              }}
            >
              <MaterialIcons name="apple" size={32} color="#007AFF" />
              <Text
                style={{
                  marginTop: 12,
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "#333",
                  textAlign: "center",
                }}
              >
                iOS Shadow
              </Text>
            </View>

            <View
              style={{
                width: "48%",
                backgroundColor: "white",
                padding: 16,
                borderRadius: 12,
                shadowColor: "#101010",
                elevation: 10,
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.4,
                shadowRadius: 5,
              }}
            >
              <MaterialIcons name="android" size={32} color="#3DDC84" />
              <Text
                style={{
                  marginTop: 12,
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "#333",
                  textAlign: "center",
                }}
              >
                Android Elevation
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
