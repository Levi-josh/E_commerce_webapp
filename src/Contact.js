import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const showToast = () => {
        toast.success('This is a success notification');
      };
    
      return (
        <div>
          <button onClick={showToast}>Show Toast</button>
        </div>
      );
}

export default Contact