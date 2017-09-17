import React from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, Button } from 'react-native';

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
              <Text style={styles.item}>&euro;{item.price},-</Text>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => {
                    let newState = { ...this.state };
                    newState[item.key] = text;
                    this.setState(newState);
                  }
                }
                keyboardType={'numeric'}
                value={this.state[item.key]}
              />
              <Button
                onPress={() => {
                  if(this.state[item.key] && parseInt(this.state[item.key]) > 0) {
                    this.props.placeOrder([item.key], parseInt(this.state[item.key]));
                  }
                }}
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
