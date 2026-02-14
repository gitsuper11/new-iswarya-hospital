# Quick Edit Examples

## 1️⃣ UPDATE HOSPITAL NAME TO YOUR HOSPITAL

### Step 1: Edit Header
File: `src/components/common/Header.tsx`

**Find this** (around line 16):
```typescript
<Link href="/" className="text-2xl font-bold text-blood-red">
  Iswarya Hospital
</Link>
```

**Change to**:
```typescript
<Link href="/" className="text-2xl font-bold text-blood-red">
  Your Hospital Name
</Link>
```

### Step 2: Edit Footer
File: `src/components/common/Footer.tsx`

**Find this** (around line 15):
```typescript
<div>
  <h4 className="text-white font-bold mb-4">Iswarya Hospital</h4>
```

**Change to**:
```typescript
<div>
  <h4 className="text-white font-bold mb-4">Your Hospital Name</h4>
```

### Step 3: Edit Layout Metadata
File: `src/app/layout.tsx`

**Find this** (around line 15):
```typescript
title: 'Iswarya Hospital - Quaternary Care Healthcare',
description: 'World-class healthcare services...',
```

**Change to**:
```typescript
title: 'Your Hospital Name - Your Tagline',
description: 'Your hospital description...',
```

---

## 2️⃣ UPDATE PHONE NUMBER EVERYWHERE

### Find and Replace: `914420252025`

Update these files:
- `src/components/common/Header.tsx` (line ~30 for WhatsApp, line ~38 for Call)
- `src/components/common/Footer.tsx` (lines ~48, 50)
- `src/app/contact-us/page.tsx` (lines ~33, 52, 54)
- `src/app/page.tsx` (line ~41 for WhatsApp CTA)

**Example - Header**:
```typescript
// BEFORE
<a href="https://wa.me/914420252025" target="_blank">

// AFTER
<a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank">
```

---

## 3️⃣ UPDATE EMAIL ADDRESS

### Find and Replace: `info@iswarya.com`

Update these files:
- `src/components/common/Footer.tsx`
- `src/app/contact-us/page.tsx` (line ~55)

**Example**:
```typescript
// BEFORE
href="mailto:info@iswarya.com"

// AFTER
href="mailto:youremail@yourhospital.com"
```

---

## 4️⃣ CHANGE HOSPITAL ADDRESS

File: `src/components/common/Footer.tsx` (lines ~34-36)

**Find this**:
```typescript
<p className="text-sm text-gray-300">
  110, Rajiv Gandhi Salai,<br />
  OMR, Chennai<br />
  Tamil Nadu 600096
</p>
```

**Change to**:
```typescript
<p className="text-sm text-gray-300">
  Your Address Line 1,<br />
  City, State<br />
  Postal Code
</p>
```

Also update in `src/app/contact-us/page.tsx` (lines ~47-53):
```typescript
<p className="text-sm text-gray-700">
  Your Address<br />
  City, State<br />
  Postal Code
</p>
```

---

## 5️⃣ CHANGE HOSPITAL COLORS

File: `src/tailwind.config.ts`

**Find this** (around line 6-9):
```typescript
colors: {
  'blood-red': 'rgb(0, 41, 104)',
  'light-blue-bg': '#E0F2F7',
  'light-red-bg': '#FFEEEE',
},
```

**Change colors**:
```typescript
colors: {
  'blood-red': '#FF0000',        // Red color - primary
  'light-blue-bg': '#F0F8FF',    // Light blue - background
  'light-red-bg': '#FFE0E0',     // Light red - accent
},
```

**Color Values Your Can Use**:
- Red: `#FF0000`, `#E31E24`, `#C41E3A`
- Blue: `#0066CC`, `#003BA5`, `#1F51B6`
- Green: `#00A651`, `#2D8B61`, `#118844`
- Purple: `#6B4BA5`, `#5B3F99`, `#4A2F82`

---

## 6️⃣ ADD A NEW DOCTOR

File: `src/lib/data/doctors.ts`

**Find the doctors array** and add this at the end:

```typescript
{
  id: 7,  // Increment the ID
  name: 'Dr. Your Doctor Name',
  specialty: 'Doctor Specialty (e.g., Cardiology)',
  bio: 'A brief biography of the doctor goes here. Include their background, expertise, and approach to patient care.',
  image: 'https://example.com/your-doctor-image.jpg',  // Doctor photo URL
  qualifications: [
    'MBBS',
    'MD (Specialty)',
    'Fellowship in (Specialty)',
  ],
  experience: '20+ years',
  slug: 'dr-your-doctor-name',  // Lowercase with dashes
  phone: '+91 98765 43210',
  email: 'doctor@yourhospital.com',
  rating: 4.8,
  reviews: 95,
},
```

**Then add comma** after the previous doctor's closing `}`

---

## 7️⃣ ADD A NEW BLOG POST

File: `src/lib/data/blog.ts`

**Add this to the blogPosts array**:

```typescript
{
  id: 7,  // Increment from last ID
  title: 'Your Blog Post Title',
  slug: 'your-blog-post-title',  // Lowercase with dashes
  author: 'Dr. Author Name',
  date: '2026-02-13',  // YYYY-MM-DD format
  image: 'https://example.com/blog-image.jpg',  // Featured image
  excerpt: 'A short preview of the blog post that appears in listings...',
  content: `
Full blog post content goes here. You can include:

- Multiple paragraphs
- Lists
- Multiple lines

