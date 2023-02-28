import defaultImage from '../../assets/images/defaultImage.svg';

function EventIndexItem({event, navigation}) {
  const dateObj = new Date(event.date);
  const dateStrg = String(dateObj)
  const localTime = dateObj.toLocaleString('en-eg', {timeZone:"America/Los_Angeles"});
  const comaIdx = localTime.indexOf(',');
  const colonIdx = localTime.indexOf(':');
  const date = localTime.slice(0, comaIdx);
  const day = dateStrg.slice(0, 3);
  const hourLen = colonIdx - comaIdx;
  const hour = hourLen === 3 ? localTime.slice(comaIdx + 2, comaIdx + 6) : localTime.slice(comaIdx + 2, comaIdx + 7);
  const ampm = localTime.slice(-2);
  const duration = Math.ceil(event.duration / 60);
  
  const eventImg = () => {
    if (!event.image) {
      return <img src={defaultImage} alt={`event_${event.name}`} className="default_img" />
    }

    return <img src={event.image} alt={`event_${event.name}`} className='event-image' />
  };

  return (
    <View className="event_index_list">
      <View className="flex-row">
        <View className="event_list_details">
          <h2>{event.name}</h2>
          <Text className="location">{event.location}</Text>
          <Text>{day}, {date}</Text>
          <Text>{hour} {ampm}</Text>
          <Text>{duration} {duration === 1 ? 'hour' : 'hours'}</Text>
          <Text>${event.price}</Text>
        </View>
        <View className="event_list_img flex-row justify-end">
          <picture>
            {eventImg()}
          </picture>
        </View>
      </View>
      <Pressable onPress={navigation.push('EventLobby', {eventId: event._id})}>
        <Text>Check event</Text>
      </Pressable>
    </View>
  );
}

export default EventIndexItem;