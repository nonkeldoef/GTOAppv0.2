import React, { useState, useEffect } from 'react';
import { Text, View, Button, Navigator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HandStrengthScreen({ route, navigation }){
    const [handGroup, sethandGroup] = useState(null);
    const [straightFlush, setStraightFlush] = useState(null);
    const [quads, setQuads] = useState(null);
    const [fullHouse, setFullHouse] = useState(null);
    const [flush, setFlush] = useState(null);
    const [straight, setStraight] = useState(null);
    const [threeOfaKind, setThreeOfaKind] = useState(null);
    const [twoPair, setTwoPair] = useState(null);
    const [overPair, setOverPair] = useState(null);
    const [topPair, setTopPair] = useState(null);
    const [underPair, setUnderPair] = useState(null);
    const [secondPair, setSecondPair] = useState(null);
    const [noGroupPair, setNoGroupPair] = useState(null);
    const [thirdPair, setThirdPair] = useState(null);
    const [lowPair, setLowPair] = useState(null);
    const [nutAir, setNutAir] = useState(null);
    const [secondNutAir, setSecondNutAir] = useState(null);
    const [restAir, setRestAir] = useState(null);
    
    const [handStrengthDetails, setHandStrengthDetails] = useState([]);

    const allHandStrengths = ['Straigth Flush','Quads','Full House','Flush','Straight','3ofaKind','2 Pair','OverPair','Top Pair','UnderPair','2nd Pair','NoGroupPP','3rd Pair','Low Pair','Nut Air','2nd Nut Air','Rest air'];
    const fullhouseDetails = ['FH eff Nuts','FH non-eff Nuts'];
    const flushDetails = ['NutFlush','2nd NutFlush','Rest Flush'];
    const overpairDetails = ['OP +BDFD','OP noFD','OP +FD'];
    const toppairDetails = ['TPs +FD','TPs +BDFD','TPo + nutBDFD','TP noFD'];
    const underpairDetails = ['UP + BDFD','UP noFD', 'UP +FD'];
    const secondpairDetails = ['2ndPs +FD','2ndPs +BDFD','2ndPo NutBDFD','2ndPs noFD'];
    const nogroupppDetails = ['NGPP + BDFD','NGPP noFD', 'NGPP +FD'];
    const thirdpairDetails = ['3rdPs +FD','3rdPs +BDFD','3rdPo NutBDFD','3rdPs noFD'];
    const lowpairDetails = ['LP + BDFD','LP noFD', 'LP +FD'];
    const nutairDetails = ['NAs +FD','NAs +BDFD','NAo +NutBDFD','NA Rest','NA +OESD'];
    const secondnutairDetails = ['2ndNAs +FD','2ndNAs +BDFD','2ndNAo +NutBDFD','2ndNA Rest','2ndNA +OESD'];
    const restairDetails = ['RAs +FD','RAs +BDFD','RAo +NutBDFD','RA Rest','RA +OESD'];

    //receiving button input, not sure how/what/where ^_^
  const handleButtonPress = (value, type) => {
    switch (type) {
      case 'handGroup':
        setHandGroup(value);
        break;
    }
  };

  useEffect(() => {
    //if details exist, they should appear when overall handstrength is chosen
    if (allHandStrengths === allHandStrengths[0]) setHandStrengthDetails(['Straigth Flush']);
    else 
    if (allHandStrengths === allHandStrengths[1]) setHandStrengthDetails(['Quads']);
    else 
    if (allHandStrengths === allHandStrengths[2]) setHandStrengthDetails([{fullhouseDetails}]);
    else 
    if (allHandStrengths === allHandStrengths[3]) setHandStrengthDetails([{flushDetails}]);
    else 
    if (allHandStrengths === allHandStrengths[4]) setHandStrengthDetails(['Straight']);
    else 
    if (allHandStrengths === allHandStrengths[5]) setHandStrengthDetails(['3ofaKind']);
    else 
    if (allHandStrengths === allHandStrengths[6]) setHandStrengthDetails(['2 Pair']);
    else 
    if (allHandStrengths === allHandStrengths[7]) setHandStrengthDetails([{overpairDetails}]);
    else 
    if (allHandStrengths === allHandStrengths[8]) setHandStrengthDetails([{toppairDetails}]);
    else 
    if (allHandStrengths === allHandStrengths[9]) setHandStrengthDetails([{underpairDetails}]);
    else 
    if (allHandStrengths === allHandStrengths[11]) setHandStrengthDetails([{secondpairDetails}]);
    else 
    if (allHandStrengths === allHandStrengths[12]) setHandStrengthDetails([{nogroupppDetails}]);
    else 
    if (allHandStrengths === allHandStrengths[13]) setHandStrengthDetails([{thirdpairDetails}]);
    else 
    if (allHandStrengths === allHandStrengths[14]) setHandStrengthDetails([{lowpairDetails}]);
    else 
    if (allHandStrengths === allHandStrengths[15]) setHandStrengthDetails([{nutairDetails}]);
    else 
    if (allHandStrengths === allHandStrengths[16]) setHandStrengthDetails([{secondnutairDetails}]);
    else 
    if (allHandStrengths === allHandStrengths[17]) setHandStrengthDetails([{restairDetails}]);
    else 
    
    setHandStrengthDetails([]);
  }, [handGroup]);

    return (
        // First series of buttons for initial handstrength. Preferably choices from home would filter out impossible strengths automatically. (fe. Straight Flush&Flush can only exist on Mono Boards, Quads & Full house only on paired boards)
        <View style={{ flex: 1, padding: 20 }}>
            <Text>get parameters from previous page</Text>
            <Text>Pick HandStrength</Text>
            <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap',marginBottom: 20 }}>
                {allHandStrengths.map(function (item, i) {
                    return (
                        <TouchableOpacity
                            key={i}
                            style={{
                                width: 50,
                                height: 40,
                                backgroundColor: 'gray',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 2,
                                marginHorizontal: 1,
                                marginVertical: 1,
                                
                            }}
                            onPress={() => handleButtonPress(item, 'allHandStrengths')}
                        >
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
            <View
                style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginBottom: 20,
                flexWrap: 'wrap',
                }}
            >
                {handStrengthDetails.map(function (item, i) {
                    return (
                        <TouchableOpacity
                            key={i}
                            style={{
                            width: 60,
                            height: 50,
                            backgroundColor: 'gray',
                            alignItems: 'center',
                            justifyContent: 'center',
                            }}
                            onPress={() => handleButtonPress(item, 'boardDetail')}
                        >
                            <Text>{item}</Text>
                        </TouchableOpacity>
                );
            })}
      </View>
    </View>
  );
}