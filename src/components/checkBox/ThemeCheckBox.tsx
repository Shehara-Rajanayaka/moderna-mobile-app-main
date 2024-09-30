import {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import {Fonts} from '../../styles/fonts';
import {Colors} from '../../styles/Colors';
import {View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
interface checkBoxProps {
  title: string;
}
export const ThemeCheckBox: React.FC<checkBoxProps> = ({title}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BouncyCheckbox
      size={25}
      disableText={false}
      isChecked={isChecked}
      fillColor={Colors.PRIMARY_BLACK}
      iconStyle={{
        borderColor: Colors.GRAY_500,
        borderRadius: 5,
      }}
      style={{
        borderColor: Colors.GRAY_500,
        borderRadius: 5,
      }}
      innerIconStyle={{
        borderColor: Colors.GRAY_300,
        borderRadius: 5,
      }}
      textStyle={{
        fontFamily: Fonts.HelveticaNowTextRegular,
        color: Colors.PRIMARY_BLACK,
        fontSize: 14,
        fontWeight: '400',
        textDecorationLine: 'none',
      }}
      unFillColor={Colors.PRIMARY_WHITE}
      text={title}
      onPress={handleCheckboxChange}
    />
  );
};
