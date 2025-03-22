'use client';
// @ts-expect-error: TawkMessengerReact types are incompatible with our setup.
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';


const TawkChat = () => {
  return (
    <TawkMessengerReact
      propertyId="67df1577aede0319107129ea"
      widgetId="1imvmnn23"
    />
  );
};

export default TawkChat;