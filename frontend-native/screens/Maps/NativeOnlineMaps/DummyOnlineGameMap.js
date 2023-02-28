import { Text } from 'react-native';

const OnlineGameMap = ({route}) => {

    const {eventId} = route.params;

    return (
        <Text>
            Event Id is: {eventId}
        </Text>
    )

}

export default OnlineGameMap;