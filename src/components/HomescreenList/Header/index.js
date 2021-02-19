import React from "react";
import { View, Image, Pressable, onPress } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import styles from "./styles";

export default function Header(props) {
  const menuImage = require("../../../assets/images/menu.png");
  const closeImage = require("../../../assets/images/close_icon.png");
  // TODO, find a way to change menuImage to closeImage when pressed
  // const [status, setStatus] = useState(false);

  return (
    <Pressable style={styles.container}>
      <Image
        style={styles.menu}
        source={menuImage}
        onPress={() => props.navigation.toggleDrawer()}
      />
    </Pressable>
  );
}

///original
// export default function Header(props) {
//   const menuImage = require("../../../assets/images/menu.png");
//   const closeImage = require("../../../assets/images/close_icon.png");
//   // TODO, find a way to change menuImage to closeImage when pressed
//   const [status, setStatus] = useState(false);

//   return (
//     <Pressable onPress={() => props.navigation.toggleDrawer()}>
//       {({ pressed }) => (
//         <View style={styles.container}>
//           {pressed ? (
//             <Image style={styles.menu} source={closeImage} />
//           ) : (
//             <Image style={styles.closeIcon} source={menuImage} />
//           )}
//         </View>
//       )}
//     </Pressable>
//   );
// }
