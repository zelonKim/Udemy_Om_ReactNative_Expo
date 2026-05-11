import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const mainImage =
  "https://res.cloudinary.com/dbspz5tmg/image/upload/v1740636562/holidia/core%20components/view/Serene_Moonlit_Landscape_jxnd87.jpg";
const galleryImages = [
  "https://res.cloudinary.com/dbspz5tmg/image/upload/v1740636563/holidia/core%20components/view/Whimsical_Forest_Scene_zhnl3n.jpg",
  "https://res.cloudinary.com/dbspz5tmg/image/upload/v1740636563/holidia/core%20components/view/Serene_Night_Lake_1_nr0biz.jpg",
  "https://res.cloudinary.com/dbspz5tmg/image/upload/v1740636563/holidia/core%20components/view/Serene_Night_Garden_kiwlwq.jpg",
  "https://res.cloudinary.com/dbspz5tmg/image/upload/v1740636561/holidia/core%20components/view/Stylized_Desert_Landscape_1_ehjcad.jpg",
  "https://res.cloudinary.com/dbspz5tmg/image/upload/v1740636562/holidia/core%20components/view/Serene_Lotus_Pond_Sunset_uiwjgo.jpg",
];

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f7f7f7" }}>
     
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        
        <View
          style={{
            height: 300,
            width: "100%",
          }}
        >
          <Image
            source={{ uri: mainImage }}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
          />
        </View>

       
        <View style={{ padding: 20 }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              color: "#333",
              marginBottom: 8,
            }}
          >
            Moonlit Forest Retreat
          </Text>
        </View>

        {/* Description */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              color: "#555",
              marginBottom: 16,
            }}
          >
            Nestled in the heart of Mystic Valley, this stunning retreat offers
            the perfect escape from city life. Surrounded by ancient forests and
            a serene lake, you will experience nature like never before.
          </Text>
        </View>

     
        <View style={{ marginBottom: 24 }}>
          <View style={{ paddingHorizontal: 20, marginBottom: 16 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333" }}>
              Photo Gallery
            </Text>
          </View>

         
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 16,
            }}
          >
            {galleryImages.map((image, index) => (
              <View
                key={index}
                style={{
                  width: 200,
                  height: 150,
                  borderRadius: 12,
                  marginLeft: index === 0 ? 4 : 0,
                  marginRight: 12,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={{ uri: image }}
                  style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                />
              </View>
            ))}
          </ScrollView>
        </View>

   
        <View style={{ paddingHorizontal: 20, paddingBottom: 30 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "deeppink",
              borderRadius: 12,
              paddingVertical: 16,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              Book This Retreat
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
