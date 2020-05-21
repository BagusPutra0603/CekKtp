/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';


// create a component
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputnama: '',
      inputnik: 0,
      jeniskelamin: '',
      nama: '',
      kotakab: '',
      kecamatan: '',
      kelurahan: '',
      provinsi: '',
      tempatlahir: '',
    };
  }

  klikData() {

    axios.get(`https://api.binderbyte.com/cekktp?nik=${this.state.inputnik}&nama=${this.state.inputnama}&api_key=b93d2b4c91558598775d821f8d5187c2bde76d4fa726805c581458585e532005`)
      .then((res) => {
        console.log(res.data.message)
        this.setState({
          nama: res.data.data.nama,
          kotakab: res.data.data.namaKabko,
          kecamatan: res.data.data.namaKec,
          kelurahan: res.data.data.namaKel,
          provinsi: res.data.data.namaPropinsi,
          tempatlahir: res.data.data.tempat_lahir,
        })

      })
      .catch((err) => {
        // handle err
        // console.log(err)
      });

  }


  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{ backgroundColor: '#00008B' }}>

            <Text style={{ textAlign: 'center', color: 'white', fontSize: 30, marginHorizontal: '10%' }}>APLIKASI PENGECEK DATA KTP</Text>

            <TextInput
              placeholder="Masukan NIK"
              style={{ borderColor: '#F4A460', borderWidth: 2, marginHorizontal: '10%', marginVertical: '5%', padding: '3%', borderRadius: 40, backgroundColor: 'white' }}
              value={this.state.inputnik}
              onChangeText={(inputnik) => this.setState({ inputnik })}

            />
            <TextInput
              placeholder="Masukan Nama Anda"
              style={{ borderColor: '#F4A460', borderWidth: 2, marginHorizontal: '10%', marginVertical: '5%', padding: '3%', borderRadius: 40, backgroundColor: 'white' }}
              value={this.state.inputnama}
              onChangeText={(inputnama) => this.setState({ inputnama })}
              autoCapitalize={"characters"}
            />
            <TouchableOpacity
              style={{ borderRadius: 50, borderColor: '#FF69B4', marginHorizontal: '10%', borderWidth: 2, marginVertical: '5%', padding: '5%', backgroundColor: 'white' }}
              onPress={() => this.klikData()}
            >
              <Text style={{ color: '#90EE90', textAlign: 'center', fontSize: 20 }}>Klik</Text>
            </TouchableOpacity>

            <View style={{ marginHorizontal: '10%', marginVertical: '5%' }}>
              <Text style={{ fontSize: 20, color: 'white' }}>Nama Lengkap : {this.state.nama}</Text>
            </View>
            <View style={{ marginHorizontal: '10%', marginVertical: '5%' }}>
              <Text style={{ fontSize: 20, color: 'white' }}>Tempat Lahir : {this.state.tempatlahir}</Text>
            </View>
            <View style={{ marginHorizontal: '10%', marginVertical: '5%' }}>
              <Text style={{ fontSize: 20, color: 'white' }}>Provinsi : {this.state.provinsi}</Text>
            </View>
            <View style={{ marginHorizontal: '10%', marginVertical: '5%' }}>
              <Text style={{ fontSize: 20, color: 'white' }}>Kota / Kabupaten : {this.state.kotakab}</Text>
            </View>
            <View style={{ marginHorizontal: '10%', marginVertical: '5%' }}>
              <Text style={{ fontSize: 20, color: 'white' }}>Kecamatan : {this.state.kecamatan}</Text>
            </View>
            <View style={{ marginHorizontal: '10%', marginVertical: '5%' }}>
              <Text style={{ fontSize: 20, color: 'white' }}>Kelurahan : {this.state.kelurahan}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;

