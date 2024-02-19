import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from './style';
import {fetchApi} from './api/ToDoListApi';

export default function App() {
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    fetchApi().then(res => setDataApi(res));
  });
  const renderItem = (item: any) => {
    return (
      <View style={style.itemContainer}>
        <Text numberOfLines={1}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Todo List</Text>
      <FlatList
        style={{marginTop: 16}}
        data={dataApi}
        renderItem={({item}) => renderItem(item)}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
      />
    </View>
  );
}
