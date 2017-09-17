import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import moment from 'moment';

class OrderDetail extends React.Component {

  componentDidMount() {
    this.interval = setInterval(() => {
      if(this.props.order) {
        this.props.fetchOrder(this.props.order.key);
      }
    }, 5000);
  }

  componentWillUnmount() {
    if(this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    let OrderView = this.props.order ? (
      <View style={styles.container}>
        <Text style={styles.item}>Hoeveelheid: {this.props.order.amount}</Text>
        <Text style={styles.item}>Besteld op: {moment(this.props.order.created_at).toString()}</Text>
        <Text style={styles.item}>Status: {this.props.order.status}</Text>
        <Text style={styles.item}>Products:</Text>
        <FlatList
          data={this.props.orderedProducts}
          renderItem={({item}) => <Text style={styles.item}>{item.name} &euro;{item.price},-</Text>}
        />
      </View>
    ) :
    <Text>Your order is being processed</Text>;

    return (
      <View style={styles.container}>
        {OrderView}
        <Button
          onPress={this.props.goBack}
          title="Go back"
          color="#841584"
          accessibilityLabel="Return to all products"
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

export default OrderDetail;
