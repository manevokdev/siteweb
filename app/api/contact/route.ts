import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Email de notification pour le client (Olivier)
    const notificationEmail = await resend.emails.send({
      from: 'MANévok <contact@manevok.com>',
      to: 'olivier.kunstmann@outlook.fr',
      subject: `Nouveau message de ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #1976D2 0%, #1565C0 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 10px 10px;
                border: 1px solid #e5e7eb;
                border-top: none;
              }
              .field {
                margin-bottom: 20px;
                background: white;
                padding: 15px;
                border-radius: 8px;
                border-left: 4px solid #1976D2;
              }
              .field-label {
                font-weight: 600;
                color: #1976D2;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .field-value {
                color: #333;
                font-size: 15px;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e5e7eb;
                margin-top: 10px;
                white-space: pre-wrap;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 13px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">📬 Nouveau message de contact</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Site MANévok</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="field-label">Nom / Prénom</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #1976D2; text-decoration: none;">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="field-label">Téléphone</div>
                <div class="field-value"><a href="tel:${phone}" style="color: #1976D2; text-decoration: none;">${phone}</a></div>
              </div>
              ` : ''}
              
              ${subject ? `
              <div class="field">
                <div class="field-label">Sujet</div>
                <div class="field-value">${subject}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">${message}</div>
              </div>
              
              <div class="footer">
                <p>Ce message a été envoyé depuis le formulaire de contact de <strong>manevok.com</strong></p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    // Email de confirmation pour l'utilisateur
    const confirmationEmail = await resend.emails.send({
      from: 'MANévok <contact@manevok.com>',
      to: email,
      subject: 'Message bien reçu - MANévok',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #1976D2 0%, #8BC34A 100%);
                color: white;
                padding: 40px 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: white;
                padding: 40px 30px;
                border-radius: 0 0 10px 10px;
                border: 1px solid #e5e7eb;
                border-top: none;
              }
              .checkmark {
                width: 60px;
                height: 60px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 20px;
                font-size: 30px;
              }
              .message-summary {
                background: #f9fafb;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #8BC34A;
                margin: 20px 0;
              }
              .cta-button {
                display: inline-block;
                background: #1976D2;
                color: white;
                padding: 14px 30px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: 600;
                margin: 20px 0;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 13px;
              }
              .contact-info {
                margin-top: 20px;
                text-align: center;
              }
              .contact-info a {
                color: #1976D2;
                text-decoration: none;
                margin: 0 10px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 26px;">Message bien reçu !</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Merci de votre intérêt pour MANévok</p>
            </div>
            
            <div class="content">
              <p style="font-size: 16px; margin-top: 0;">Bonjour <strong>${name}</strong>,</p>
              
              <p style="font-size: 15px; color: #4b5563;">
                Je vous confirme la bonne réception de votre message. Je reviendrai vers vous très rapidement, 
                généralement sous <strong>24 heures</strong>.
              </p>
              
              <div class="message-summary">
                <p style="margin: 0 0 10px 0; font-weight: 600; color: #1976D2;">Récapitulatif de votre message :</p>
                ${subject ? `<p style="margin: 5px 0;"><strong>Sujet :</strong> ${subject}</p>` : ''}
                <p style="margin: 5px 0;"><strong>Message :</strong></p>
                <p style="margin: 10px 0 0 0; color: #4b5563; font-style: italic;">${message.substring(0, 200)}${message.length > 200 ? '...' : ''}</p>
              </div>
              
              <p style="font-size: 15px; color: #4b5563;">
                En attendant, n'hésitez pas à découvrir mes réalisations et expertises sur le site.
              </p>
              
              <div style="text-align: center;">
                <a href="https://manevok.com" class="cta-button">Découvrir MANévok</a>
              </div>
              
              <div class="footer">
                <p style="margin: 5px 0;">
                  <strong>MANévok</strong> - Management de Transition & Conseil en Supply Chain
                </p>
                <p style="margin: 5px 0; font-size: 12px;">
                  Cet email est envoyé en réponse à votre demande de contact sur manevok.com
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json({ 
      success: true,
      notificationId: notificationEmail.data?.id,
      confirmationId: confirmationEmail.data?.id
    })

  } catch (error) {
    console.error('Erreur envoi email:', error)
    return NextResponse.json(
      { success: false, error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}
