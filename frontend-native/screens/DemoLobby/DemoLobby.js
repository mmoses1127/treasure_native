// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import {View, Pressable, Image, Text} from 'react-native';
// import Footer from '../NavBar/Footer';
// import './DemoLobby.scss';
// import Calendar from '../../assets/images/Calendar.svg';
// import Treasure from '../../assets/images/Treasure.svg';

const DemoLobby = () => {
    return (
      <View className='demo_page'>
        <View className='flex-row justify-center'>
          <View className='left_demo flex-col align-center'>
            {/* <Image src={Treasure} alt="demo_hunt" /> */}
            {/* <Link className="lobby-link" to={'/events/638a9e6fcbf4f1662f53440a/online-game'}> */}
              <Pressable className="lobby-button" >
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