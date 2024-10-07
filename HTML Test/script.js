function validateForm() {
    // Validate First Name and Last Name (Required fields)
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    if (firstName.trim() === '' || lastName.trim() === '') {
      alert('First Name and Last Name are required.');
      return false;
    }
  
    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    // Validate Phone Number
    const phoneNumber = document.getElementById('phoneNumber').value;
    const phonePattern = /^\d{10}$/;  // Assuming a 10-digit phone number
    if (!phonePattern.test(phoneNumber)) {
      alert('Please enter a valid 10-digit phone number.');
      return false;
    }
  
    // Validate Password (Minimum 8 characters)
    const password = document.getElementById('password').value;
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return false;
    }
  
    alert('Form submitted successfully!');
    return true;
  }
  