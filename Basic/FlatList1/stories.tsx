import { TouchableOpacity, View, Text, FlatList } from 'react-native';

const storyItems = [
  { id: '1', emoji: '🌸', label: 'Flowers' },
  { id: '2', emoji: '🌿', label: 'Herbs' },
  { id: '3', emoji: '🌵', label: 'Cacti' },
  { id: '4', emoji: '🌷', label: 'Bulbs' },
  { id: '5', emoji: '🌹', label: 'Roses' },
  { id: '6', emoji: '🌻', label: 'Sunflower' },
  { id: '7', emoji: '🌺', label: 'Hibiscus' },
  { id: '8', emoji: '🪷', label: 'Lotus' },
  { id: '9', emoji: '🌼', label: 'Daisy' },
  { id: '10', emoji: '🌱', label: 'Seeds' },
];

type StoryItem = {
  id: string;
  emoji: string;
  label: string;
};



const Stories = () => {
  const renderStoryItem = (item: StoryItem) => (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        marginRight: 15,
        width: 60,
      }}>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: '#F5F3E8',
        }}>
        <Text style={{ fontSize: 30 }}>{item.emoji}</Text>
      </View>
      <Text
        style={{
          fontSize: 12,
          marginTop: 4,
          textAlign: 'center',
          color: '#6A6A6A',
        }}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        paddingVertical: 10,
      }}>
      <FlatList
        data={storyItems}
        renderItem={({ item }) => renderStoryItem(item)}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
      />
    </View>
  );
};

export default Stories;