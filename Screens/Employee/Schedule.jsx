import { Alert, FlatList, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
// import { getSchedule } from '../../Apis/employeeApis'
import OrderCard from '../../components/OrderCard'
// import { formatDate, formatTime } from '../../utils/dateTimeUtils'
import { useNavigation } from '@react-navigation/native'
import Loader from '../../components/Loader'

const Schedule = () => {
    const [schedule, setSchedule] = useState([])
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false)
    // const [loading, setLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false)

    // useEffect(() => {
    //     // function to fetch employee schedule
    //     const fetchEmployeeSchedule = async () => {
    //         try {
    //             const res = await getSchedule()
    //             console.log({ res: res.response });
    //             setSchedule(res.response)
    //             setLoading(false)
    //             setRefreshing(false)
    //         } catch (error) {
    //             setLoading(false)
    //             console.log(error)
    //             Alert.alert('Error', error.message || 'something went wrong');
    //         }
    //     }
    //     fetchEmployeeSchedule();
    // }, [loading])

    const onRefresh = () => {
        setLoading(true)
        setRefreshing(true)
    }
    return (
        <>
         {loading && <Loader size='large' backdrop />}
        <View style={styles.container}>
            <Text style={{textAlign : 'center', fontSize : 20, marginVertical : 10}}>Today's Schedule</Text>
            <FlatList
                data={schedule}
                refreshing={refreshing}
                onRefresh={onRefresh}
                keyExtractor={(_, i) => i}
                renderItem={({ item }) => (
                    <OrderCard 
                        image={item?.customer?.profilePic}
                        btnFunction={() => navigation.navigate('Maps', {scheduleDetails : item})}
                    >
                        <Text variant="displayLarge" style={styles.title} >{item?.customer?.name}</Text>
                        <Text variant="headlineSmall" >Phone No : {item?.customer?.phoneNo}</Text>
                        <Text variant="headlineSmall" >Date : {formatDate(item?.startsAt)}</Text>
                        <Text variant="headlineSmall" >Time Slot : {formatTime(item?.startsAt)} - {formatTime(item?.endsAt)}</Text>
                    </OrderCard>
                )}
            />
        </View>
        </>
    )
}

export default Schedule

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 10
    },
    title: {
        fontSize: 15,
        color: '#f44336',
        marginBottom: 15
    }
})