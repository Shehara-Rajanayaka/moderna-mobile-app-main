import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../styles/Colors';
import {Image} from 'react-native-elements/dist/image/Image';
import {Heart} from 'iconsax-react-native';

const ProductItem = ({item}: any) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.productCard}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text numberOfLines={1} lineBreakMode="tail" style={styles.productName}>
          {item.name}
        </Text>
        <Text style={styles.productColor}>{item.color}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
      {/* <TouchableOpacity style={styles.heartIcon}>
        <Heart color={Colors.PRIMARY_BLACK} size={20} />
      </TouchableOpacity> */}
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    marginBottom: 10,
    position: 'relative',
    //More soft shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productDetails: {
    marginTop: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.PRIMARY_BLACK,
  },
  productColor: {
    fontSize: 14,
    color: Colors.GRAY_600,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: Colors.PRIMARY_BLACK,
  },
  heartIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 5,
  },
});
