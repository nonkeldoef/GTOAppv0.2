import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Navigator, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HandStrengthScreen({ route, navigation }){
    const [allHandStrength, setAllHandStrength] = useState(null);
    const [handStrengthDetail, setHandStrengthDetail] = useState(null);
    const [handStrengthDetails, setHandStrengthDetails] = useState([]);
    const [graphPath, setGraphPath] = useState('');

    const allHandStrengths = ['Straigth Flush','Quads','Full House','Flush','Straight','3ofaKind','2 Pair','OverPair','Top Pair','UnderPair','2nd Pair','NoGroupPP','3rd Pair','Low Pair','Nut Air','2nd Nut Air','Rest Air'];

    const { choices } = route.params;

    useEffect(() => {
        if (
            choices.preflopAction === 'SRP'&&
            choices.heroPos === 'BTN'&&
            choices.villainPos === 'BB'&&
            choices.boardType === 'Mono'&&
            choices.boardDetail === 'Axx'&&
            allHandStrength === 'Rest Air'&&
            handStrengthDetail === 'RA Rest'
        )
        setGraphPath(require('../graphs/test2.png'));
        else
        if (
            choices.preflopAction === 'SRP'&&
            choices.heroPos === 'BTN'&&
            choices.villainPos === 'BB'&&
            choices.boardType === 'Mono'&&
            choices.boardDetail === 'Axx'&&
            allHandStrength === 'Rest Air'&&
            handStrengthDetail === 'RA +OESD'
        )
        setGraphPath(require('../graphs/test3.png'));
        else setGraphPath(require('../graphs/test.png'));
    })

    const handleButtonPress = (value, type) => {
        switch (type) {
          case 'allHandStrength':
            setAllHandStrength(value);
            break;

          case 'handStrengthDetail':
            setHandStrengthDetail(value);
            break;
        }
      };  

    useEffect(() => {
        //if details exist, they should appear when overall handstrength is chosen. Only show straight Flush & Flush with Mono boardType choice, only show Quads & Full house with Paired boardType choice => results in max 15 choices at any time
        if (allHandStrength === allHandStrengths[2]) setHandStrengthDetails(['FH eff Nuts','FH non-eff Nuts']);
        else 
        if (allHandStrength === allHandStrengths[3]) setHandStrengthDetails(['NutFlush','2nd NutFlush','Rest Flush']);
        else
        if (allHandStrength === allHandStrengths[7]) setHandStrengthDetails(['OP +BDFD','OP noFD','OP +FD']);
        else 
        if (allHandStrength === allHandStrengths[8]) setHandStrengthDetails(['TPs +FD','TPs +BDFD','TPo + nutBDFD','TP noFD']);
        else 
        if (allHandStrength === allHandStrengths[9]) setHandStrengthDetails(['UP + BDFD','UP noFD', 'UP +FD']);
        else 
        if (allHandStrength === allHandStrengths[10]) setHandStrengthDetails(['2ndPs +FD','2ndPs +BDFD','2ndPo NutBDFD','2ndPs noFD']);
        else 
        if (allHandStrength === allHandStrengths[11]) setHandStrengthDetails(['NGPP + BDFD','NGPP noFD', 'NGPP +FD']);
        else 
        if (allHandStrength === allHandStrengths[12]) setHandStrengthDetails(['3rdPs +FD','3rdPs +BDFD','3rdPo NutBDFD','3rdPs noFD']);
        else 
        if (allHandStrength === allHandStrengths[13]) setHandStrengthDetails(['LP + BDFD','LP noFD', 'LP +FD']);
        else 
        if (allHandStrength === allHandStrengths[14]) setHandStrengthDetails(['NAs +FD','NAs +BDFD','NAo +NutBDFD','NA Rest','NA +OESD']);
        else 
        if (allHandStrength === allHandStrengths[15]) setHandStrengthDetails(['2ndNAs +FD','2ndNAs +BDFD','2ndNAo +NutBDFD','2ndNA Rest','2ndNA +OESD']);
        else 
        if (allHandStrength === allHandStrengths[16]) setHandStrengthDetails(['RAs +FD','RAs +BDFD','RAo +NutBDFD','RA Rest','RA +OESD']);
        else 
            setHandStrengthDetails([]);
        }, [allHandStrength]);


    return (
        // First series of buttons for initial handstrength. Preferably choices from home would filter out impossible strengths automatically. (fe. Straight Flush&Flush can only exist on Mono Boards, Quads & Full house only on paired boards).
        //Test Img with choices being SRP_BTNvsBB_Mono_Axx_Rest Air_RA Rest
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf:'center' }}>{choices.preflopAction}, {choices.heroPos} vs {choices.villainPos}, {choices.boardType} ({choices.boardDetail})</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf:'center' }}>Pick Strength:</Text>
            <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap',marginBottom: 20 }}>
                {allHandStrengths.map(function (item, i) {

                    let backgroundColor
                    if (item === allHandStrength)
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
                                borderWidth: 1,
                                backgroundColor: backgroundColor,
                                borderColor: borderColor,
                                width: 75,
                                height: 40,
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 2,
                                marginHorizontal: 1,
                                marginVertical: 1,
                                
                            }}
                            onPress={() => handleButtonPress(item, 'allHandStrength')}
                        >
                            <Text style={{fontWeight: 'bold', alignSelf:'center', color: textColor}}>{item}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
            <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf:'center' }}>Pick Strength Detail:</Text>
            <View
                style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                flexWrap: 'wrap',
                }}
            >
                {handStrengthDetails.map(function (item, i) {

                    let backgroundColor
                    if (item === handStrengthDetail)
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
                            backgroundColor: backgroundColor,
                            borderColor: borderColor,
                            borderWidth: 1,
                            width: 75,
                            height: 50,
                            justifyContent: 'center',
                            padding: 4,
                            marginHorizontal: 1,
                            marginVertical: 1,
                            }}
                            onPress={() => handleButtonPress(item, 'handStrengthDetail')}
                        >
                            <Text style={{fontWeight: 'bold', alignSelf:'center', color: textColor}}>{item}</Text>
                        </TouchableOpacity>
                    );
                 })}
            </View>
        <View>
             <Image
             style={{
                resizeMode: "contain",
                width: 400,
                alignSelf: 'center'
                }}
             
             source={graphPath} />
        </View>
        
    </View>
  );
}