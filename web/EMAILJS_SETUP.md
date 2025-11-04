# EmailJS Setup Guide for ISA Contact Form

## 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps for your chosen provider
5. Copy the **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Copy and paste the template below:

### Template Content

**Template Name:** ISA Contact Form Submission

**Subject Line:**

```
New Contact Form: {{subject}}
```

**Email Body (HTML):**

```html
<div style="font-family: system-ui, -apple-system, sans-serif, Arial; font-size: 14px; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px;">
  <!-- Header Message -->
  <div style="color: #2c3e50; margin-bottom: 20px; font-size: 14px; line-height: 1.6;">
    A message by <strong>{{from_name}}</strong> has been received. Kindly respond at your earliest convenience.
  </div>

  <!-- Message Container -->
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: #d3d3d3;
    "
  >
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="vertical-align: top; width: 60px;">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px 0 0;
              background-color: #f0f8ff;
              border-radius: 8px;
              font-size: 26px;
              text-align: center;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top; padding-left: 10px;">
          <div style="margin-bottom: 8px;">
            <div style="color: #2c3e50; font-size: 18px; font-weight: 600; margin-bottom: 4px;">
              {{from_name}}
            </div>
            <div style="color: #95a5a6; font-size: 13px; margin-bottom: 4px;">
              {{from_email}}
            </div>
            <div style="color: #bdc3c7; font-size: 12px;">
              {{time}}
            </div>
          </div>

          <!-- Subject -->
          <div style="margin-top: 12px; margin-bottom: 8px;">
            <span style="color: #7f8c8d; font-size: 12px; text-transform: uppercase; font-weight: 600;">Subject:</span>
            <div style="color: #34495e; font-size: 16px; font-weight: 500; margin-top: 4px;">
              {{subject}}
            </div>
          </div>

          <!-- Category -->
          <div style="margin-top: 12px; margin-bottom: 12px;">
            <span style="color: #7f8c8d; font-size: 12px; text-transform: uppercase; font-weight: 600;">Category:</span>
            <div style="margin-top: 4px;">
              <span style="
                display: inline-block;
                padding: 4px 12px;
                background-color: #667eea;
                color: white;
                border-radius: 12px;
                font-size: 12px;
                font-weight: 600;
              ">
                {{category}}
              </span>
            </div>
          </div>

          <!-- Message -->
          <div style="margin-top: 16px;">
            <span style="color: #7f8c8d; font-size: 12px; text-transform: uppercase; font-weight: 600;">Message:</span>
            <p style="
              font-size: 15px;
              line-height: 1.6;
              color: #2c3e50;
              margin: 8px 0 0 0;
              white-space: pre-wrap;
              word-wrap: break-word;
            ">
              {{message}}
            </p>
          </div>

          <!-- Newsletter Subscription -->
          <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid #ecf0f1;">
            <span style="color: #7f8c8d; font-size: 11px;">
              Newsletter subscription: <strong style="color: #2c3e50;">{{subscribe}}</strong>
            </span>
          </div>
        </td>
      </tr>
    </table>
  </div>

  <!-- Footer -->
  <div style="
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #ecf0f1;
    text-align: center;
    color: #95a5a6;
    font-size: 12px;
  ">
    <p style="margin: 0 0 8px 0;">
      This message was sent via the <strong style="color: #667eea;">ISA Contact Form</strong>
    </p>
    <p style="margin: 0; color: #bdc3c7;">
      International Students Association • Ashesi University
    </p>
  </div>
</div>
```

4. Click **Save** and copy the **Template ID** (e.g., `template_xyz789`)

## 4. Get Your Public Key

1. Go to **Account** (top-right corner)
2. Find **API Keys** section
3. Copy your **Public Key** (e.g., `A1B2C3D4E5F6G7H8I`)

## 5. Configure Environment Variables

1. Create a `.env.local` file in the `web` directory (if it doesn't exist)
2. Add the following variables with your actual values:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=A1B2C3D4E5F6G7H8I
```

3. Replace the placeholder values with your actual IDs from EmailJS

## 6. Template Variables Reference

The contact form sends these variables to EmailJS:

| Variable     | Description             | Example                     |
| ------------ | ----------------------- | --------------------------- |
| `from_name`  | User's full name        | "Emmanuel Adoum"            |
| `from_email` | User's email address    | "user@ashesi.edu.gh"        |
| `subject`    | Message subject         | "Question about membership" |
| `category`   | Selected category       | "General Inquiry"           |
| `message`    | User's message          | "I would like to know..."   |
| `subscribe`  | Newsletter subscription | "Yes" or "No"               |
| `reply_to`   | Reply-to email          | Same as `from_email`        |

## 7. Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out the form and submit
4. Check your email inbox (the one configured in EmailJS)
5. You should receive the formatted email with all the details

## 8. Email Service Recommendations

### For Development:

- **Gmail** - Easy to set up, free tier available
- **Outlook** - Good alternative

### For Production:

- **SendGrid** - Reliable, good free tier
- **Mailgun** - Professional, good deliverability
- Consider upgrading EmailJS to a paid plan for higher quotas

## 9. Troubleshooting

**Issue:** "EmailJS is not configured" error

- **Solution:** Make sure all three environment variables are set in `.env.local`

**Issue:** Email not sending

- **Solution:**
  - Check EmailJS dashboard for error logs
  - Verify service is connected and active
  - Check email provider settings (may need to enable "less secure apps" for Gmail)

**Issue:** Template variables not showing

- **Solution:** Make sure variable names in template match exactly (case-sensitive)

**Issue:** Emails going to spam

- **Solution:**
  - Add sender email to contacts
  - Set up SPF/DKIM records (for custom domains)
  - Use EmailJS's custom domain feature (paid plans)

## 10. Free Tier Limits

EmailJS Free Plan:

- 200 emails/month
- 2 email services
- 3 email templates
- Basic support

For higher volume, consider upgrading or switching to a dedicated email service.

## 11. Security Notes

- Never commit `.env.local` to version control
- The public key is safe to expose (it's meant to be public)
- Service ID and Template ID are also public-safe
- For sensitive operations, use server-side email sending instead

## 12. Alternative: Auto-Reply Template (Optional)

You can create a second template to send auto-replies to users:

**Subject:** Thank you for contacting ISA

**Body:**

```
Hello {{from_name}},

Thank you for reaching out to the International Students Association!

We've received your message regarding "{{subject}}" and will get back to you within 24 hours.

In the meantime, feel free to explore:
- Our upcoming events: https://isa.ashesi.edu.gh/events
- Meet our members: https://isa.ashesi.edu.gh/members
- Photo gallery: https://isa.ashesi.edu.gh/gallery

Best regards,
ISA Executive Team
```

Then send two emails in the `handleSubmit` function - one to your team and one auto-reply to the user.
