import { Text, TextProps } from "react-native";
import { Colors } from "../constants/Color";
import { ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";

interface ThemedTextProps extends Omit<TextProps, "key"> {
  title?: boolean;
  children?: ReactNode;
}

const ThemedText = ({ style, title = false, children, ...props }: ThemedTextProps) => {
  const { theme } = useTheme(); 
  const colorScheme = Colors[theme];

  const textColor = title ? colorScheme.title : colorScheme.text;

  return (
    <Text style={[{ color: textColor }, style]} {...props}>
      {children}
    </Text>
  );
};

export default ThemedText;
