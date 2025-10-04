# 🎓 VibeCoding Academy - Mini E-Learning Platform

A fully functional e-learning platform prototype built with HTML, CSS, and JavaScript. This project demonstrates modern web development practices including responsive design, local storage, and interactive user interfaces.

---

## 📋 Project Overview

This mini e-learning platform allows users to:
- ✅ View a list of 6 available courses
- ✅ Click on courses to see detailed information
- ✅ Mark courses as "Completed"
- ✅ Track course progress (Not Started, In Progress, Completed)
- ✅ User authentication (Login/Sign Up)
- ✅ Filter courses by status
- ✅ View learning statistics
- ✅ Persistent data storage using localStorage

---

## 🚀 Features

### Core Features
1. **Course Management**
   - 6 pre-loaded courses with different topics
   - Course cards with icons, descriptions, and metadata
   - Detailed course view with lesson breakdown
   - Status tracking (Not Started, In Progress, Completed)

2. **User Authentication**
   - User registration (Sign Up)
   - User login
   - Session persistence
   - Logout functionality

3. **Interactive UI**
   - Responsive design for all devices
   - Smooth animations and transitions
   - Modal dialogs for authentication and course details
   - Filter courses by status
   - Real-time statistics dashboard

4. **Data Persistence**
   - LocalStorage for user data
   - Course progress tracking
   - Session management

---

## 📁 Project Structure

```
mini-elearning-platform/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript functionality and logic
└── README.md           # Project documentation
```

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling, flexbox, grid, animations
- **JavaScript (ES6+)** - Interactive functionality and logic
- **LocalStorage API** - Data persistence
- **No external libraries** - Pure vanilla JavaScript

---

## 📦 Installation & Setup

### Option 1: Direct File Opening
1. Download all three files (index.html, styles.css, script.js)
2. Place them in the same folder
3. Double-click `index.html` to open in your browser

### Option 2: Using a Local Server (Recommended)
1. Download all files to a project folder
2. Open terminal/command prompt in the project folder
3. Run a local server:

   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Using Node.js (if you have http-server installed):**
   ```bash
   npx http-server -p 8000
   ```

   **Using VS Code:**
   - Install "Live Server" extension
   - Right-click index.html and select "Open with Live Server"

4. Open your browser and navigate to `http://localhost:8000`

---

## 📖 How to Use

### Getting Started
1. **Open the Application**
   - Launch index.html in your browser
   - You'll see the VibeCoding Academy homepage

2. **Create an Account**
   - Click "Sign Up" button in the header
   - Enter your name, email, and password
   - Click "Sign Up" to create your account

3. **Login**
   - Click "Login" button
   - Enter your email and password
   - Click "Login" to access your account

### Using the Platform

#### Viewing Courses
- Browse the 6 available courses on the main page
- Each card shows:
  - Course icon and title
  - Brief description
  - Instructor name
  - Course duration
  - Current status badge (if applicable)

#### Course Details
- Click any course card to view full details
- See complete lesson breakdown
- View course metadata
- Access action buttons

#### Starting a Course
1. Click on a course card
2. Click "Start Learning" button
3. Course status changes to "In Progress"
4. Course card gets a yellow badge

#### Completing a Course
1. Open a course in progress
2. Click "Mark as Complete" button
3. Course status changes to "Completed"
4. Course card gets a green badge with checkmark

#### Filtering Courses
- Click filter buttons at the top:
  - **All** - Show all courses
  - **Completed** - Show only completed courses
  - **In Progress** - Show only courses in progress

#### Viewing Statistics
- Check the stats cards at the bottom:
  - Total Courses available
  - Courses Completed
  - Courses In Progress

---

## 🎨 Course List

The platform includes 6 courses:

1. **🌐 Web Development Fundamentals** (8 weeks)
   - HTML, CSS, JavaScript basics
   - Instructor: John Smith

2. **🐍 Python Programming** (10 weeks)
   - Python from beginner to advanced
   - Instructor: Sarah Johnson

3. **🗄️ Database Design with SQL** (6 weeks)
   - SQL queries and database design
   - Instructor: Michael Chen

4. **⚛️ React.js Mastery** (7 weeks)
   - Modern React development
   - Instructor: Emily Davis

5. **🎨 UI/UX Design Principles** (5 weeks)
   - User interface and experience design
   - Instructor: Alex Martinez

6. **📦 Git and Version Control** (4 weeks)
   - Git and collaboration workflows
   - Instructor: David Wilson

---

## 💾 Data Storage

The application uses **localStorage** to persist data:

