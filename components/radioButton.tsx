import { TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomRadioButton = ({ selected, onPress, size = 24, color = 'black' }) => {
    return (
      <TouchableOpacity onPress={onPress} style={{ paddingLeft: 10, paddingRight: 5, paddingVertical: 5}}>
        <Icon
          name={selected === 'unchecked' ? 'radiobox-blank' : 'radiobox-marked'}
          size={size}
          color={color}
        />
      </TouchableOpacity>
    );
  };

export default CustomRadioButton;