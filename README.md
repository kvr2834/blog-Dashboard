# 📝 Blog Admin Dashboard

A full-stack blog dashboard built with **Next.js 14 App Router**, **MongoDB**, and **Tailwind CSS**. Allows admins to create, view, and delete blogs with image uploads and filtering by category.

---

## 🚀 Features
- Add/Delete blogs
- Upload & save images locally
- Category-based filtering (e.g., All, Startup, Tech)
- Clean, responsive UI with Tailwind
- MongoDB database integration

---

## 🛠️ Tech Stack
- **Frontend**: Next.js 14 (App Router), Tailwind CSS
- **Backend**: API Routes in Next.js
- **Database**: MongoDB + Mongoose
- **Styling**: Tailwind CSS
- **Image Handling**: Node.js `fs/promises`
- **Notifications**: React Toastify

---

### 📁 Folder Structure

```bash
blog-Dashboard/
├── app/
│   ├── api/
│   │   └── blog/
│   │       └── route.js
│   ├── layout.js
│   └── page.js
├── lib/
│   ├── config/
│   │   └── db.js
│   └── models/
│       └── BlogModel.js
├── public/
│   └── (Uploaded images will be stored here)
├── styles/
│   └── globals.css
├── .env.local
├── .gitignore
├── package.json
├── README.md
└── next.config.js
```

🔐 .env.local Example
```
Edit
MONGO_URI=MongoId
⚠️ Do not share or commit .env.local. It's already added to .gitignore.
```

▶️ Running the Project Locally
```
# Clone the repo
git clone https://github.com/kvr2834/blog-Dashboard.git
cd blog-Dashboard
```

# Install dependencies
npm install

# Start development server
npm run dev
Open your browser at: http://localhost:3000

🧪 Sample Blog Data
```
json
Copy
Edit
{
  "title": "Next.js Blog Admin",
  "description": "A simple blog admin dashboard built with MongoDB and Next.js.",
  "category": "Tech",
  "author": "Your Name",
  "authorImg": "/default.jpg",
  "image": "/timestamp_filename.jpg",
  "date": "2025-07-08T10:30:00Z"
}
```

📌 Future Enhancements
 Add Edit Blog feature

 Add user authentication (JWT)

 Markdown content editor

 Pagination for blogs

📄 License
MIT — use freely, give credit if helpful.

👤 Author
Kartik Varia
📌 GitHub



