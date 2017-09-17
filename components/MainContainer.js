import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { fetchProductsActionCreator, orderProductActionCreator, setOrderedActionCreator } from '../utilities/Actions';
import ProductsList from './ProductsList';

class MainContainer extends React.Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  placeOrder(productIds, ammount) {
    this.props.placeOrder(productIds, ammount);
    this.setState({...this.state, hasOrdered: true});
  }

  render() {
    let products = (this.props.products) ? <ProductsList products={this.props.products} placeOrder={this.props.placeOrder} /> : <Text>Products are not loaded.</Text>;
    let currentView = !this.props.hasOrdered ? products : <Text>You have ordered!</Text>;

    return (
      <View style={styles.container}>
        {currentView}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    // MainContainer will have access to 'state.products' through 'this.props.products'
    products: state.products,
    hasOrdered: state.hasOrdered
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProducts: () => {
      dispatch(fetchProductsActionCreator());
    },
    placeOrder: (productIds, ammount) => {
      dispatch(orderProductActionCreator(productIds, ammount));
      dispatch(setOrderedActionCreator(true));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
