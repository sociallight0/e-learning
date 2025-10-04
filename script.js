// ============================================================
// COURSE DATA
// ============================================================
const courses = [
    {
        id: 1,
        title: "Web Development Fundamentals",
        description: "Learn HTML, CSS, and JavaScript from scratch. Build responsive websites and understand modern web development.",
        icon: "🌐",
        instructor: "John Smith",
        duration: "8 weeks",
        lessons: [
            "Introduction to HTML",
            "CSS Styling and Layout",
            "JavaScript Basics",
            "DOM Manipulation",
            "Responsive Design",
            "Final Project"
        ],
        status: "not-started"
    },
    {
        id: 2,
        title: "Python Programming",
        description: "Master Python programming from beginner to advanced. Learn data structures, OOP, and real-world applications.",
        icon: "🐍",
        instructor: "Sarah Johnson",
        duration: "10 weeks",
        lessons: [
            "Python Basics and Syntax",
            "Data Types and Structures",
            "Functions and Modules",
            "Object-Oriented Programming",
            "File Handling",
            "Error Handling and Debugging"
        ],
        status: "not-started"
    },
    {
        id: 3,
        title: "Database Design with SQL",
        description: "Learn database design principles, SQL queries, and how to build efficient relational databases.",
        icon: "🗄️",
        instructor: "Michael Chen",
        duration: "6 weeks",
        lessons: [
            "Database Fundamentals",
            "SQL Basics and Queries",
            "Joins and Relationships",
            "Normalization",
            "Indexes and Optimization",
            "Real-world Projects"
        ],
        status: "not-started"
    },
    {
        id: 4,
        title: "React.js Mastery",
        description: "Build modern web applications with React. Learn components, hooks, state management, and best practices.",
        icon: "⚛️",
        instructor: "Emily Davis",
        duration: "7 weeks",
        lessons: [
            "React Fundamentals",
            "Components and Props",
            "State and Lifecycle",
            "Hooks in Depth",
            "Context API",
            "Building a Full App"
        ],
        status: "not-started"
    },
    {
        id: 5,
        title: "UI/UX Design Principles",
        description: "Master user interface and user experience design. Create beautiful, intuitive, and user-friendly applications.",
        icon: "🎨",
        instructor: "Alex Martinez",
        duration: "5 weeks",
        lessons: [
            "Design Thinking",
            "User Research",
            "Wireframing and Prototyping",
            "Visual Design Principles",
            "Usability Testing",
            "Design Systems"
        ],
        status: "not-started"
    },
    {
        id: 6,
        title: "Git and Version Control",
        description: "Learn Git for version control. Collaborate effectively with teams and manage your code professionally.",
        icon: "📦",
        instructor: "David Wilson",
        duration: "4 weeks",
        lessons: [
            "Git Basics",
            "Branching and Merging",
            "Collaboration Workflows",
            "GitHub Features",
            "Conflict Resolution",
            "Best Practices"
        ],
        status: "not-started"
    }
];

// ============================================================
// STATE MANAGEMENT
// ============================================================
let currentUser = null;
let currentFilter = 'all';
let selectedCourse = null;

// ============================================================
// INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    renderCourses();
    updateStats();
    initializeEventListeners();
});

// ============================================================
// USER AUTHENTICATION
// ============================================================
function loadUserData() {
    const savedUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    const savedCourses = JSON.parse(localStorage.getItem('courses') || 'null');
    
    if (savedCourses) {
        courses.forEach((course, index) => {
            if (savedCourses[index]) {
                course.status = savedCourses[index].status;
            }
        });
    }
    
    if (savedUser) {
        currentUser = savedUser;
        showUserInfo();
    } else {
        showAuthButtons();
    }
}

function showUserInfo() {
    document.getElementById('userInfo').classList.add('active');
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('signupBtn').style.display = 'none';
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('userAvatar').textContent = currentUser.name[0].toUpperCase();
}

