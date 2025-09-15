import './MessageBox.css'
import { useState } from 'react';
import Modal from './Modal';
import ReviewForm from './ReviewForm';

function MessageBox({ title, message, actions, onClose, children }) {
    const [reviewOpen, setReviewOpen] = useState(false);
    return (
        <section className="message-box">
            <div className="message-box-content">
                <h2 style={{ color: (title === 'Success' && 'rgba(0, 255, 0, 1)') || (title === 'Error' && 'rgba(255, 0, 0, 1)') || 'rgb(161, 126, 54)' }}>{title}</h2>
                {children}
                {message}
            </div>
            <div className="message-box-actions">
                { actions === 'close' && <button className='action-type' onClick={onClose}>Close</button> }
                { actions === 'ok' && <button style={{ backgroundColor: '#046dff' }} className='action-type' onClick={onClose}>Ok</button> }
                { actions === 'OkClose' && <div style={{display: 'flex', gap: '2rem'}}> <button className='action-type' style={{backgroundColor: 'rgb(255, 10, 10)'}} onClick={onClose}>Cancel</button> <button style={{backgroundColor: 'rgba(0, 119, 255, 1)'}} className='action-type' onClick={() => setReviewOpen(true)}>Ok</button> </div> }
            </div>
            <Modal isOpen={reviewOpen} onClose={() => { setReviewOpen(false); onClose() }}>
              <ReviewForm onClose={() => { setReviewOpen(false); onClose(); }}/>
            </Modal>
        </section>
    );
}

export default MessageBox;
