# Hospital Website - Edit & Customization Guide

## 📁 Project Structure Overview

```
src/
├── app/                          # Page routes
│   ├── page.tsx                  # HOME PAGE - Edit hero, stats, sliders
│   ├── about/
│   │   └── page.tsx              # ABOUT PAGE - Edit mission, values, team
│   ├── doctors/
│   │   ├── page.tsx              # DOCTORS DIRECTORY - Edit filters, search
│   │   └── [slug]/page.tsx       # DOCTOR PROFILE - Edit layout, info
│   ├── treatments/
│   │   ├── page.tsx              # TREATMENTS DIRECTORY - Edit cards
│   │   └── [slug]/page.tsx       # TREATMENT DETAILS - Edit description
│   ├── services/
│   │   └── page.tsx              # SERVICES PAGE - Edit services grid
│   ├── blog/
│   │   ├── page.tsx              # BLOG LISTING - Edit filters, layout
│   │   └── [slug]/page.tsx       # BLOG POST - Edit article layout
│   ├── contact-us/
│   │   └── page.tsx              # CONTACT FORM - Edit form fields
│   └── layout.tsx                # GLOBAL LAYOUT - Edit Header/Footer
├── components/
│   ├── common/
│   │   ├── Header.tsx            # NAVIGATION - Edit menu links, buttons
│   │   └── Footer.tsx            # FOOTER - Edit links, social media
│   └── features/
│       ├── doctors/DoctorCard.tsx # DOCTOR CARD - Edit card layout
│       ├── blog/BlogCard.tsx      # BLOG CARD - Edit blog card layout
│       └── services/ServiceCard.tsx # SERVICE CARD - Edit service layout
└── lib/
    └── data/                      # DATA FILES - Edit content/information
        ├── doctors.ts             # Doctor profiles - EDIT THIS FOR DOCTOR INFO
        ├── treatments.ts          # Treatment data - EDIT THIS FOR TREATMENTS
        ├── services.ts            # Services data - EDIT THIS FOR SERVICES
        ├── blog.ts                # Blog posts - EDIT THIS FOR BLOG CONTENT
        └── testimonials.ts        # Patient testimonials - EDIT THIS

```

---

## 🎨 DATA FILES (Content Only - Easiest to Edit)

### 📋 **src/lib/data/doctors.ts**
**Purpose**: All doctor profiles
**What to EDIT**:
- Doctor names, specialties, qualifications
- Images (URLs)
- Experience, phone, email
- Ratings and review count
- Bio text

**Example**:
```typescript
export const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. John Smith',  // EDIT THIS
    specialty: 'Cardiology',  // EDIT THIS
    bio: 'Experienced cardiologist...',  // EDIT THIS
    image: 'https://...',  // EDIT THIS - Replace with your image
    qualifications: ['MD', 'Board Certified'],  // EDIT THIS
    experience: '15+ years',  // EDIT THIS
    slug: 'dr-john-smith',  // Keep in sync with name
    phone: '+91 98765 43210',  // EDIT THIS
    email: 'john@hospital.com',  // EDIT THIS
    rating: 4.8,  // EDIT THIS
    reviews: 120,  // EDIT THIS
  },
  // ADD MORE DOCTORS BY COPYING THIS STRUCTURE
];
```

**To ADD a new doctor**:
```typescript
{
  id: 7,  // New unique ID
  name: 'Dr. New Doctor',
  specialty: 'Specialty',
  bio: 'Description...',
  image: 'url',
  qualifications: ['MD'],
  experience: 'XX+ years',
  slug: 'dr-new-doctor',
  phone: '+91...',
  email: 'email@hospital.com',
  rating: 4.5,
  reviews: 100,
}
```

**To REMOVE a doctor**: Delete the entire `{}` object from the array

---

### 🏥 **src/lib/data/treatments.ts**
**Purpose**: Hospital specialties and treatments
**What to EDIT**:
- Treatment names and descriptions
- Available procedures
- Associated doctors
- Images and icons
- Full descriptions

