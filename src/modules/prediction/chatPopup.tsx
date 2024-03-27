/* eslint-disable @next/next/inline-script-id */
import Script from 'next/script';
import React from 'react';

const ChatPopup = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div>
        {isOpen && <iframe src='/chat'></iframe>}
        <button
          id='trigger-btn'
          className='inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800'
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Open Chat
        </button>
      </div>
      <Script src='/chat-widget.js'></Script>
      <Script>{`
window.onload = function() {
    ChatWidget.init("xx-slkUdka819...");
};
`}</Script>
    </div>
  );
};

export default ChatPopup;
