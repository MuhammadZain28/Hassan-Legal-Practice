import './ContactForm.css';
import { useState } from 'react';
import { supabase } from '../Database/SupabaseClient';
import Modal from './Modal';
import MessageBox from './MessageBox';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import SearchableSelect from './SearchableSelect';

function ContactForm() {
  const [modalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [issue, setIssue] = useState("Property Dispute");
  const options = [
      "Property Dispute",
      "Child Custody",
      "Divorce",
      "Cyber Bullying",
      "Domestic Violence",
      "Marriage Registration"
  ];
  const insertData = async (e) => {
      const { fname, lname, email, phone, message } = e.target.elements;
      const { data, error } = await supabase
        .from('consultation') 
        .insert([
          { fName: fname.value, lName: lname.value, email: email.value, phone: phone.value, issue: issue, message: message.value }
        ])

      if (error) {
        console.error('Insert failed:', error)
      } else {
        console.log('Inserted:', data)
      }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        insertData(e);
        setModalOpen(true);
    };
    return (
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 style={{ margin: '1rem', textAlign: 'center' }}>How can we help you</h2>
            <div className="form-group">
              <input type="text" id="fname" name="fname" placeholder="First Name" required />
              <input type="text" id="lname" name="lname" placeholder="Last Name" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Email" required />
              <input type="tel" id="phone" name="phone" placeholder="Phone" required />
            </div>
            <SearchableSelect options={options} onChange={(value) => setIssue(value)} />
            <div className="form-group">
              <textarea id="message" name="message" rows="8" placeholder="Message" required></textarea>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <button type="submit" className="submit">Submit</button>
            </div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
              <MessageBox title="Success" actions="ok" message="Your message has been Recieved. We will contact you soon. Thank You for your message" onClose={() => {setModalOpen(false); setOpen(true)}} >
                <FaCheckCircle size={64} color='rgba(0, 255, 0, 1)'/>
              </MessageBox>
            </Modal>
            
            <Modal isOpen={open} onClose={() => setOpen(false)}>
              <MessageBox title="Rate Us" actions="OkClose" message="Give your Feedback on our services" onClose={() => setOpen(false)} >
                <FaStar size={64} color='rgba(161, 126, 54, 1)'/>
              </MessageBox>
            </Modal>
          </form>
    );
}
export default ContactForm;