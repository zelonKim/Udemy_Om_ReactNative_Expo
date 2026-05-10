import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Highlights from "./highlights";

const nanoid = (size = 21) => {
  const alphabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  let id = "";
  for (let i = 0; i < size; i++) {
    id += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return id;
};

type UserType = {
  username: string;
  name: string;
  profilePicture: string;
};

export type ThreadType = {
  id: string;
  user: UserType;
  content: string;
  timestamp: string;
  likes: number;
  replies: number;
  reposts: number;
  shares: number;
};

const COLORS = {
  BLACK: "#000000",
  WHITE: "#FFFFFF",
  GRAY: {
    100: "#F5F5F5",
    200: "#E5E5E5",
    500: "#737373",
  },
  BLUE: {
    400: "#4292EF",
  },
  RED: {
    500: "#EF4444",
  },
  ICON_GRAY: "#B8B8B8",
  TEXT_GRAY: "#262626",
};

export const INITIAL_DATA: ThreadType[] = [
  {
    id: nanoid(),
    user: {
      username: "theverge",
      name: "The Verge",
      profilePicture:
        "https://res.cloudinary.com/dbspz5tmg/image/upload/v1733036926/Lauterbrunnen_Photo_v0lvtp.jpg",
    },
    content:
      "Breaking: Apple announces new M3 chip for MacBooks. Full story on our website. #AppleNews #TechUpdates",
    timestamp: "2024-09-19T10:30:00Z",
    likes: 1520,
    replies: 342,
    reposts: 687,
    shares: 210,
  },
  {
    id: nanoid(),
    user: {
      username: "dieter",
      name: "Dieter Bohn",
      profilePicture:
        "https://res.cloudinary.com/dbspz5tmg/image/upload/v1740814282/samples/people/Dog_Photo_Tanika_Pietila_qo42js.jpg",
    },
    content:
      "Just finished our hands-on with the new Google Pixel. Impressive camera upgrades! Full review coming soon on @theverge",
    timestamp: "2024-09-19T11:15:00Z",
    likes: 834,
    replies: 156,
    reposts: 201,
    shares: 100,
  },
  {
    id: nanoid(),
    user: {
      username: "CaseyNewton",
      name: "Casey Newton",
      profilePicture:
        "https://res.cloudinary.com/dbspz5tmg/image/upload/v1678984759/sample.jpg",
    },
    content:
      "Exclusive: Sources tell me Twitter is testing a new feature to combat misinformation. Story coming soon on @theverge",
    timestamp: "2024-09-19T14:45:00Z",
    likes: 1102,
    replies: 267,
    reposts: 398,
    shares: 120,
  },
  {
    id: nanoid(),
    user: {
      username: "theverge",
      name: "The Verge",
      profilePicture:
        "https://res.cloudinary.com/dbspz5tmg/image/upload/v1733036926/Lauterbrunnen_Photo_v0lvtp.jpg",
    },
    content:
      "Tesla unveils new electric bike prototype at surprise event. Our first look and analysis: [link to article] #Tesla #EVs",
    timestamp: "2024-09-19T16:30:00Z",
    likes: 2189,
    replies: 504,
    reposts: 876,
    shares: 230,
  },
  {
    id: nanoid(),
    user: {
      username: "theverge",
      name: "The Verge",
      profilePicture:
        "https://res.cloudinary.com/dbspz5tmg/image/upload/v1678984767/samples/people/boy-snow-hoodie.jpg",
    },
    content:
      "Tesla unveils new electric bike prototype at surprise event. Our first look and analysis: [link to article] #Tesla #EVs",
    timestamp: "2024-09-19T16:30:00Z",
    likes: 2189,
    replies: 504,
    reposts: 876,
    shares: 230,
  },
];

interface ThreadCardProps {
  item: ThreadType;
}

const ThreadCard = ({ item }: ThreadCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: item.user.profilePicture }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <View style={styles.userInfo}>
            <MaterialCommunityIcons
              name="check-decagram"
              size={16}
              color={COLORS.BLUE[400]}
            />
            <Text style={styles.userName}>{item.user.name}</Text>
          </View>
          <Pressable style={styles.optionsButton}>
            <Ionicons
              name="ellipsis-horizontal"
              size={16}
              color={COLORS.TEXT_GRAY}
            />
          </Pressable>
        </View>

        <View style={styles.itemContent}>
          <Text>{item.content}</Text>

          <View style={styles.engagementContainer}>
            <Pressable style={styles.engagementItem}>
              <Ionicons
                name="heart-outline"
                size={20}
                color={COLORS.TEXT_GRAY}
              />
              <Text style={styles.engagementText}>{item.likes}</Text>
            </Pressable>
            <View style={styles.engagementItem}>
              <Ionicons
                name="chatbubble-outline"
                size={20}
                color={COLORS.TEXT_GRAY}
              />
              <Text style={styles.engagementText}>{item.replies}</Text>
            </View>
            <View style={styles.engagementItem}>
              <Ionicons name="repeat" size={20} color={COLORS.TEXT_GRAY} />
              <Text style={styles.engagementText}>{item.reposts}</Text>
            </View>
            <View style={styles.engagementItem}>
              <Feather name="send" size={20} color={COLORS.TEXT_GRAY} />
              <Text style={styles.engagementText}>{item.shares}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

/////////////////////////////

const generateNewItem = (): ThreadType => {
  // Generate a unique ID using nanoid instead of timestamp
  const id = nanoid();
  const usernames = ["theverge", "dieter", "CaseyNewton"];
  const randomIndex = Math.floor(Math.random() * usernames.length);

  return {
    id,
    user: {
      username: usernames[randomIndex],
      name:
        usernames[randomIndex] === "theverge"
          ? "The Verge"
          : usernames[randomIndex] === "dieter"
            ? "Dieter Bohn"
            : "Casey Newton",
      profilePicture:
        "https://res.cloudinary.com/dbspz5tmg/image/upload/v1733036926/Lauterbrunnen_Photo_v0lvtp.jpg",
    },
    content: `New item with the latest tech news. Check it out! #Technology #Updates`,
    timestamp: new Date().toISOString(),
    likes: Math.floor(Math.random() * 1000),
    replies: Math.floor(Math.random() * 200),
    reposts: Math.floor(Math.random() * 500),
    shares: Math.floor(Math.random() * 100),
  };
};

/////////////////////////////

const Separator = () => <View style={styles.separator} />;

interface FooterProps {
  loading: boolean;
}

const Footer = ({ loading }: FooterProps) => {
  if (!loading) return null;

  return (
    <View style={styles.footer}>
      <ActivityIndicator size="small" color={COLORS.BLUE[400]} />
      <Text style={styles.footerText}>Loading more items...</Text>
    </View>
  );
};

const Header = () => <Highlights data={INITIAL_DATA} />;

const EmptyList = () => (
  <View style={styles.emptyContainer}>
    <Feather name="gift" size={40} color={COLORS.BLUE[400]} />
    <Text style={styles.emptyTitle}>No items found</Text>
    <Text style={styles.emptySubtitle}>Pull down to refresh</Text>
  </View>
);

/////////////////////////////

const App = () => {
  const [data, setData] = useState<ThreadType[]>(INITIAL_DATA);

  const [refreshing, setRefreshing] = useState(false);

  const [loading, setLoading] = useState(false);

  const flatListRef = useRef<FlatList>(null);

  const handleRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      const newItem = generateNewItem();
      setData([newItem, ...data]);
      setRefreshing(false);
    }, 2000);
  };

  const loadMoreData = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const newData = [
        generateNewItem(),
        generateNewItem(),
        generateNewItem(),
        generateNewItem(),
      ];
      setData([...data, ...newData]);
      setLoading(false);
    }, 1000);
  };

  const scrollTopTop = () => {
    flatListRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
  };

  const renderItem = ({ item }: { item: ThreadType }): React.ReactElement => (
    <ThreadCard item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        ref={flatListRef}
        keyExtractor={(item: ThreadType) => item.id}
        ListEmptyComponent={<EmptyList />}
        ItemSeparatorComponent={() => <Separator />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={Header}
        ListFooterComponent={<Footer loading={loading} />}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={handleRefresh} />
        }
        onEndReached={loadMoreData}
      />
      <Pressable
        onPress={scrollTopTop}
        style={styles.scrollTopButton}

      >
        <Feather name="arrow-up" size={24} color={"white"} />
      </Pressable>
    </SafeAreaView>
  );
};

//////////////////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },

  separator: {
    height: 0.5,
    width: "100%",
    backgroundColor: COLORS.GRAY[200],
  },
  cardContainer: {
    flexDirection: "row",
    padding: 15,
  },
  avatarContainer: {
    marginRight: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  contentContainer: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    marginLeft: 5,
    marginRight: 8,
    fontWeight: "600",
    color: COLORS.BLACK,
  },
  optionsButton: {
    padding: 5,
  },
  itemContent: {
    marginTop: 5,
  },
  engagementContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingRight: 40,
  },
  engagementItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  engagementText: {
    marginLeft: 5,
    fontSize: 12,
    color: COLORS.GRAY[500],
  },
  footer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    marginLeft: 8,
    color: COLORS.GRAY[500],
    fontSize: 14,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: COLORS.BLACK,
  },
  emptySubtitle: {
    fontSize: 14,
    color: COLORS.GRAY[500],
    marginTop: 5,
  },
  scrollTopButton: {
    position: "absolute",
    bottom: 32,
    right: 20,
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: COLORS.BLUE[400],
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default App;
