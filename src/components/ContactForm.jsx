import './ContactForm.css';
import { useState, useEffect } from 'react';
import { supabase } from '../Database/SupabaseClient';
import Modal from './Modal';
import MessageBox from './MessageBox';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import Loading from './Loading';
import Aos from 'aos';
import 'aos/dist/aos.css';

function ContactForm() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  const [modalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: ''
    });
    const insertData = async () => {
      const { data, error } = await supabase
        .from('clients') // your table name
        .insert([
          { firstName: formData.fname, lastName: formData.lname, email: formData.email, phone: formData.phone, message: formData.message } // your row data
        ])

      if (error) {
        console.error('Insert failed:', error)
      } else {
        console.log('Inserted:', data)
      }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        insertData().then(() => setLoading(false));
        setModalOpen(true);
    };
    if (loading) {
      return <Loading />;
    }
    return (
          <form className="contact-form" onSubmit={(e) => {setLoading(true); handleSubmit(e)}} data-aos="fade-up" data-aos-duration="800" data-aos-offset="300">
            <h2 style={{ margin: '1rem', textAlign: 'center', width: '100%' }}>How can we help you</h2>
            <div className="form-group">
              <input type="text" id="fname" name="fname" placeholder="First Name" value={formData.fname} onChange={(e) => setFormData({ ...formData, fname: e.target.value })} required />
              <input type="text" id="lname" name="lname" placeholder="Last Name" value={formData.lname} onChange={(e) => setFormData({ ...formData, lname: e.target.value })} required />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              <input type="tel" id="phone" name="phone" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
            </div>
            <div className="form-group">
              <textarea id="message" name="message" rows="8" placeholder="Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required></textarea>
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