import React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import Stories from "./stories";

type FeatureItemType = {
  id: string;
  emoji: string;
  title: string;
  description: string;
};

const features = [
  {
    id: "1",
    emoji: "🌸",
    title: "Blooming Gardens",
    description: "Discover seasonal flower collections",
  },
  {
    id: "2",
    emoji: "🌿",
    title: "Organic Herbs",
    description: "Fresh herbs for your kitchen garden",
  },
  {
    id: "3",
    emoji: "🌵",
    title: "Desert Plants",
    description: "Low maintenance succulents and cacti",
  },
  {
    id: "4",
    emoji: "🌷",
    title: "Spring Bulbs",
    description: "Tulips, daffodils and more for early color",
  },
  {
    id: "5",
    emoji: "🌹",
    title: "Rose Collection",
    description: "Classic roses in various colors",
  },
  {
    id: "6",
    emoji: "🌻",
    title: "Sunflower Fields",
    description: "Bright and cheerful summer favorites",
  },
  {
    id: "7",
    emoji: "🌺",
    title: "Tropical Hibiscus",
    description: "Exotic blooms for warm climates",
  },
  {
    id: "8",
    emoji: "🪷",
    title: "Lotus Garden",
    description: "Water plants for pond and aquatic gardens",
  },
  {
    id: "9",
    emoji: "🌼",
    title: "Daisy Meadows",
    description: "Create a wildflower look in your garden",
  },
  {
    id: "10",
    emoji: "🌱",
    title: "Seedling Starters",
    description: "Begin your garden journey from scratch",
  },
  {
    id: "11",
    emoji: "🍀",
    title: "Lucky Clovers",
    description: "Bring good fortune to your garden",
  },
  {
    id: "12",
    emoji: "🌲",
    title: "Evergreen Trees",
    description: "Year-round greenery for your landscape",
  },
  {
    id: "13",
    emoji: "🌴",
    title: "Palm Varieties",
    description: "Create a tropical oasis in your backyard",
  },
  {
    id: "14",
    emoji: "🍂",
    title: "Autumn Foliage",
    description: "Trees with spectacular fall colors",
  },
  {
    id: "15",
    emoji: "🍄",
    title: "Mushroom Garden",
    description: "Grow your own edible fungi",
  },
  {
    id: "16",
    emoji: "💐",
    title: "Bouquet Specials",
    description: "Perfect flower combinations for any occasion",
  },
  {
    id: "17",
    emoji: "🪴",
    title: "Potted Plants",
    description: "Indoor greenery for home decoration",
  },
  {
    id: "18",
    emoji: "🌾",
    title: "Ornamental Grasses",
    description: "Add texture and movement to your garden",
  },
  {
    id: "19",
    emoji: "🍃",
    title: "Wind Gardens",
    description: "Plants that dance in the breeze",
  },
  {
    id: "20",
    emoji: "🪻",
    title: "Hyacinth Collection",
    description: "Fragrant spring flowers in vibrant colors",
  },
  {
    id: "21",
    emoji: "🥀",
    title: "Preserved Flowers",
    description: "Long-lasting dried arrangements",
  },
  {
    id: "22",
    emoji: "🌳",
    title: "Shade Trees",
    description: "Cool your yard with leafy canopies",
  },
  {
    id: "23",
    emoji: "🍁",
    title: "Japanese Maples",
    description: "Elegant trees with colored foliage",
  },
  {
    id: "24",
    emoji: "🦋",
    title: "Butterfly Garden",
    description: "Plants that attract beautiful pollinators",
  },
  {
    id: "25",
    emoji: "🐝",
    title: "Bee-Friendly Plants",
    description: "Support local pollinators with these flowers",
  },
  {
    id: "26",
    emoji: "🌊",
    title: "Water Features",
    description: "Plants for ponds and water gardens",
  },
  {
    id: "27",
    emoji: "☘️",
    title: "Irish Garden",
    description: "Shamrocks and Celtic-inspired plants",
  },
  {
    id: "28",
    emoji: "🌜",
    title: "Night-Blooming Flowers",
    description: "Plants that open under moonlight",
  },
  {
    id: "29",
    emoji: "🌞",
    title: "Full Sun Perennials",
    description: "Heat-loving plants for sunny spots",
  },
  {
    id: "30",
    emoji: "🍋",
    title: "Citrus Trees",
    description: "Grow your own lemons, limes, and oranges",
  },
  {
    id: "31",
    emoji: "🍓",
    title: "Berry Patches",
    description: "Sweet fruits for your edible garden",
  },
  {
    id: "32",
    emoji: "🌶️",
    title: "Spicy Peppers",
    description: "From mild to wild, grow your heat",
  },
  {
    id: "33",
    emoji: "🍅",
    title: "Tomato Varieties",
    description: "Heirloom and hybrid tomatoes for any garden",
  },
  {
    id: "34",
    emoji: "🧠",
    title: "Brain Plants",
    description: "Celosia and other plants with unique forms",
  },
  {
    id: "35",
    emoji: "🪨",
    title: "Rock Garden",
    description: "Alpine plants for rocky terrain",
  },
  {
    id: "36",
    emoji: "🧪",
    title: "Medicinal Herbs",
    description: "Traditional plants with healing properties",
  },
  {
    id: "37",
    emoji: "🧚",
    title: "Fairy Garden",
    description: "Miniature plants for magical displays",
  },
  {
    id: "38",
    emoji: "🌈",
    title: "Rainbow Garden",
    description: "Create a spectrum of color with flowers",
  },
  {
    id: "39",
    emoji: "🦡",
    title: "Wildlife Garden",
    description: "Plants that support local fauna",
  },
  {
    id: "40",
    emoji: "🏜️",
    title: "Drought Resistant",
    description: "Water-wise plants for dry climates",
  },
  {
    id: "41",
    emoji: "❄️",
    title: "Winter Interest",
    description: "Plants that shine in the cold season",
  },
  {
    id: "42",
    emoji: "🍯",
    title: "Honey Plants",
    description: "Flowers that produce abundant nectar",
  },
  {
    id: "43",
    emoji: "🍷",
    title: "Vineyard Starts",
    description: "Grape varieties for home winemaking",
  },
  {
    id: "44",
    emoji: "🌫️",
    title: "Mist Garden",
    description: "Plants that thrive in foggy conditions",
  },
  {
    id: "45",
    emoji: "🪶",
    title: "Feathery Ferns",
    description: "Delicate fronds for shady spots",
  },
  {
    id: "46",
    emoji: "🧵",
    title: "Fiber Plants",
    description: "Grow your own textile materials",
  },
  {
    id: "47",
    emoji: "🧂",
    title: "Salt-Tolerant Plants",
    description: "Perfect for coastal gardens",
  },
  {
    id: "48",
    emoji: "🥬",
    title: "Leafy Greens",
    description: "Nutritious vegetables for your garden",
  },
  {
    id: "49",
    emoji: "🍯",
    title: "Fragrant Flowers",
    description: "Sweet-smelling blooms for sensory gardens",
  },
  {
    id: "50",
    emoji: "🎍",
    title: "Bamboo Grove",
    description: "Fast-growing screens and focal points",
  },
  {
    id: "51",
    emoji: "🎋",
    title: "Asian Garden",
    description: "Create a zen atmosphere with Eastern plants",
  },
  {
    id: "52",
    emoji: "🌃",
    title: "City Garden",
    description: "Plants that thrive in urban environments",
  },
  {
    id: "53",
    emoji: "🦠",
    title: "Moss Collection",
    description: "Velvety green carpets for shady areas",
  },
  {
    id: "54",
    emoji: "🔬",
    title: "Rare Specimens",
    description: "Unusual plants for collectors",
  },
];

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FAF9F0",
      }}
    >
      <View
        style={{
          flex: 1,
          paddingTop: 20,
        }}
      >
        <FlatList
          data={features}
          renderItem={({ item }) => (
            <FeatureItem
              emoji={item.emoji}
              title={item.title}
              description={item.description}
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: 20,
          }}
          ListHeaderComponent={Stories}
        />
      </View>
    </SafeAreaView>
  );
}

type FeatureItemProps = {
  emoji: string;
  title: string;
  description: string;
};

function FeatureItem({ emoji, title, description }: FeatureItemProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 22,
        padding: 16,
        backgroundColor: "white",
        marginBottom: 12,
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginRight: 16,
        }}
      >
        <Text
          style={{
            fontSize: 20,
          }}
        >
          {emoji}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "600",
            marginBottom: 4,
            color: "#3C3C3C",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: "#6A6A6A",
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
}