Just keep it in backticks (`) as shown in the example.
  `,
  category: 'Health',  // e.g., Cardiology, General, Surgery
  tags: ['health', 'tips', 'hospital'],
},
```

---

## 8️⃣ UPDATE DOCTOR INFORMATION

File: `src/lib/data/doctors.ts`

**Find the doctor** (search by name or ID) and edit fields:

```typescript
{
  id: 1,
  name: 'Dr. New Name',             // CHANGE NAME
  specialty: 'New Specialty',        // CHANGE SPECIALTY
  bio: 'New biography...',           // CHANGE BIO
  image: 'https://new-image-url',   // CHANGE IMAGE
  qualifications: [                  // CHANGE QUALIFICATIONS
    'New Qualification',
  ],
  experience: '25+ years',           // CHANGE EXPERIENCE
  slug: 'dr-new-name',              // UPDATE TO MATCH NAME
  phone: '+91 12345 67890',         // CHANGE PHONE
  email: 'newemail@hospital.com',   // CHANGE EMAIL
  rating: 4.9,                       // CHANGE RATING
  reviews: 150,                      // CHANGE REVIEW COUNT
},
```

---

## 9️⃣ UPDATE HERO SECTION (HOME PAGE)

File: `src/app/page.tsx`

### Change Hero Video
```typescript
// Line ~9 - Find this:
<source src="https://videos.files.wordpress.com/UYmAdNVC/iswarya-hospital-70sec-without-end-clip.mp4" type="video/mp4" />

// Change to:
<source src="https://your-video-url.mp4" type="video/mp4" />
```

### Change Hero Heading
```typescript
// Line ~35 - Find this:
<h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-blood-red mb-4 leading-tight">
  Quaternary Care. Unmatched Excellence. For the Most Complex Cases..
</h1>

// Change to:
<h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-blood-red mb-4 leading-tight">
  Your Hospital Tagline or Heading Here
</h1>
```

### Change Hero Description
```typescript
// Line ~38 - Find this:
<p className="text-xs md:text-sm text-gray-700 mb-6">
  At Iswarya Hospital, we are dedicated to providing world-class healthcare services...
</p>

// Change to:
<p className="text-xs md:text-sm text-gray-700 mb-6">
  Your hospital description and mission statement goes here...
</p>
```

### Change Hero Image
```typescript
// Line ~47 - Find this:
<img src="https://iswarya.com/wp-content/uploads/2025/06/1.webp" alt="Hospital Interior" />

// Change to:
<img src="https://your-image-url.jpg" alt="Hospital Interior" />
```

---

## 🔟 REMOVE A SECTION FROM HOME PAGE

File: `src/app/page.tsx`

**Doctors Section** - Delete lines ~88-113 (entire `<section>` for doctors)

**Services Section** - Delete lines ~115-135 (entire `<section>` for services)

**Blog Section** - Delete lines ~137-162 (entire `<section>` for blog)

**Testimonials Section** - Delete lines ~164-188 (entire `<section>` for testimonials)

---

## 1️⃣1️⃣ UPDATE HOSPITAL HOURS

File: `src/app/contact-us/page.tsx` (lines ~85-100)

**Find this**:
```typescript
<div className="space-y-3 text-sm text-gray-700">
  <div className="flex justify-between">
    <span>Monday - Friday</span>
    <span className="font-semibold">8:00 AM - 8:00 PM</span>
  </div>
  <div className="flex justify-between">
    <span>Saturday</span>
    <span className="font-semibold">9:00 AM - 6:00 PM</span>
  </div>
  <div className="flex justify-between">
    <span>Sunday</span>
    <span className="font-semibold">10:00 AM - 4:00 PM</span>
  </div>
</div>
```

**Change to your hours**:
```typescript
<div className="space-y-3 text-sm text-gray-700">
  <div className="flex justify-between">
    <span>Monday - Friday</span>
    <span className="font-semibold">6:00 AM - 10:00 PM</span>
  </div>
  <div className="flex justify-between">
    <span>Saturday</span>
    <span className="font-semibold">7:00 AM - 8:00 PM</span>
  </div>
  <div className="flex justify-between">
    <span>Sunday</span>
    <span className="font-semibold">8:00 AM - 6:00 PM</span>
  </div>
</div>
```

---

## 1️⃣2️⃣ ADD CUSTOM FORM FIELD

File: `src/app/contact-us/page.tsx`

### Step 1: Add to Form State (line ~7)
```typescript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  newField: '',  // ADD THIS LINE
});
```

### Step 2: Add Input Field (after other inputs)
```typescript
<div>
  <label htmlFor="newField" className="block text-sm font-semibold text-gray-700 mb-2">
    Field Label *
  </label>
  <input
    id="newField"
    type="text"
    name="newField"
    value={formData.newField}
    onChange={handleChange}
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blood-red"
    placeholder="Placeholder text"
  />
</div>
```

---

## 🧪 TEST YOUR CHANGES

After editing any file:

```bash
# Check for errors
npm run build

# If build succeeds, start dev server
npm run dev

# Visit http://localhost:3000 in your browser
```

---

## 💾 SAVE CHANGES

All files are automatically saved. After editing:
1. Files save to disk
2. Run `npm run build` to check for errors
3. Run `npm run dev` to test locally
4. Deploy when ready

---

## ⚠️ THINGS TO AVOID

❌ **DON'T**:
- Edit files in `.next/` folder
- Change file names or move files
- Delete `interface` or `type` definitions
- Edit `package.json` without knowing what you're doing
- Change slug values without updating references
- Remove closing tags or brackets

✅ **DO**:
- Test changes with `npm run build`
- Keep file structure intact
- Use proper date format: `YYYY-MM-DD`
- Use lowercase with dashes for slugs: `dr-name`, `blog-title`
- Replace entire image URLs, not parts of them

---

## 📞 SUPPORT

If you encounter errors:
1. Check the error message in terminal
2. Verify file syntax (matching brackets, quotes)
3. Ensure you've saved the file
4. Run `npm run build` to see detailed errors
5. Check file paths are correct

