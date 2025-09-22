import logo from "../assets/header_logo.png";

interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps) {
    return (
      <>
        <div className="header-container">
            <img src={logo} className="header-logo" alt="Header logo" />
            <p className="header-title">
                {title}
            </p>
        </div>
      </>
    );
  }
  