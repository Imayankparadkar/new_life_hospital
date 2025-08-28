import React, { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'male',
    email: '',
    phone: '',
    date: '',
    time: '',
    symptoms: '',
    treatmentType: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.age.trim()) {
        newErrors.age = 'Age is required';
    } else if (isNaN(formData.age) || parseInt(formData.age) <= 0) {
        newErrors.age = 'Please enter a valid age';
    }
    if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    console.log('Appointment submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#e0e8e8]/50 border border-[#a8c8d8] rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-[#305060] mb-2">Appointment Requested!</h3>
        <p className="text-[#406878] mb-4">
          Thank you for requesting an appointment. We've sent a confirmation to your email and our team will contact you shortly to confirm.
        </p>
        <button 
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', age: '', gender: 'male', email: '', phone: '', date: '', time: '', symptoms: '', treatmentType: '' });
          }}
          className="btn btn-secondary"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#305060] mb-1">Full Name *</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`form-input ${errors.name ? 'border-red-500' : ''}`} />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-[#305060] mb-1">Age *</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className={`form-input ${errors.age ? 'border-red-500' : ''}`} />
          {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
        </div>
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-[#305060] mb-1">Gender *</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="form-input">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#305060] mb-1">Phone *</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`form-input ${errors.phone ? 'border-red-500' : ''}`} />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div className="md:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-[#305060] mb-1">Email *</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`form-input ${errors.email ? 'border-red-500' : ''}`} />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-[#305060] mb-1">Preferred Date *</label>
          <input type="date" id="date" name="date" min={minDate} value={formData.date} onChange={handleChange} className={`form-input ${errors.date ? 'border-red-500' : ''}`} />
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-[#305060] mb-1">Preferred Time *</label>
          <select id="time" name="time" value={formData.time} onChange={handleChange} className={`form-input ${errors.time ? 'border-red-500' : ''}`}>
            <option value="">Select Time</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="5:00 PM">5:00 PM</option>
          </select>
          {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
        </div>
         <div className="md:col-span-2">
            <label htmlFor="treatmentType" className="block text-sm font-medium text-[#305060] mb-1">Treatment Type</label>
            <select id="treatmentType" name="treatmentType" value={formData.treatmentType} onChange={handleChange} className="form-input">
                <option value="">Select Treatment (Optional)</option>
                <option value="panchakarma">Panchakarma</option>
                <option value="abhyanga">Abhyanga</option>
                <option value="shirodhara">Shirodhara</option>
                <option value="nasyam">Nasyam</option>
                <option value="pizhichil">Pizhichil</option>
                <option value="consultation">General Consultation</option>
            </select>
        </div>
      </div>
      <div>
        <label htmlFor="symptoms" className="block text-sm font-medium text-[#305060] mb-1">Symptoms or Health Concerns</label>
        <textarea id="symptoms" name="symptoms" value={formData.symptoms} onChange={handleChange} rows="4" className="form-input" placeholder="Please describe your symptoms or health concerns briefly..."></textarea>
      </div>
      <button type="submit" className="btn btn-primary w-full md:w-auto">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;