**Example**:
```typescript
export const treatments: Treatment[] = [
  {
    id: 1,
    name: 'Cardiac Surgery',  // EDIT THIS
    description: 'Advanced heart care...',  // EDIT THIS
    fullDescription: 'Comprehensive description of cardiac care...',  // EDIT THIS
    icon: 'fas fa-heartbeat',  // EDIT THIS - FontAwesome icon
    image: 'https://...',  // EDIT THIS - Replace URL
    slug: 'cardiac-surgery',  // Keep in sync with name
    procedures: [
      'Open Heart Surgery',  // EDIT THIS - Add/Remove procedures
      'Bypass',
    ],
    doctors: ['Dr. Muthukumaran'],  // EDIT THIS - Match doctor names
  },
];
```

**To ADD a new treatment**: Copy the structure and add to array

**To REMOVE a treatment**: Delete the entire `{}` object

---

### 🔧 **src/lib/data/services.ts**
**Purpose**: Hospital services
**What to EDIT**:
- Service names and descriptions
- Icons and images
- Service details

```typescript
export const services: Service[] = [
  {
    id: 1,
    name: 'Emergency Care',  // EDIT THIS
    description: '24/7 emergency services...',  // EDIT THIS
    image: 'https://...',  // EDIT THIS
    icon: 'fas fa-ambulance',  // EDIT THIS - FontAwesome icon
    slug: 'emergency-care',
  },
];
```

---

### 📝 **src/lib/data/blog.ts**
**Purpose**: Blog posts
**What to EDIT**:
- Post titles and content
- Author, date, category
- Featured images
- Excerpts and tags

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Heart Health Tips',  // EDIT THIS
    slug: 'heart-health-tips',  // Auto-generate from title
    author: 'Dr. Smith',  // EDIT THIS
    date: '2026-02-13',  // EDIT THIS
    image: 'https://...',  // EDIT THIS
    excerpt: 'Learn about maintaining a healthy heart...',  // EDIT THIS
    content: 'Full article content here...',  // EDIT THIS - MAIN CONTENT
    category: 'Cardiology',  // EDIT THIS
    tags: ['heart', 'health'],  // EDIT THIS
  },
];
```

**To ADD a new blog post**: Copy the structure and add to array

---

### 🎤 **src/lib/data/testimonials.ts**
**Purpose**: Patient testimonials
**What to EDIT**:
- Patient names and roles
- Testimonial text
- Rating and images

```typescript
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',  // EDIT THIS
    role: 'Patient',  // EDIT THIS
    image: 'https://...',  // EDIT THIS
    testimonial: 'Great experience at the hospital...',  // EDIT THIS
    rating: 5,  // EDIT THIS (1-5 stars)
  },
];
```

---

## 🏠 PAGE FILES (Layout & Structure)

### 📄 **src/app/page.tsx** (HOME PAGE)
**What to EDIT**:
- Hero video URL (line ~9)
- Hero heading text (line ~35)
- Hero description (line ~38)
- Hero image URL (line ~47)
- Stats section icons and text (lines ~63-71)
- Section headings and CTAs

**Find and EDIT these lines**:
```typescript
<video ... src="YOUR_VIDEO_URL">  // Change video

<h1>Your Hospital Name...</h1>  // Change heading

<img src="YOUR_IMAGE_URL">  // Change image

