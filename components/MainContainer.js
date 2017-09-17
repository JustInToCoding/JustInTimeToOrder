import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { fetchProductsActionCreator, orderProductActionCreator, setOrderedActionCreator, fetchOrderActionCreator } from '../utilities/Actions';
import ProductsList from './ProductsList';
import OrderDetail from './OrderDetail';

class MainContainer extends React.Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    let products = (this.props.products) ?
      <ProductsList products={this.props.products} placeOrder={this.props.placeOrder} /> :
      <Text>Products are being loaded.</Text>;
    let currentView = !this.props.hasOrdered ?
      products :
      <OrderDetail order={this.props.order} orderedProducts={this.props.orderedProducts} fetchOrder={this.props.fetchOrder} goBack={this.props.goBack} />;

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
    hasOrdered: state.hasOrdered,
    order: state.order,
    orderedProducts: state.orderedProducts
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProducts: () => {
      dispatch(fetchProductsActionCreator());
    },
    placeOrder: (productIds, amount) => {
      dispatch(orderProductActionCreator(productIds, amount));
      dispatch(setOrderedActionCreator(true));
    },
    fetchOrder: (orderId) => {
      dispatch(fetchOrderActionCreator(orderId));
    },
    goBack: () => {
      dispatch(setOrderedActionCreator(false));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
