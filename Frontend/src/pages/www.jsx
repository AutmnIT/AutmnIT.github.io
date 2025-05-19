import { useState } from 'react';

export default function WorkWithMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    option: 'Hire for Freelance',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Mock submission (replace with MongoDB later)
    console.log('Form submitted:', formData);
    setErrors({});
    setFormData({ name: '', email: '', option: 'Hire for Freelance', message: '' });
    alert('Message sent! I’ll get back to you soon. (Logged to console)');
  };

  return (
    <div className="work-with-me bg-[var(--darkSlate)] text-[var(--text)] py-16">
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="border-[6px] border-[var(--skyBlue)] md:text-3xl p-4 md:px-8 font-bold tracking-widest text-center mb-8">
          W O R K   W I T H   M E
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Gig Intro */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Let’s Connect</h3>
            <p className="text-lg">
              Got a project idea or just want to connect? Drop me a message—I’d love to hear from you!
            </p>
            <p className="text-lg mt-2">
              Prefer email? Reach me at{' '}
              <a
                href="mailto:your.email@example.com"
                className="text-[var(--skyBlue)] hover:underline"
              >
                your.email@example.com
              </a>
              .
            </p>
          </div>
          {/* Form */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-[var(--midnight)] text-[var(--text)] border border-[var(--skyBlue)]"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-[var(--midnight)] text-[var(--text)] border border-[var(--skyBlue)]"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="option" className="block text-sm font-medium mb-1">
                  Interested In
                </label>
                <select
                  id="option"
                  name="option"
                  value={formData.option}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-[var(--midnight)] text-[var(--text)] border border-[var(--skyBlue)]"
                >
                  <option value="Hire for Freelance">Hire for Freelance</option>
                  <option value="Hire for Company">Hire for Company</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-2 rounded-lg bg-[var(--midnight)] text-[var(--text)] border border-[var(--skyBlue)]"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[var(--skyBlue)] text-white rounded hover:bg-[var(--midnight)] transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}