// Change stat cards (icons and text)
<StatCard icon="fas fa-brain" title="24/7" subtitle="STROKE UNITS" />
```

**To ADD sections**: Add new `<section>` blocks following the existing pattern

**To REMOVE sections**: Delete the entire `<section>...</section>` block

---

### 👨‍⚕️ **src/app/doctors/page.tsx** (DOCTORS LISTING)
**What to EDIT**:
- Filter/search functionality
- Grid layout (columns, gaps)
- Filter button colors
- No results message

**To customize filtering**: Edit lines ~18-26 (filter logic)

---

### 🏥 **src/app/treatments/page.tsx** (TREATMENTS LISTING)
**What to EDIT**:
- Hero section text (line ~16)
- Card layout and styling
- Expandable button styles
- Colors and fonts

**To REMOVE expandable feature**: Delete lines ~48-85 (conditional render)

---

### 📚 **src/app/blog/page.tsx** (BLOG LISTING)
**What to EDIT**:
- Hero text
- Search placeholder (line ~43)
- Category filter buttons
- Grid layout

**To remove search**: Delete lines ~39-48

---

### 📖 **src/app/blog/[slug]/page.tsx** (INDIVIDUAL BLOG POST)
**What to EDIT**:
- Share button URLs
- Related posts section
- CTA section
- Article styling

**To REMOVE share buttons**: Delete lines ~88-112

**To REMOVE related posts**: Delete lines ~127-160

---

### 📞 **src/app/contact-us/page.tsx** (CONTACT FORM)
**What to EDIT**:
- Form labels and placeholders
- Contact details (phone, email, address)
- Hospital hours (lines ~85-100)
- Map embed URL (line ~249)
- Form subject options (lines ~158-165)

**To ADD form fields**:
```typescript
<div>
  <label htmlFor="fieldName">Field Label *</label>
  <input
    id="fieldName"
    name="fieldName"
    value={formData.fieldName}
    onChange={handleChange}
    required
    // ... rest of input props
  />
</div>
```

**To REMOVE form fields**: Delete the input/textarea block

**Update initial state** (line ~7):
```typescript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  newField: '',  // ADD THIS
});
```

---

### ℹ️ **src/app/about/page.tsx** (ABOUT PAGE)
**What to EDIT**:
- Hospital story/history (lines ~18-26)
- Mission statement (line ~33)
- Vision statement (line ~40)
- Values and achievements
- Leadership team info
- Statistics

**To ADD team member**:
```typescript
{
  name: 'Dr. New Person',
  position: 'Title',
  specialty: 'Specialty',
  image: 'url',
}
```

**To REMOVE section**: Delete the entire `<section>...</section>` block

---

## 🎨 COMPONENT FILES (UI & Style)

### 🔗 **src/components/common/Header.tsx** (NAVIGATION)
**What to EDIT**:
- Navigation links (lines ~65-89 for desktop, ~150+ for mobile)
- Hospital name/logo (line ~16)
- Contact button links (WhatsApp, phone)
- Menu styling and colors
- Mobile bottom nav items

**To ADD a new menu item**:
```typescript
<Link href="/new-page" className="text-gray-700 hover:text-blood-red transition-colors">
  New Page
</Link>
```

**To REMOVE a menu item**: Delete the entire `<Link>` tag

**To CHANGE hospital name**:
```typescript
<Link href="/">
  Your Hospital Name Here  // EDIT THIS
