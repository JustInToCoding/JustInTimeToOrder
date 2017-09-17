import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

class ProductsList extends React.Component {
  render() {
    return (
       <View style={styles.container}>
        <FlatList
          data={this.props.products}
          renderItem={({item}) => (
            <View>
              <Text style={styles.item}>{item.name}</Text>
              <Text style={styles.item}>{item.description}</Text>
              <Text style={styles.item}>{item.price}</Text>
              <Button
                onPress={() => this.props.placeOrder(item.key, 2)}
                title="Order"
                color="#841584"
                accessibilityLabel="Order this product"
              />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default ProductsList;
