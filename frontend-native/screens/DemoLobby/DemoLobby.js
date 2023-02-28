// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import {View, Pressable, Image, Text} from 'react-native';
// import Footer from '../NavBar/Footer';
// import './DemoLobby.scss';
// import Calendar from '../../assets/images/Calendar.svg';
// import Treasure from '../../assets/images/Treasure.svg';



const DemoLobby = ({navigation}) => {

    return (
      <View className='demo_page'>
        <View className='flex-row justify-center'>
          <View className='left_demo flex-col align-center'>
            <Image 
            style={{width:'50%', height:'50%'}}
            source={{uri: 'https://t3.ftcdn.net/jpg/04/68/41/04/360_F_468410468_xADVq1CkpsbqlGXK6vREYqsJjHEgCkRr.jpg'}} />
            {/* <Link className="lobby-link" to={'/events/638a9e6fcbf4f1662f53440a/online-game'}> */}
              <Pressable className="lobby-button" onPress={()=> navigation.push('OnlineGame', {
                eventId: '638a9e6fcbf4f1662f53440a'
              })}>
                  <Text>Try Our Demo Hunt!</Text>
              </Pressable>
            {/* </Link> */}
          </View>

          <View className='rigth_demo flex-col align-center'>
            {/* <Image src={Calendar} alt="demo_book" /> */}
            {/* <Link className="lobby-link" to={'/events/new'}> */}
              <Pressable className="lobby-button"> 
                <Text>Create Your Own!</Text>
              </Pressable>  
            {/* </Link> */}
          </View>
        </View>
      </View>
    )
}

export default DemoLobby;