function showAuthButtons() {
    document.getElementById('userInfo').classList.remove('active');
    document.getElementById('loginBtn').style.display = 'block';
    document.getElementById('signupBtn').style.display = 'block';
}

function saveUserData() {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.setItem('courses', JSON.stringify(courses));
}

// ============================================================
// EVENT LISTENERS
// ============================================================
function initializeEventListeners() {
    // Auth buttons
    document.getElementById('loginBtn').addEventListener('click', () => {
        document.getElementById('loginModal').classList.add('active');
    });
    
    document.getElementById('signupBtn').addEventListener('click', () => {
        document.getElementById('signupModal').classList.add('active');
    });
    
    document.getElementById('logoutBtn').addEventListener('click', logout);
    
    // Modal close buttons
    document.getElementById('closeLoginModal').addEventListener('click', () => {
        document.getElementById('loginModal').classList.remove('active');
    });
    
    document.getElementById('closeSignupModal').addEventListener('click', () => {
        document.getElementById('signupModal').classList.remove('active');
    });
    
    document.getElementById('closeCourseModal').addEventListener('click', () => {
        document.getElementById('courseModal').classList.remove('active');
    });
    
    // Modal switch links
    document.getElementById('switchToSignup').addEventListener('click', () => {
        document.getElementById('loginModal').classList.remove('active');
        document.getElementById('signupModal').classList.add('active');
    });
    
    document.getElementById('switchToLogin').addEventListener('click', () => {
        document.getElementById('signupModal').classList.remove('active');
        document.getElementById('loginModal').classList.add('active');
    });
    
    // Forms
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('signupForm').addEventListener('submit', handleSignup);
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            renderCourses();
        });
    });
    
    // Course actions
    document.getElementById('markCompleteBtn').addEventListener('click', markCourseComplete);
    document.getElementById('startCourseBtn').addEventListener('click', startCourse);
}

// ============================================================
// AUTHENTICATION HANDLERS
// ============================================================
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation (in real app, this would be server-side)
    if (email && password) {
        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const user = storedUsers.find(u => u.email === email && u.password === password);
        
        if (user) {
            currentUser = { name: user.name, email: user.email };
            saveUserData();
            showUserInfo();
            document.getElementById('loginModal').classList.remove('active');
            document.getElementById('loginForm').reset();
            showNotification('Welcome back, ' + user.name + '!', 'success');
        } else {
            showNotification('Invalid email or password', 'error');
        }
    }
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    if (name && email && password) {
        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Check if user already exists
        if (storedUsers.find(u => u.email === email)) {
            showNotification('User already exists', 'error');
            return;
        }
        
        storedUsers.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(storedUsers));
        
        currentUser = { name, email };
        saveUserData();
        showUserInfo();
        document.getElementById('signupModal').classList.remove('active');
        document.getElementById('signupForm').reset();
        showNotification('Account created successfully!', 'success');
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showAuthButtons();
    showNotification('Logged out successfully', 'success');
}

