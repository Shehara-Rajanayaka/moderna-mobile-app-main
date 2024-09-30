import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ScreenStyles, TextStyles} from '../../styles/AppStyles';
import {Fonts} from '../../styles/fonts';
import {Colors} from '../../styles/Colors';
import { SearchNormal, Setting4} from 'iconsax-react-native';
import {CreateProductRows} from '../../helpers/helpers';
import ProductItem from '../../components/cards/ProductCardComponent';

const products = [
  {
    id: '1',
    name: 'Ladies Shirt with Long Sleeve',
    color: 'White',
    price: 'LKR 12000',
    image:
      'https://images.pexels.com/photos/2220315/pexels-photo-2220315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    name: 'Men Shirt with Short Sleeve',
    color: 'White',
    price: 'LKR 950',
    image:
      'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '3',
    name: 'Modern Ladies Top ',
    color: 'White',
    price: 'LKR 52000',
    image:
      'https://images.pexels.com/photos/1188748/pexels-photo-1188748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '4',
    name: 'Mens Casual T-Shirt',
    color: 'Light Brown',
    price: 'LKR 1200',
    image:
      'https://images.pexels.com/photos/806627/pexels-photo-806627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const HomeScreen = () => {
  // Mark: Component
  const WelcomeView: React.FC = () => {
    return (
      <View style={[styles.WelcomeDataContainer]}>
        <Text style={[TextStyles.H6, styles.WelcomeTextStyles]}>
          Hey, Thamoddya!
        </Text>
        <Text style={[styles.WelcomeTitleStyles]}>
          Let’s find your Exclusive Outfit
        </Text>
      </View>
    );
  };

  const SearchBarView: React.FC = () => {
    return (
      <View style={[styles.SearchBarContainer]}>
        <View style={[styles.SearchBar]}>
          <SearchNormal
            size={24}
            color="black"
            style={[styles.SearchBarIcon]}
          />
          <TextInput
            style={[styles.SearchBarInput]}
            placeholder="Search Product"
            placeholderTextColor="gray"
            keyboardType="default"
          />
        </View>
        <View style={[styles.SearchBarFilter]}>
          <Setting4
            size={20}
            color="black"
            style={[styles.SearchBarFilterIcon]}
          />
        </View>
      </View>
    );
  };

  const TopCategoriesView: React.FC = () => {
    return (
      <View>
        <Text style={[TextStyles.H7]}>Top Categories</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.TopCategoryContainer]}>
          <TouchableOpacity style={[styles.TopCategoryItemActive]}>
            <Text style={[TextStyles.H6, {color: Colors.PRIMARY_WHITE}]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.TopCategoryItem]}>
            <Text style={[TextStyles.H6]}>T-Shirt</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.TopCategoryItem]}>
            <Text style={[TextStyles.H6]}>Women</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.TopCategoryItem]}>
            <Text style={[TextStyles.H6]}>Men</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.TopCategoryItem]}>
            <Text style={[TextStyles.H6]}>Unisex</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };

  const PopularProductsView: React.FC = () => {
    // Helper function to create product rows
    const MainProductItems = CreateProductRows(products);
    return (
      <View style={[styles.PopularProductsView]}>
        <View style={[styles.PopularProductTitleContainer]}>
          <Text style={[TextStyles.H7]}>Popular Products</Text>
          <TouchableOpacity>
            <Text style={[TextStyles.H6, {color: Colors.GRAY_500}]}>
              View All
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.PopularProductsViewContainer]}>
          {MainProductItems.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((item: any) => (
                <ProductItem key={item.id} item={item} />
              ))}
            </View>
          ))}
        </View>
      </View>
    );
  };

  // Mark : Render
  return (
    <SafeAreaView style={[ScreenStyles.container]}>
      <ScrollView style={[ScreenStyles.HomeSubContainer]}>
        <WelcomeView />
        <SearchBarView />
        <TopCategoriesView />
        <PopularProductsView />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  WelcomeTextStyles: {
    fontWeight: 'normal',
    fontFamily: Fonts.HelveticaNowTextRegular,
  },
  WelcomeTitleStyles: {
    fontWeight: 'heavy',
    fontFamily: Fonts.HelveticaNowTextBold,
    fontSize: 30,
    color: Colors.PRIMARY_BLACK,
    lineHeight: 40,
  },
  WelcomeDataContainer: {
    gap: 14,
  },
  SearchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderRadius: 20,
    marginVertical: 10,
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
  },
  SearchBarIcon: {
    padding: 8,
  },
  SearchBarFilter: {
    padding: 8,
  },
  SearchBarFilterIcon: {
    padding: 4,
  },
  TopCategoryItem: {
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 20,
    backgroundColor: Colors.PRIMARY_WHITE,
    borderColor: Colors.GRAY_300,
    borderWidth: 1,
  },
  TopCategoryItemActive: {
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 20,
    backgroundColor: Colors.PRIMARY_BLACK,
    borderColor: Colors.PRIMARY_BLACK,
    borderWidth: 1,
  },
  TopCategoryContainer: {
    gap: 10,
    paddingVertical: 10,
  },
  PopularProductsView: {
    marginVertical: 20,
    gap: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  PopularProductTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  PopularProductsViewContainer: {
    padding: 2,
  },
});
