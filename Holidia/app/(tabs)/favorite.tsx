import Container from '@/components/Container';
import Card from '@/components/favorite/card';
import Header from '@/components/header';
import { FAVORITES } from '@/core/constants/data';
import { ResponsiveGrid } from 'react-native-flexible-grid';


export default function Favorite() {
  return (
    <Container>
      <Header title="Favorite" />
      <ResponsiveGrid
        data={FAVORITES as Property[]}
        renderItem={({ item }) => <Card property={item} />}
        keyExtractor={(item: Property) => item.id}
        maxItemsPerColumn={2}
        itemUnitHeight={256}
      />
    </Container>
  );
}
