import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Navigator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

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
    const boardTypes = ['Trips', 'Paired', 'Mono', 'ATp', 'A9m', '2BW', '1BW', 'Rags'];
  
    const handleNextScreen = () => {
        const choices = {
            preflopAction: preflopAction,
            heroPos: heroPos,
            villainPos: villainPos,
            boardType: boardType,
            boardDetail: boardDetail,
          };

        navigation.navigate('HandStrength', {choices: choices, name: preflopAction+' '+heroPos+'vs'+villainPos+' '+boardType+' ('+boardDetail+')'});
    };
  //receiving button input
  const handleButtonPress = (value, type, name) => {
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
    //SRP_MPvsBTN
    //SRP_MPvsBB
    //SRP_COvsBTN
    //SRP_COvsBB
    //SRP_BTNvsBB
    //SRP_SBvsBB
    //3BP_COvsMP
    //3BP_BTNvsMP
    //3BP_SBvsMP
    //3BP_BBvsMP
    //3BP_BTNvsCO
    //3BP_SBvsCO
    if (
      preflopAction === preflopActions[1] &&
      heroPos === heroPositions[4] &&
      villainPos === villainPositions[2] &&
      boardType === boardTypes[0]
    )
      setBoardDetails(['222-KKK','AAA']);
    else 
    if (
      preflopAction === preflopActions[1] &&
      heroPos === heroPositions[4] &&
      villainPos === villainPositions[2] &&
      boardType === boardTypes[1]
    )
      setBoardDetails(['22A-TTA','22x-TTx-NoJ-FD','Paired-Rest']);
    else 
    if (
      preflopAction === preflopActions[1] &&
      heroPos === heroPositions[4] &&
      villainPos === villainPositions[2] &&
      boardType === boardTypes[2]
    )
      setBoardDetails(['ATp','A9m','Mono-Rest']);
    else 
    if (
      preflopAction === preflopActions[1] &&
      heroPos === heroPositions[4] &&
      villainPos === villainPositions[2] &&
      boardType === boardTypes[3]
    )
      setBoardDetails(['ATp-FD','ATp-R']);
    else 
    if (
      preflopAction === preflopActions[1] &&
      heroPos === heroPositions[4] &&
      villainPos === villainPositions[2] &&
      boardType === boardTypes[4]
    )
      setBoardDetails(['A9m-FD','A9m-R']);
    else 
    if (
      preflopAction === preflopActions[1] &&
      heroPos === heroPositions[4] &&
      villainPos === villainPositions[2] &&
      boardType === boardTypes[5]
    )
      setBoardDetails(['2BW-FD','2BW-R']);
    else 
    if (
      preflopAction === preflopActions[1] &&
      heroPos === heroPositions[4] &&
      villainPos === villainPositions[2] &&
      boardType === boardTypes[6]
    )
      setBoardDetails(['Kxx-FD','Kxx-R','Qxx-Jxx-FD','Qxx-Jxx-R','Txx-FD','Txx-R']);
    else 
    if (
      preflopAction === preflopActions[1] &&
      heroPos === heroPositions[4] &&
      villainPos === villainPositions[2] &&
      boardType === boardTypes[7]
    )
      setBoardDetails(['987-543','Rags-Rest']);
    else 
    //3BP_BBvsCO
    //3BP_SBvsBTN
    if (
      preflopAction === preflopActions[1] &&
      heroPos === heroPositions[4] &&
      villainPos === villainPositions[3] &&
      boardType === boardTypes[0]
    )
      setBoardDetails(['222-TTT','JJJ-QQQ','KKK-AAA']);
    else 
    if (
      preflopAction === preflopActions[1] &&
      heroPos === heroPositions[4] &&
      villainPos === villainPositions[3] &&
      boardType === boardTypes[1]
    )
      setBoardDetails(['AA2-AAQ','AAK-AKK','A22-A88-FD','A99-AQQ-FD','22x-88x-FD-NoA','99x-FD-NoA', 'Any-9xp-R','Any-8xm-R']);
    else 
    if (
      preflopAction === preflopActions[1] &&
      heroPos === heroPositions[4] &&
      villainPos === villainPositions[3] &&
      boardType === boardTypes[2]
    )
      setBoardDetails(['AHM-AMM','Ax-Rest','nonAx-Rest']);
    else 
    if (
      preflopAction === preflopActions[1] &&
      heroPos === heroPositions[4] &&
      villainPos === villainPositions[3] &&
      boardType === boardTypes[3]
    )
      setBoardDetails(['AHH','AHM FD','AHL-FD', 'AHM-AHL-R']);
    else 
    if (
      preflopAction === preflopActions[1] &&
      heroPos === heroPositions[4] &&
      villainPos === villainPositions[3] &&
      boardType === boardTypes[4]
    )
      setBoardDetails(['AMM-AML-FD','ALL-FD','AMM-AML-R','ALL-R']);
    else 
    if (
      preflopAction === preflopActions[1] &&
      heroPos === heroPositions[4] &&
      villainPos === villainPositions[3] &&
      boardType === boardTypes[5]
    )
      setBoardDetails(['2BW-FD','2BW-R','3BW-FD']);
    else 
    if (
      preflopAction === preflopActions[1] &&
      heroPos === heroPositions[4] &&
      villainPos === villainPositions[3] &&
      boardType === boardTypes[6]
    )
      setBoardDetails(['1BW-FD','1BW-R']);
    else 
    if (
      preflopAction === preflopActions[1] &&
      heroPos === heroPositions[4] &&
      villainPos === villainPositions[3] &&
      boardType === boardTypes[7]
    )
      setBoardDetails(['Rags-noS-FD','Rags-noS-R','Rags-wS']);
    else 

    setBoardDetails([]);
  }, [preflopAction, heroPos, villainPos, boardType]);
  //3BP_BBvsBTN
  if (
    preflopAction === preflopActions[1] &&
    heroPos === heroPositions[5] &&
    villainPos === villainPositions[3] &&
    boardType === boardTypes[0]
  )
    setBoardDetails(['222-TTT','JJJ-QQQ','KKK','AAA']);
  else 
  if (
    preflopAction === preflopActions[1] &&
    heroPos === heroPositions[5] &&
    villainPos === villainPositions[3] &&
    boardType === boardTypes[1]
  )
    setBoardDetails(['AAx','Axx','KKx','Kxx','JJx-QQx-FD','JJx-QXx-R','Jxx-Qxx-FD','Jxx-Qxx-R','22T-TT9','22x-99x-FD','22x-99x-R']);
  else 
  if (
    preflopAction === preflopActions[1] &&
    heroPos === heroPositions[5] &&
    villainPos === villainPositions[3] &&
    boardType === boardTypes[2]
  )
    setBoardDetails(['AKx','ATp-noAKx','A9m','2BW','1BW','Rags']);
  else 
  if (
    preflopAction === preflopActions[1] &&
    heroPos === heroPositions[5] &&
    villainPos === villainPositions[3] &&
    boardType === boardTypes[3]
  )
    setBoardDetails(['AKx-R','AHH','ATp-FD','ATp-R']);
  else 
  if (
    preflopAction === preflopActions[1] &&
    heroPos === heroPositions[5] &&
    villainPos === villainPositions[3] &&
    boardType === boardTypes[4]
  )
    setBoardDetails(['A9m-FD','A9m-R']);
  else 
  if (
    preflopAction === preflopActions[1] &&
    heroPos === heroPositions[5] &&
    villainPos === villainPositions[3] &&
    boardType === boardTypes[5]
  )
    setBoardDetails(['KHH-Q9x-wS','Kxx-FD','Kxx-R','Qxx-FD','Qxx-R','JTx-FD','JTx-R']);
  else 
  if (
    preflopAction === preflopActions[1] &&
    heroPos === heroPositions[5] &&
    villainPos === villainPositions[3] &&
    boardType === boardTypes[6]
  )
    setBoardDetails(['Kxx-FD','Kxx-R','Qxx-FD','Qxx-R','Jxx-FD','Jxx-R']);
  else 
  if (
    preflopAction === preflopActions[1] &&
    heroPos === heroPositions[5] &&
    villainPos === villainPositions[3] &&
    boardType === boardTypes[7]
  )
    setBoardDetails(['Rags-FD','Rags-R']);
  else 
  //3BP_BBvsSB
  //4BP_MPvsCO
  //4BP_MPvsBTN
  //4BP_MPvsSB
  //4BP_MPvsBB
  //4BP_COvsBTN
  //4BP_COvsSB
  //4BP_COvsBB
  //4BP_BTNvsSB
  //4BP_BTNvsBB
  //4BP_SBvsBB

  //stuff starts here
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{fontSize: 16, fontWeight: 'bold', alignSelf:'center'}}>Preflop Action:</Text>
      <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20, }}>
        {preflopActions.map(function (item, i) {

          let backgroundColor
          if (item === preflopAction)
          backgroundColor ='#0065b7',
          borderColor = 'white',
          textColor = 'white'
          else 
          backgroundColor = '#e0e0e0',
          borderColor = '#6d6d6d',
          textColor = 'black'
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
              <Text style={{fontWeight: 'bold', alignSelf:'center', color: textColor}}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={{fontSize: 16, fontWeight: 'bold', alignSelf:'center'}}>Hero Pos:</Text>
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
          borderColor = 'white',
          textColor = 'white'
          else 
          backgroundColor = '#e0e0e0',
          borderColor = '#6d6d6d',
          textColor = 'black'
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
              <Text style={{fontWeight: 'bold', alignSelf:'center', color: textColor}}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={{fontSize: 16, fontWeight: 'bold', alignSelf:'center'}}>Villain Pos:</Text>
      <View style={{width: '100%', justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20, flexWrap: 'wrap'}}>
        {villainPositions.map(function (item, i) {

          let backgroundColor
          if (item === villainPos)
          backgroundColor ='#0065b7',
          borderColor = 'white',
          textColor = 'white'
          else 
          backgroundColor = '#e0e0e0',
          borderColor = '#6d6d6d',
          textColor = 'black'
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
              <Text style={{fontWeight: 'bold', alignSelf:'center', color: textColor}}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={{fontSize: 16, fontWeight: 'bold', alignSelf:'center'}}>BoardType:</Text>
      <View style={{width: '100%', justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20, flexWrap: 'wrap'}}>
        {boardTypes.map(function (item, i) {

          let backgroundColor
          if (item === boardType)
          backgroundColor ='#0065b7',
          borderColor = 'white',
          textColor = 'white'
          else 
          backgroundColor = '#e0e0e0',
          borderColor = '#6d6d6d',
          textColor = 'black'
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
              <Text style={{fontWeight: 'bold', alignSelf:'center', color: textColor}}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={{fontSize: 16, fontWeight: 'bold', alignSelf:'center'}}>BoardDetail: {boardDetail}</Text>
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
          borderColor = 'white',
          textColor = 'white'
          else 
          backgroundColor = '#e0e0e0',
          borderColor = '#6d6d6d',
          textColor = 'black'
          ;
          

          return (
            <TouchableOpacity
              key={i}
              style={{
                borderRadius: 10,
                width: 90,
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
              <Text style={{fontWeight: 'bold', alignSelf:'center', color: textColor, fontSize: 12}}>{item}</Text>
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