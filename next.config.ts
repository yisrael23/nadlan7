import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // הגדרת המערכת לאפשר שימוש בתמונות מרחוק מכתובת ה-CDN של Sanity
    // חיוני להצגת תמונות בלוג מ-Sanity.
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
    
    // אנו מוחקים את האובייקט experimental כולו, כולל הגדרות ה-Turbopack שגרמו לכשל.
    // הפרויקט ירוץ כעת עם webpack, כפי שנדרש.
    // אם תצטרך בעתיד להוסיף הגדרות experimental, הוסף אותן כאן.
    // experimental: {}, // נשאיר את זה בחוץ לגמרי כדי למנוע בעיות
};

export default nextConfig;