import { useEffect,useState } from 'react';
import { FlatList, View, Text, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, loadEvents } from '../../store/events';
import EventIndexItem from './EventIndexItem';
// import Footer from '../NavBar/Footer';
import NativeEventIndexMap from './NativeEventIndexMap';
function EventIndex() {
  const dispatch = useDispatch();
  const events = useSelector(loadEvents);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);
  // console.log(state);
  if (!events.length) return null;
  console.log(events);
  return (
    <View className='events_page'>
      <View className='event_index_wrapper flex-col align-center'>
        <Text>All Events</Text>
        <View className='event_index flex-row justify-between'>
          <View className='event_list_wrapper'>
            <ScrollView className='event_list'>
              {events.map(event => (
                <EventIndexItem key={event._id} event={event} />
              ))}
              {}
            </ScrollView>
          </View>
          <View id='event_map'>
            <NativeEventIndexMap/>
          </View>
        </View>
      </View>
      {/* <Footer /> */}
    </View>
  )
}

export default EventIndex;