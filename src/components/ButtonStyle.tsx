type ButtonStyleProps = {
  btnStyle: React.CSSProperties;
};

const ButtonStyle = ({ btnStyle }: ButtonStyleProps) => {
  return <div style={btnStyle}>ButtonStyleProps</div>;
};

export default ButtonStyle;
