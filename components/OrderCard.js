import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Card, Button, Divider } from 'react-native-paper'

const OrderCard = ({ children, image, btnFunction }) => {

    return (
        <Card elevation={5} style={styles.card}>
            <Card.Content style={styles.main}>
                <Image source={{ uri : image }} style={styles.cardImg} />
                <View style={styles.mainDetails}>
                    {children}
                </View>
            </Card.Content>
            <Divider style={{marginVertical : 10, marginHorizontal : 15}} />
            <Card.Actions style={{paddingTop : 0}}>
                <Button
                    mode='contained'
                    icon={'newspaper'} // put ion icon here
                    style={{ marginLeft : 'auto', borderRadius : 10, marginBottom : 5 }}
                    compact
                    labelStyle={{ fontSize: 12 }}
                    onPress={btnFunction}
                >View Details
                </Button>
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        marginBottom : 10,
        borderRadius : 10
    },
    cardImg: {
        width: 110,
        height: 110,
        borderRadius: 10
    },
    main: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // padding: 10,
    },
    mainDetails: {
        // flex: 1,
        marginLeft: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
})

export default OrderCard