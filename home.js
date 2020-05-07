import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Navigator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen({ route, navigation }){
    const [preflopAction, setPreflopAction] = useState(null);
    const [heroPos, setHeroPos] = useState(null);
    const [villainPos, setVillainPos] = useState(null);
    const [boardType, setBoardType] = useState(null);
    const [boardDetail, setBoardDetail] = useState(null);
    const [boardDetails, setBoardDetails] = useState([]);
    const preflopActions = ['SRP', '3BP', '4BP'];
    const heroPositions = ['UTG', 'MP', 'CO', 'BTN', 'SB', 'BB'];
    const villainPositions = ['UTG', 'MP', 'CO', 'BTN', 'SB', 'BB'];
    const boardTypes = ['Trips', 'Paired', 'Mono', 'AT+', 'A9-', '2BW', '1BW', 'Rags'];
  
    const handleNextScreen = () => {
        const choices = {
            preflopAction: preflopAction,
            heroPos: heroPos,
            villainPos: villainPos,
            boardType: boardType,
            boardDetail: boardDetail,
          };

        navigation.navigate('HandStrength', {choices: choices});
    };
  //receiving button input
  const handleButtonPress = (value, type) => {
    switch (type) {
      case 'preflopAction':
        setPreflopAction(value);
        break;

      case 'heroPos':
        setHeroPos(value);
        break;

      case 'villainPos':
        setVillainPos(value);
        break;

      case 'boardType':
        setBoardType(value);
        break;

      case 'boardDetail':
        setBoardDetail(value);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    //SRP_BTNvsBB
    if (
      preflopAction === preflopActions[0] &&
      heroPos === heroPositions[3] &&
      villainPos === villainPositions[5] &&
      boardType === boardTypes[0]
    )
      setBoardDetails(['Trips']);
    else 
    if (
      preflopAction === preflopActions[0] &&
      heroPos === heroPositions[3] &&
      villainPos === villainPositions[5] &&
      boardType === boardTypes[1]
    )
      setBoardDetails(['AAx','2BW (JJ+)','Paired AJJ+/TTx&99x','A88-','Rags+1BW(-BW99)']);
    else 
    if (
      preflopAction === preflopActions[0] &&
      heroPos === heroPositions[3] &&
      villainPos === villainPositions[5] &&
      boardType === boardTypes[2]
    )
      setBoardDetails(['Axx','Kxx','Mono Rest']);
    else 
    if (
      preflopAction === preflopActions[0] &&
      heroPos === heroPositions[3] &&
      villainPos === villainPositions[5] &&
      boardType === boardTypes[3]
    )
      setBoardDetails(['AHH','AT+(-AHH)']);
    else 
    if (
      preflopAction === preflopActions[0] &&
      heroPos === heroPositions[3] &&
      villainPos === villainPositions[5] &&
      boardType === boardTypes[4]
    )
      setBoardDetails(['A8-A9','A7-']);
    else 
    if (
      preflopAction === preflopActions[0] &&
      heroPos === heroPositions[3] &&
      villainPos === villainPositions[5] &&
      boardType === boardTypes[5]
    )
      setBoardDetails(['3BW','2BW FD','2BW R']);
    else 
    if (
      preflopAction === preflopActions[0] &&
      heroPos === heroPositions[3] &&
      villainPos === villainPositions[5] &&
      boardType === boardTypes[6]
    )
      setBoardDetails(['KLL','TLL-QLL','HMM Tx','HMM Jx','HML Tx','HML J+R','HML J7x FD','HML 1BW9-8x FD','HML 1BW7-6x FD']);
    else 
    if (
      preflopAction === preflopActions[0] &&
      heroPos === heroPositions[3] &&
      villainPos === villainPositions[5] &&
      boardType === boardTypes[7]
    )
      setBoardDetails(['5LL', '6LL','MMM','MXL wS','MXL noS']);
    else 

    setBoardDetails([]);
  }, [preflopAction, heroPos, villainPos, boardType]);

  //stuff starts here
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={styles.titleText}>Preflop Action:</Text>
      <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20, }}>
        {preflopActions.map(function (item, i) {

          let backgroundColor
          if (item === preflopAction)
          backgroundColor ='#0065b7',
          borderColor = 'white'
          else 
          backgroundColor = '#e0e0e0',
          borderColor = '#6d6d6d'
          ;

          return (
            <TouchableOpacity
              key={i}
              style={{
                borderRadius: 10,
                width: 60,
                height: 50,
                borderWidth: 1,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 2,
              }}
              onPress={() => handleButtonPress(item, 'preflopAction')}
            >
              <Text style={{fontWeight: 'bold', alignSelf:'center'}}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={styles.titleText}>Hero Pos:</Text>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 20,
          flexWrap: 'wrap',
        }}
      >
        {heroPositions.map(function (item, i) {

          let backgroundColor
          if (item === heroPos)
          backgroundColor ='#0065b7',
          borderColor = 'white'
          else 
          backgroundColor = '#e0e0e0',
          borderColor = '#6d6d6d'
          ;

          return (
            <TouchableOpacity
              key={i}
              style={{
                borderRadius: 10,
                width: 60,
                height: 50,
                borderWidth: 1,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 2,
              }}
              onPress={() => handleButtonPress(item, 'heroPos')}
            >
              <Text style={{fontWeight: 'bold', alignSelf:'center'}}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={styles.titleText}>Villain Pos:</Text>
      <View style={{width: '100%', justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20, flexWrap: 'wrap'}}>
        {villainPositions.map(function (item, i) {

          let backgroundColor
          if (item === villainPos)
          backgroundColor ='#0065b7',
          borderColor = 'white'
          else 
          backgroundColor = '#e0e0e0',
          borderColor = '#6d6d6d'
          ;

          return (
            <TouchableOpacity
              key={i}
              style={{
                borderRadius: 10,
                width: 60,
                height: 50,
                borderWidth: 1,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 2,
              }}
              onPress={() => handleButtonPress(item, 'villainPos')}
            >
              <Text style={{fontWeight: 'bold', alignSelf:'center'}}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={styles.titleText}>BoardType:</Text>
      <View style={{width: '100%', justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20, flexWrap: 'wrap'}}>
        {boardTypes.map(function (item, i) {

          let backgroundColor
          if (item === boardType)
          backgroundColor ='#0065b7',
          borderColor = 'white'
          else 
          backgroundColor = '#e0e0e0',
          borderColor = '#6d6d6d'
          ;

          return (
            <TouchableOpacity
              key={i}
              style={{
                borderRadius: 10,
                width: 60,
                height: 50,
                borderWidth: 1,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 2,
              }}
              onPress={() => handleButtonPress(item, 'boardType')}
            >
              <Text style={{fontWeight: 'bold', alignSelf:'center'}}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text
       style={{
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf:'center',
         }}>
      BoardDetail: {boardDetail}
      </Text>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 20,
          flexWrap: 'wrap',
        }}
      >
        {boardDetails.map(function (item, i ) {

          let backgroundColor
            if (item === boardDetail)
            backgroundColor ='#0065b7',
            borderColor = 'white'
            else 
            backgroundColor = '#e0e0e0',
            borderColor = '#6d6d6d'
            ;
          

          return (
            <TouchableOpacity
              key={i}
              style={{
                borderRadius: 10,
                width: 60,
                height: 50,
                borderWidth: 1,
                backgroundColor : backgroundColor,
                borderColor: borderColor,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 2,
              }}
              onPress={() => handleButtonPress(item, 'boardDetail')}
            >
              <Text style={{fontWeight: 'bold', alignSelf:'center'}}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Button
              onPress={(handleNextScreen)}
              title='Pick Handstrength'
              style={{
                fontSize: 20,
              }}
            />
    </View>
  );
}

const styles = StyleSheet.create({
    titleText: {
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf:'center'
    },
    button: {
      borderRadius: 10,
      width: 60,
      height: 50,
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 2,
    },
    buttonSelected: {
      borderRadius: 10,
      width: 60,
      height: 50,
      borderWidth: 2,
      borderColor: 'yellow',
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 2,
    }

});