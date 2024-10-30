import { forwardRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = {
  title?: string;
} & TouchableOpacityProps;

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ title, ...touchableProps }, ref) => {
    return (
      <TouchableOpacity ref={ref} {...touchableProps} style={[styles.button, touchableProps.style]}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  button: {
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
  buttonText: {
    color: "#1e3a45",
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
});
