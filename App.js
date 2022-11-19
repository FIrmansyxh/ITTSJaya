import React, { Component } from 'react'
import {StyleSheet,TouchableOpacity,Text,View,} from 'react-native'

class App extends Component {
  state = {
    namaku: "Firmansyah"
  }

  change = () => {
    this.setState({
      namaku: "Muhammad Firmansyah"
    })
  }

 render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
         style={styles.button}
         onPress={this.change}
        >
         <Text style={{color: 'white',
          fontSize: 15}}> Nama Lengkap</Text>
        </TouchableOpacity>
        <View>
          <Text>
            {this.state.namaku}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00008B',
    padding: 20,
    marginBottom: 20
  }
})

export default App;
