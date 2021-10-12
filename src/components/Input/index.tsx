import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

type InputHandle = {
  focus: () => void;
};

const Input = forwardRef<InputHandle, TextInputProps>(({ ...rest }, ref) => {
  const inputRef = useRef<TextInput>();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
  }));

  return <TextInput ref={inputRef as any} style={styles.input} {...rest} />;
});

export default Input;
