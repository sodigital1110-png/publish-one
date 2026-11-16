import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, service, message } = data;

    // We expect EMAIL_USER and EMAIL_APP_PASSWORD in process.env
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sodigital1110@gmail.com', // Recipient email
      replyTo: email, // Reply to the user who filled the form
      subject: `New Lead from ${name} - ${service}`,
      text: `
You have a new inquiry from the SO Digital website contact form!
        
Name: ${name}
Email: ${email}
Service Interested In: ${service}
        
Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true, message: 'Message sent successfully.' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, message: 'Failed to send message.' }), { status: 500 });
  }
}
