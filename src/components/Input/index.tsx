import { Container } from "./styles";

import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps) {

  return (
    <Container isFilled={false} isFocused={false}>
      <input {...props} />
    </Container>
  );
}

// const InputBB = ({ name, icon: Icon, ...rest }) => {
//   const inputRef = useRef(null);

//   const [isFocused, setIsFocused] = useState(false);
//   const [isFilled, setIsFilled] = useState(false);

//   const { fieldName, defaultValue, registerField } = useField(name);

//   const handleInputFocus = useCallback(() => {
//     setIsFocused(true);
//   }, []);

//   const handleInputBlur = useCallback(() => {
//     setIsFocused(false);

//     setIsFilled(!!inputRef.current?.value);
//   }, []);

//   useEffect(() => {
//     registerField({
//       name: fieldName,
//       ref: inputRef.current,
//       path: "value",
//     });
//   }, [fieldName, registerField]);

//   return (
//     <Container isFilled={isFilled} isFocused={isFocused}>
//       {Icon && <Icon size={20} />}

//       <input
//         onFocus={handleInputFocus}
//         onBlur={handleInputBlur}
//         defaultValue={defaultValue}
//         ref={inputRef}
//         {...rest}
//       />
//     </Container>
//   );
// };

export default Input;