</Link>
```

---

### 🦶 **src/components/common/Footer.tsx** (FOOTER)
**What to EDIT**:
- Logo/hospital name (line ~15)
- About text
- Quick links
- Contact details (address, phone, email, WhatsApp)
- Social media links
- Color scheme

**To ADD footer link**:
```typescript
<a href="/new-page">Link Name</a>
```

**To REMOVE footer section**: Delete entire column `<div>`

---

### 🎴 **src/components/features/doctors/DoctorCard.tsx**
**What to EDIT**:
- Card layout sizing
- Text styling
- Button appearance
- Colors and spacing

**To REMOVE "View Profile" button**: Delete lines ~27-31

---

## 🎨 STYLING & COLORS

### **src/tailwind.config.ts**
**What to EDIT** - Custom colors:
```typescript
colors: {
  'blood-red': 'rgb(0, 41, 104)',  // Main color - EDIT THIS
  'light-blue-bg': '#E0F2F7',      // Background - EDIT THIS
  'light-red-bg': '#FFEEEE',       // Accent - EDIT THIS
}
```

**How to change all red colors**: Edit `blood-red` value
**How to change all blue backgrounds**: Edit `light-blue-bg` value
**How to change accent colors**: Edit `light-red-bg` value

---

## 🔄 COMMON CHANGES CHECKLIST

### ✅ Change Hospital Name
- [ ] `src/components/common/Header.tsx` line 16
- [ ] `src/components/common/Footer.tsx` line 15
- [ ] `src/app/layout.tsx` (metadata title)

### ✅ Change Phone Number
- [ ] `src/components/common/Header.tsx` (WhatsApp link)
- [ ] `src/components/common/Footer.tsx` (all occurrences)
- [ ] `src/app/contact-us/page.tsx`

### ✅ Change Colors
- [ ] `src/tailwind.config.ts` (update color hex codes)

### ✅ Change Contact Email
- [ ] `src/components/common/Footer.tsx`
- [ ] `src/app/contact-us/page.tsx`

### ✅ Add New Doctor
- [ ] Add object to `src/lib/data/doctors.ts`
- [ ] Create doctor image and host URL

### ✅ Add New Blog Post
- [ ] Add object to `src/lib/data/blog.ts`
- [ ] Create featured image and host URL

### ✅ Update Address/Location
- [ ] `src/components/common/Footer.tsx` (lines ~34-36)
- [ ] `src/app/contact-us/page.tsx` (lines ~47-53, 114)
- [ ] Google Maps embed URL (line ~249)

---

## 🔗 EXTERNAL LINKS TO UPDATE

Search for these and replace with your actual URLs:

```
https://wa.me/914420252025        → Your WhatsApp number
https://iswarya.com/wp-content/   → Your image hosting
+914420252025                      → Your phone number
info@iswarya.com                   → Your email
110, Rajiv Gandhi Salai, OMR       → Your address
```

---

## 📊 WHERE TO ADD IMAGES

Replace image URLs in:
1. **Doctor images** → `src/lib/data/doctors.ts` (image field)
2. **Treatment images** → `src/lib/data/treatments.ts` (image field)
3. **Service images** → `src/lib/data/services.ts` (image field)
4. **Blog images** → `src/lib/data/blog.ts` (image field)
5. **Testimonial images** → `src/lib/data/testimonials.ts` (image field)
6. **About page images** → `src/app/about/page.tsx` (img src attributes)
7. **Hero image** → `src/app/page.tsx` (line ~47)

---

## 🎥 VIDEO URL

**Change hero video URL** → `src/app/page.tsx` line ~9:
```typescript
<video className="w-full h-auto object-cover" autoPlay loop muted playsInline>
  <source src="YOUR_NEW_VIDEO_URL" type="video/mp4" />
</video>
```

---

## 🚀 BUILD & TEST

After making edits:

```bash
# Check for errors
npm run build

# Start development server
npm run dev

# Visit http://localhost:3000
```

---

## 📝 NOTES

- **Do NOT** edit files in `.next/` folder
- **Do NOT** edit `package.json` unless adding dependencies
- **Always test** after making changes with `npm run build`
- **Keep file structures intact** - don't rename or move files
- **Match TypeScript types** when adding new data
- **Use relative paths** for internal links (`/doctors`, `/about`)
- **Use absolute URLs** for external images and videos

---

## 🆘 QUICK REFERENCE

| What to Change | Where | Lines |
|---|---|---|
| Hospital Name | Header.tsx | 16 |
| Phone Number | Header.tsx, Footer.tsx, contact-us/page.tsx | Various |
| Colors | tailwind.config.ts | 6-9 |
| Doctor Info | lib/data/doctors.ts | All |
| Treatments | lib/data/treatments.ts | All |
| Services | lib/data/services.ts | All |
| Blog Posts | lib/data/blog.ts | All |
| Contact Info | contact-us/page.tsx | Various |
| Address | Footer.tsx, contact-us/page.tsx | Various |
| Hero Section | page.tsx (home) | ~9-50 |

