import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Icon } from "react-native-paper"

interface RecentLocationProps {
    street: string
    type: string
    city: string
}

export const RecentLocation: React.FC<RecentLocationProps> = ({street, type, city}) => {
    return(
        <TouchableOpacity style={styles.locationWrapper}>
            <View style={styles.address}>
                {type === "home" ? (
                    <Icon
                        source={'home-city'}
                        size={30}
                        color={'#98c3ca'}
                    />
                ):(
                    <Icon
                        source={'office-building-marker'}
                        size={30}
                        color={'#98c3ca'}
                    />
                )}
                <View>
                    <Text>
                        {`${street}`}
                    </Text>
                    <Text>
                        {`${city}`}
                    </Text>
                </View>
            </View>
            <Icon
            source={'clock'}
            size={20}
            color={'#98c3ca'}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    locationWrapper:{
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        backgroundColor: 'white',
        padding: 10,
        borderTopEndRadius: 30,
        borderBottomEndRadius: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          height: 2,
          width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderColor: '#edebeb',
        borderWidth: 2
    },
    address: {
        flexDirection: 'row',
        gap: 8,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    city: {
        fontSize: 10
    }

})