import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

class ProductsList extends React.Component {

  render() {
    console.log(this.props);
    return (
       <View style={styles.container}>
        <FlatList
          data={this.props.products}
          renderItem={({item}) => <Text style={styles.item}>{item.name} {item.description} {item.price}</Text>}
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
    height: 66,
  },
});

export default ProductsList;