### Stored Data
- **User accounts** - Email, password, name
- **Current user session** - Active logged-in user
- **Course progress** - Status of each course per user

### Storage Keys
```javascript
localStorage.getItem('users')          // All registered users
localStorage.getItem('currentUser')    // Currently logged-in user
localStorage.getItem('courses')        // Course progress data
```

### Clearing Data
To reset the application:
1. Open browser Developer Tools (F12)
2. Go to "Application" or "Storage" tab
3. Click "Local Storage"
4. Click "Clear All" or delete specific keys

---

## 🎯 Key Features Explained

### 1. Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktops
- Grid layout adapts to screen size
- Touch-friendly buttons and interactions

### 2. Modal Dialogs
- Login modal for returning users
- Sign up modal for new users
- Course detail modal with full information
- Smooth animations and transitions

### 3. Status Management
Three status levels for courses:
- **Not Started** (default) - No badge
- **In Progress** - Yellow badge, can be completed
- **Completed** - Green badge with checkmark

### 4. Filter System
Real-time filtering without page reload:
- Filter by all courses
- Filter by completed courses
- Filter by in-progress courses

### 5. Notification System
Toast notifications for user actions:
- Success messages (green)
- Error messages (red)
- Auto-dismiss after 3 seconds

---

## 🔧 Customization Guide

### Adding New Courses
Edit the `courses` array in `script.js`:

```javascript
{
    id: 7,
    title: "Your Course Title",
    description: "Course description here",
    icon: "🚀",
    instructor: "Instructor Name",
    duration: "X weeks",
    lessons: [
        "Lesson 1",
        "Lesson 2",
        // Add more lessons
    ],
    status: "not-started"
}
```

### Changing Colors
Edit CSS variables or colors in `styles.css`:

```css
/* Main gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Change to your preferred colors */
background: linear-gradient(135deg, #yourColor1, #yourColor2);
```

### Modifying Course Duration
Update the `duration` property in the course object.

---

## 🐛 Known Limitations

1. **No Backend** - All data stored in browser localStorage
2. **No Password Encryption** - Passwords stored in plain text (not production-ready)
3. **No Email Validation** - Basic validation only
4. **Single Browser** - Data doesn't sync across devices
5. **No Password Recovery** - Cannot reset forgotten passwords

---

## 🚀 Future Enhancements

Potential features to add:

### Phase 1
- [ ] Course search functionality
- [ ] Course categories/tags
- [ ] Progress bars for individual courses
- [ ] User profile page
- [ ] Dark mode toggle

### Phase 2
- [ ] Video player integration
- [ ] Quiz system for courses
- [ ] Certificate generation
- [ ] Course ratings and reviews
- [ ] Discussion forums

### Phase 3
- [ ] Backend integration (Node.js/Express)
- [ ] Database (MongoDB/MySQL)
- [ ] Real authentication (JWT)
- [ ] File upload for course materials
- [ ] Payment integration

---

## 📱 Browser Compatibility

Tested and working on:
- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🎓 Learning Outcomes

By building this project, you'll learn:

1. **HTML Structure**
   - Semantic HTML5 elements
   - Forms and form validation
   - Modal dialogs

2. **CSS Skills**
   - Flexbox and CSS Grid
   - Animations and transitions
   - Responsive design
   - Modern UI patterns

3. **JavaScript Concepts**
   - DOM manipulation
   - Event handling
   - LocalStorage API
   - Array methods (filter, map, forEach)
   - ES6+ features (arrow functions, template literals)
   - State management

4. **Web Development Best Practices**
   - Code organization
   - User experience design
   - Data persistence
   - Error handling

---

## 🤝 Contributing

This is an educational project. Feel free to:
- Fork the repository
- Add new features
- Improve the design
- Fix bugs
- Share your improvements

---

## 📄 License

This project is created for educational purposes as part of the VibeCoding Week 1 assignment.

Free to use for learning and personal projects.

---

## 👨‍💻 Author

**Student Name:** [Your Name]  
**Course:** VibeCoding - Week 1  
**Date:** October 2025  
**Assignment:** Build a Mini E-Learning Platform

---

## 📞 Support

For questions or issues:
- Review the code comments in each file
- Check the browser console for errors (F12)
- Ensure all three files are in the same folder
- Try a different browser if issues persist

---

## 🎉 Credits

- **Icons:** Emoji unicode characters
- **Color Scheme:** Custom gradient design
- **Inspiration:** Modern e-learning platforms
- **Course Content:** AI-assisted course outlines

---

**Happy Learning! 🚀📚**
