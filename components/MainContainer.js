import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { fetchProductsActionCreator } from '../utilities/Actions';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    props.fetchProducts();
  }

  render() {
    console.log(this.props.products);
    return (
      <View style={styles.container}>
        <Text>{Array.isArray(this.props.products) ? this.props.products[0].name : 'undefined'}</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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
