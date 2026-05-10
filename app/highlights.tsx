import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { ThreadType } from "../types/index";

interface highlightHeaderProps {
  data: ThreadType[];
}

const Highlights: React.FC<highlightHeaderProps> = ({ data }) => {
  return (
    <View style={styles.highlightContainer}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => `highlight-${item.id}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: { item: ThreadType }) => (
          <TouchableOpacity style={styles.highlightItem}>
            <View style={styles.highlightRing}>
              <Image
                source={{ uri: item.user.profilePicture }}
                style={styles.highlightImage}
              />
            </View>
            <Text style={styles.highlightUsername} numberOfLines={1}>
              {item.user.username}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};




const styles = StyleSheet.create({
  highlightContainer: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E5E5E5",
  },
  highlightItem: {
    alignItems: "center",
    marginHorizontal: 8,
    width: 70,
  },
  highlightRing: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    borderWidth: 2,
    borderColor: "#4292EF",
    justifyContent: "center",
    alignItems: "center",
  },
  highlightImage: {
    width: 58,
    height: 58,
    borderRadius: 29,
  },
  highlightUsername: {
    marginTop: 4,
    fontSize: 11,
    textAlign: "center",
    width: "100%",
  },
});

export default Highlights;
