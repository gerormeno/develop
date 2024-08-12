import { useState } from 'react';
import LoginIcon from '@/assets/navbar/LoginIconSolid.svg';
import Login from '@/layouts/Login';

const LoginButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClickLogin = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="lg:ml-8 ml-4 flow-root">
      <button
        className="group -m-2 flex items-center p-2 text-navbar-text hover:text-navbar-text-hover"
        onClick={handleClickLogin}
        aria-label="Login"      >
        <img
          src={LoginIcon}
          className="h-6 w-6 flex-shrink-0"
          aria-hidden="true"
          alt="Login Icon"
          style={{ filter: "brightness(0) saturate(100%)" }}
        />
      </button>
      {isModalVisible && <Login onClose={handleCloseModal} />}
    </div>
  );
};

export default LoginButton;