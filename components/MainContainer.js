import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { fetchProductsActionCreator } from '../utilities/Actions';
import ProductsList from './ProductsList';

class MainContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    let products = (this.props.products) ? <ProductsList products={this.props.products} /> : <Text>Products are not loaded.</Text>

    return (
      <View style={styles.container}>
        {products}
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
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProducts: () => {
      dispatch(fetchProductsActionCreator())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
