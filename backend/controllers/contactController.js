const Contact = require('../models/Contact');

const createContact = async (req, res) => {
  try {
    const { name, email, phone, company, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required'
      });
    }

    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res.status(409).json({
        success: false,
        message: 'Contact with this email already exists'
      });
    }

    const contact = new Contact({
      name,
      email,
      phone: phone || '',
      company: company || '',
      service: service || '',
      message
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        company: contact.company,
        service: contact.service,
        message: contact.message,
        createdAt: contact.createdAt
      }
    });

  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};


module.exports = {
  createContact,
};