// HiddenBox.js
import { useState, useEffect } from 'react';

const HiddenBox = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // ทำการเปลี่ยนสถานะทุกรอบการเรียก useEffect (อัตโนมัติ)
    const interval = setInterval(() => {
      setIsVisible((prevVisibility) => !prevVisibility);
    }, 2000); // เปลี่ยนทุก 2 วินาที (2000 มิลลิวินาที)

    // ล้าง interval เมื่อคอมโพเนนต์ถูก unmounted
    return () => clearInterval(interval);
  }, []); // [] บอกว่า useEffect จะทำงานเฉพาะครั้งแรกเท่านั้น

  return (
    <div>
      {isVisible && (
        <div className="visible-box">
          <p>This is a visible box.</p>
        </div>
      )}
      {!isVisible && (
        <div className="hidden-box">
          <p>This is a hidden box.</p>
        </div>
      )}
    </div>
  );
};

export default HiddenBox;
