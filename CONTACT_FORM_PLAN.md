# Contact Form Implementation Plan

## Overview
Add a contact form modal to the portfolio with spam protection (Cloudflare Turnstile) and email delivery (Resend). Clicking "Get In Touch" opens a modal with a pre-filled message template.

---

## Tech Stack
- **Cloudflare Turnstile** - Privacy-friendly CAPTCHA (free)
- **Resend** - Email delivery service (3,000 free emails/month)
- **Next.js API Route** - Server-side form handling
- **Rate Limiting** - Prevent abuse

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/components/ui/Modal.tsx` | Reusable modal component |
| `src/components/ContactForm.tsx` | Form with Turnstile widget |
| `src/app/api/contact/route.ts` | API endpoint for form submission |
| `src/lib/rateLimit.ts` | Simple rate limiting utility |

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/Hero/HeroContent.tsx` | Add onClick to open modal |
| `src/components/CallToAction.tsx` | Add onClick to open modal |
| `.env.local` | Add Turnstile + Resend keys |

---

## Implementation Steps

### Step 1: Install Dependencies
```bash
npm install resend @marsidev/react-turnstile
```

### Step 2: Create Environment Variables
```env
# .env.local
TURNSTILE_SITE_KEY=your_site_key
TURNSTILE_SECRET_KEY=your_secret_key
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your@email.com
```

### Step 3: Create Modal Component
**File:** `src/components/ui/Modal.tsx`

- Overlay with backdrop blur
- Click outside to close
- Escape key to close
- Focus trap for accessibility
- Smooth enter/exit animations
- Responsive sizing

### Step 4: Create Contact Form Component
**File:** `src/components/ContactForm.tsx`

Features:
- Pre-filled message template (editable)
- Name, email, message fields
- Turnstile widget integration
- Honeypot hidden field (spam trap)
- Loading/success/error states
- Form validation

**Pre-filled Template:**
```
Hi Corey,

I came across your portfolio and was impressed by your work. I'd love to discuss a potential opportunity with you.

Looking forward to connecting!
```

### Step 5: Create API Route
**File:** `src/app/api/contact/route.ts`

Flow:
1. Validate request body
2. Check rate limit (5 requests per IP per hour)
3. Reject if honeypot field filled
4. Verify Turnstile token with Cloudflare
5. Send email via Resend
6. Return success/error response

### Step 6: Create Rate Limiter
**File:** `src/lib/rateLimit.ts`

- In-memory rate limiting (sufficient for Vercel serverless)
- 5 submissions per IP per hour
- Returns 429 Too Many Requests if exceeded

### Step 7: Wire Up Buttons
Add state management and onClick handlers to both:
- `HeroContent.tsx` - "Get In Touch" button
- `CallToAction.tsx` - "Get In Touch" button

Use React Context or prop drilling to share modal state.

---

## External Setup Required

### Cloudflare Turnstile (5 min)
1. Go to https://dash.cloudflare.com/turnstile
2. Add site → Get Site Key + Secret Key
3. Choose "Managed" mode (invisible when possible)

### Resend (5 min)
1. Sign up at https://resend.com
2. Verify your domain OR use onboarding@resend.dev for testing
3. Get API key from dashboard

---

## Component Structure

```
<HeroContent>
  └── <Button onClick={openModal}>Get In Touch</Button>

<ContactModal isOpen={isOpen} onClose={closeModal}>
  └── <ContactForm onSuccess={closeModal} />
        ├── Name input
        ├── Email input
        ├── Message textarea (pre-filled)
        ├── Honeypot input (hidden)
        └── <Turnstile siteKey={...} />
</ContactModal>
```

---

## API Request/Response

**POST /api/contact**

Request:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hi Corey...",
  "turnstileToken": "xxx",
  "honeypot": ""
}
```

Success Response (200):
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

Error Responses:
- 400: Invalid input / Turnstile failed
- 429: Rate limited
- 500: Email send failed

---

## Security Checklist

- [x] Turnstile CAPTCHA verification
- [x] Rate limiting (5/hour per IP)
- [x] Honeypot field for bots
- [x] Server-side validation
- [x] Email stored in env vars only
- [x] HTTPS only (Vercel default)

---

## Testing Checklist

- [ ] Form opens from Hero button
- [ ] Form opens from CTA button
- [ ] Pre-filled message displays correctly
- [ ] User can edit all fields
- [ ] Turnstile widget appears
- [ ] Form submits successfully
- [ ] Email received in inbox
- [ ] Error states display properly
- [ ] Rate limiting works (test 6+ submissions)
- [ ] Honeypot rejects bot submissions
- [ ] Modal closes on success
- [ ] Modal closes on Escape key
- [ ] Modal closes on outside click
- [ ] Mobile responsive layout

---

## Verification Steps

1. Run `npm run dev`
2. Click "Get In Touch" → Modal opens
3. Fill form → Submit
4. Check email inbox for message
5. Verify Turnstile in Cloudflare dashboard
6. Test rate limiting by submitting 6+ times

---

## Deployment Notes

When deploying to Vercel:
1. Add all env vars to Vercel dashboard
2. Update Turnstile allowed domains to include production URL
3. Verify domain with Resend for production emails
