
Wedding Invite - Starter Template
================================

What's included:
 - Vite + React minimal app
 - Tailwind CSS configuration
 - Simple Hero component using the last frame from your video (public/assets/last_frame.png)
 - RSVP form (saves to localStorage as a placeholder)
 - Placeholder firebase.js and utils/api.js to hook up Firestore later

Quick start:
1. Extract the zip and open terminal in the project folder.
2. Install: `npm install`
3. Dev server: `npm run dev`
4. Build: `npm run build`

To connect Firebase:
 - Create a Firebase project, enable Firestore and Storage.
 - Paste your Firebase config into src/firebase.js and modify src/utils/api.js to call Firestore.

Files:
 - public/assets/last_frame.png  (extracted from your video)
 - src/components/Hero.jsx
 - src/components/RSVPForm.jsx
 - src/firebase.js (placeholder)
 - src/utils/api.js (mock)

Enjoy! If you want, I can:
 - Turn localStorage mock into real Firebase calls and deploy to Firebase Hosting for you.
 - Generate QR codes for sample links and include Admin CSV export.

