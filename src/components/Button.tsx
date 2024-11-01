import { forwardRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = {
  title?: string;
  variant?: string;
} & TouchableOpacityProps;

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ title, variant, ...touchableProps }, ref) => {
    return (
      <TouchableOpacity
        ref={ref} {...touchableProps}
        style={[variant === 'outlined' ? styles.outlinedButton : styles.defaultButton, touchableProps.style]}
      >
        <Text style={variant === 'outlined' ? styles.outlinedButtonText : styles.defaultButtonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  defaultButton: {
    width: 180,
    alignItems: 'center',
    backgroundColor: '#99c4cb',
    borderRadius: 20,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  defaultButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
  outlinedButton: {
    width:180,
    alignItems: 'center',
    borderColor: '#99c4cb',
    borderWidth: 4,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  outlinedButtonText: {
    color: '#99c4cb',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
});
