// import { useEffect } from 'react';
// import { createPortal } from 'react-dom';
// import './Modal.css';

// const modalRoot = document.getElementById('modal-root');

// const Modal = ({ onClose }) => {
//   useEffect(() => {
//     // вешает слушатели (didmount)
//     window.addEventListener('keydown', closeModal);

//     // убирает слушатели (willunmount)
//     return () => {
//       window.removeEventListener('keydown', closeModal);
//     }
//   });

// // 'Escape' закрывает модалку
// const closeModal = e => {
//     if (e.code === 'Escape') {
//       onClose();
//     }
//   };

// // смотрит за бекдропом и закривает модалку
// const handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       onClose();
//     }
//   };

//     return createPortal(
//       <div className="Modal__backdrop" onClick={handleBackdropClick}>
//         <div className="Modal__content">{this.props.children}</div>
//       </div>,
//       modalRoot,
//     );
// };

// export default Modal;
