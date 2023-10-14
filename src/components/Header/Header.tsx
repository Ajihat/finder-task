import { HeaderProps } from './Header.types';

export const Header = ({ title, text }: HeaderProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};
