import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useMemo} from 'react';
import {ScreenStyles} from '../../styles/AppStyles';
import {Colors} from '../../styles/Colors';
import {SearchNormal} from 'iconsax-react-native';
import ProductItem from '../../components/cards/ProductCardComponent';
import firestore from '@react-native-firebase/firestore';
import {useFocusEffect} from '@react-navigation/native';

// Dummy products data
interface Product {
  id: string;
  name: string;
  color: string;
  price: string;
  image: string;
}

// const products: Product[] = [
//   {
//     id: '1',
//     name: 'Ladies Shirt with Long Sleeve',
//     color: 'White',
//     price: 'LKR 12000',
//     image:
//       'https://images.pexels.com/photos/2220315/pexels-photo-2220315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     id: '2',
//     name: 'Men Shirt with Short Sleeve',
//     color: 'White',
//     price: 'LKR 950',
//     image:
//       'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     id: '3',
//     name: 'Modern Ladies Top ',
//     color: 'White',
//     price: 'LKR 52000',
//     image:
//       'https://images.pexels.com/photos/1188748/pexels-photo-1188748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     id: '4',
//     name: 'Mens Casual T-Shirt',
//     color: 'Light Brown',
//     price: 'LKR 1200',
//     image:
//       'https://images.pexels.com/photos/806627/pexels-photo-806627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     id: '5',
//     name: 'Flowy Summer Dress',
//     color: 'Floral Print (multicolor)',
//     price: 'LKR 8500',
//     image:
//       'https://i.pinimg.com/564x/d8/36/0e/d8360ed6c1958dd7bb6030ff64746435.jpg',
//   },
//   {
//     id: '6',
//     name: 'Classic Leather Watch',
//     color: 'Brown',
//     price: 'LKR 18000',
//     image:
//       'https://www.shutterstock.com/shutterstock/photos/396561844/display_1500/stock-photo-modern-watch-on-a-businessman-s-wrist-over-black-background-396561844.jpg',
//   },
//   {
//     id: '7',
//     name: 'Cozy Knit Sweater',
//     color: 'Navy Blue',
//     price: 'LKR 15000',
//     image:
//       'https://i.pinimg.com/564x/b6/ca/8f/b6ca8ff031f1bc0e86068f0e00cd6e40.jpg',
//   },
//   {
//     id: '8',
//     name: 'Stylish Sneakers',
//     color: 'Black and White',
//     price: 'LKR 7800',
//     image:
//       'https://media.istockphoto.com/id/1174119261/photo/street-fashion-style-beautiful-sexy-woman-wearing-fashionable-spring-or-fall-clothes-outdoors.jpg?s=1024x1024&w=is&k=20&c=JP8RyToU3TLdOnXz1F47kWA1uriWo_Aqth_wS53cxHg=',
//   },
// ];

const ExploreProductesScreen = () => {
  // MARK: States
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([] as Product[]);
  const [filteredData, setFilteredData] = useState(products);

  useFocusEffect(
    React.useCallback(() => {
      getProducts();
    }, []),
  );

  const getProducts = async () => {
    const ItemsCollection = await firestore().collection('items').get();
    setProducts(ItemsCollection.docs.map(doc => doc.data() as Product));
    console.log(ItemsCollection.docs.map(doc => doc.data() as Product));
    
  };

  // Memoize filtered data to prevent unnecessary re-renders
  const memoizedFilteredData = useMemo(() => {
    if (searchQuery === '') {
      return products;
    } else {
      return products.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
  }, [searchQuery]);

  // Update filtered data only when memoized data changes
  useEffect(() => {
    setFilteredData(memoizedFilteredData);
  }, [memoizedFilteredData]);

  // MARK: Components
  const ProductsView: React.FC = () => {
    const groupedData = useMemo(() => {
      const result = [];
      for (let i = 0; i < filteredData.length; i += 2) {
        result.push(filteredData.slice(i, i + 2));
      }
      return result;
    }, [filteredData]);

    return (
      <View style={styles.ProductsView}>
        {groupedData.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.ProductRow}>
            {row.map(item => (
              <ProductItem key={item.id} item={item} />
            ))}
          </View>
        ))}
      </View>
    );
  };

  // MARK: Render
  return (
    <SafeAreaView style={ScreenStyles.container}>
      {/* Search Bar */}
      <View style={styles.SearchBarContainer}>
        <View style={styles.SearchBar}>
          <TextInput
            style={styles.SearchBarInput}
            placeholder="Search Product"
            placeholderTextColor="gray"
            keyboardType="default"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity
          style={styles.SearchBarFilter}
          onPress={() => setSearchQuery(searchQuery)}>
          <SearchNormal
            size={24}
            color={Colors.PRIMARY_WHITE}
            style={styles.SearchBarIcon}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={[ScreenStyles.HomeSubContainer, {marginTop: 0}]}>
        <ProductsView />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreProductesScreen;

// MARK: Styles
const styles = StyleSheet.create({
  SearchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderRadius: 20,
    marginVertical: 10,
    gap: 8,
    padding: 16,
    marginTop: 20,
  },
  SearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 12,
    flex: 1,
    borderColor: Colors.GRAY_300,
    borderWidth: 1,
  },
  SearchBarInput: {
    fontSize: 16,
    marginLeft: 12,
    flex: 1,
    color: Colors.PRIMARY_BLACK,
  },
  SearchBarIcon: {
    padding: 8,
  },
  SearchBarFilter: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.PRIMARY_BLACK,
    borderRadius: 16,
  },
  ProductsView: {
    paddingHorizontal: 1,
  },
  ProductRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