// ============================================================
// COURSE RENDERING
// ============================================================
function renderCourses() {
    const grid = document.getElementById('coursesGrid');
    grid.innerHTML = '';
    
    const filteredCourses = courses.filter(course => {
        if (currentFilter === 'all') return true;
        if (currentFilter === 'completed') return course.status === 'completed';
        if (currentFilter === 'in-progress') return course.status === 'in-progress';
        return true;
    });
    
    filteredCourses.forEach(course => {
        const card = createCourseCard(course);
        grid.appendChild(card);
    });
    
    if (filteredCourses.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: #666; padding: 40px;">No courses found for this filter.</p>';
    }
}

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = `course-card ${course.status}`;
    
    let statusBadge = '';
    if (course.status === 'completed') {
        statusBadge = '<span class="course-status completed">✓ Completed</span>';
    } else if (course.status === 'in-progress') {
        statusBadge = '<span class="course-status in-progress">🔄 In Progress</span>';
    }
    
    card.innerHTML = `
        <div class="course-header">
            <div class="course-icon">${course.icon}</div>
            ${statusBadge}
        </div>
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <div class="course-footer">
            <div class="course-meta-item">
                <span>👨‍🏫</span>
                <span>${course.instructor}</span>
            </div>
            <div class="course-meta-item">
                <span>⏱️</span>
                <span>${course.duration}</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => showCourseDetail(course));
    
    return card;
}

// ============================================================
// COURSE DETAIL MODAL
// ============================================================
function showCourseDetail(course) {
    selectedCourse = course;
    
    document.getElementById('courseTitle').textContent = course.title;
    document.getElementById('courseInstructor').textContent = course.instructor;
    document.getElementById('courseDuration').textContent = course.duration;
    document.getElementById('courseDescription').textContent = course.description;
    
    const lessonsList = document.getElementById('courseLessonsList');
    lessonsList.innerHTML = '';
    course.lessons.forEach((lesson, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${lesson}`;
        lessonsList.appendChild(li);
    });
    
    // Update button states
    const markCompleteBtn = document.getElementById('markCompleteBtn');
    const startCourseBtn = document.getElementById('startCourseBtn');
    
    if (course.status === 'completed') {
        markCompleteBtn.textContent = '✓ Completed';
        markCompleteBtn.disabled = true;
        markCompleteBtn.style.opacity = '0.6';
        startCourseBtn.textContent = 'Review Course';
    } else if (course.status === 'in-progress') {
        markCompleteBtn.textContent = 'Mark as Complete';
        markCompleteBtn.disabled = false;
        markCompleteBtn.style.opacity = '1';
        startCourseBtn.textContent = 'Continue Learning';
    } else {
        markCompleteBtn.textContent = 'Mark as Complete';
        markCompleteBtn.disabled = false;
        markCompleteBtn.style.opacity = '1';
        startCourseBtn.textContent = 'Start Learning';
    }
    
    document.getElementById('courseModal').classList.add('active');
}

// ============================================================
// COURSE ACTIONS
// ============================================================
function markCourseComplete() {
    if (!currentUser) {
        showNotification('Please login to mark courses as complete', 'error');
        document.getElementById('courseModal').classList.remove('active');
        document.getElementById('loginModal').classList.add('active');
        return;
    }
    
    if (selectedCourse && selectedCourse.status !== 'completed') {
        selectedCourse.status = 'completed';
        saveUserData();
        renderCourses();
        updateStats();
        showCourseDetail(selectedCourse);
        showNotification('🎉 Congratulations! Course completed!', 'success');
    }
}

function startCourse() {
    if (!currentUser) {
        showNotification('Please login to start learning', 'error');
        document.getElementById('courseModal').classList.remove('active');
        document.getElementById('loginModal').classList.add('active');
        return;
    }
    
    if (selectedCourse && selectedCourse.status === 'not-started') {
        selectedCourse.status = 'in-progress';
        saveUserData();
        renderCourses();
        updateStats();
        showCourseDetail(selectedCourse);
        showNotification('Course started! Happy learning! 📚', 'success');
    } else if (selectedCourse && selectedCourse.status === 'in-progress') {
        showNotification('Continue where you left off! 💪', 'success');
    } else if (selectedCourse && selectedCourse.status === 'completed') {
        showNotification('Reviewing completed course 📖', 'success');
    }
}

// ============================================================
// STATISTICS
// ============================================================
function updateStats() {
    const total = courses.length;
    const completed = courses.filter(c => c.status === 'completed').length;
    const inProgress = courses.filter(c => c.status === 'in-progress').length;
    
    document.getElementById('totalCourses').textContent = total;
    document.getElementById('completedCourses').textContent = completed;
    document.getElementById('inProgressCourses').textContent = inProgress;
}

// ============================================================
// NOTIFICATION SYSTEM
// ============================================================
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        font-weight: 600;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
