import React from 'react';

function EmailLink() {
  const emailAddress = 'info@quantix.com';
  const subject = 'Hello Quantix';
  const body = 'My request is...'; 

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a className='flex items-center gap-2' href={gmailUrl} target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>  {emailAddress}
    </a>
  );
}

export default EmailLink;


