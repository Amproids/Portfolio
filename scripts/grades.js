// Course data organized by semester
const courseBySemester = {
    "Fall 2022": [
        { code: "REL 200", name: "The Eternal Family", credits: 2, grade: "P", transfer: "Y", retaken: false },
        { code: "PC 101", name: "Life Skills", credits: 3, grade: "B", transfer: "Y", retaken: false },
        { code: "PC 102", name: "Professional Skills", credits: 3, grade: "A", transfer: "Y", retaken: false }
    ],
    "Winter 2023": [
        { code: "REL 225", name: "Foundations of Restoration", credits: 2, grade: "P", transfer: "Y", retaken: false },
        { code: "CSEPC 110", name: "Programming Building B", credits: 2, grade: "B", transfer: "Y", retaken: false },
        { code: "PC 103", name: "University Skills", credits: 1, grade: "A", transfer: "Y", retaken: false }
    ],
    "Spring 2023": [
        { code: "CSE 111", name: "Programming with Function", credits: 2, grade: "A-", transfer: "N", retaken: false },
        { code: "CSE 121B", name: "JavaScript Language", credits: 1, grade: "B-", transfer: "N", retaken: false },
        { code: "ENG 150", name: "Writing/Reasoning Foundations", credits: 3, grade: "F", transfer: "N", retaken: true },
        { code: "WDD 130", name: "Web Fundamentals", credits: 2, grade: "F", transfer: "N", retaken: true }
    ],
    "Fall 2023": [
        { code: "CSE 210", name: "Programming with Classes", credits: 2, grade: "C-", transfer: "N", retaken: false },
        { code: "GS 170", name: "Career Development", credits: 1, grade: "A", transfer: "N", retaken: false },
        { code: "WDD 130", name: "Web Fundamentals", credits: 2, grade: "A", transfer: "N", retaken: false }
    ],
    "Winter 2024": [
        { code: "CIT 111", name: "Introduction to Databases", credits: 3, grade: "A", transfer: "N", retaken: false },
        { code: "MATH 108X", name: "Math for the Real World", credits: 3, grade: "A", transfer: "N", retaken: false },
        { code: "REL 250C", name: "Jesus Christ Evrlst Gospel", credits: 2, grade: "C", transfer: "N", retaken: false },
        { code: "WDD 230", name: "Web Frontend Development 1", credits: 3, grade: "F", transfer: "N", retaken: false }
    ],
    "Spring 2024": [
        { code: "ENG 150", name: "Writing/Reasoning Foundations", credits: 3, grade: "UW", transfer: "N", retaken: false },
        { code: "REL 275C", name: "Teachings of Book of Mormon", credits: 2, grade: "UW", transfer: "N", retaken: true },
        { code: "WDD 330", name: "Web Frontend Development 2", credits: 3, grade: "UW", transfer: "N", retaken: true }
    ],
    "Fall 2024": [
        { code: "CSE 340", name: "Web Backend Development", credits: 3, grade: "A", transfer: "N", retaken: false },
        { code: "REL 275C", name: "Teachings of Book of Mormon", credits: 2, grade: "A", transfer: "N", retaken: false },
        { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, grade: "A", transfer: "N", retaken: false },
        { code: "WDD 330", name: "Web Frontend Development 2", credits: 3, grade: "A", transfer: "N", retaken: false },
        { code: "WRIT 101", name: "Writing Professional Context", credits: 3, grade: "A", transfer: "N", retaken: false }
    ]
};

// Grade point values for GPA calculation
const gradePoints = {
    'A': 4.0, 'A-': 3.7,
    'B+': 3.3, 'B': 3.0, 'B-': 2.7,
    'C+': 2.3, 'C': 2.0, 'C-': 1.7,
    'D+': 1.3, 'D': 1.0, 'D-': 0.7,
    'F': 0.0, 'UW': 0.0
};

// Helper functions for styling
function getRowClass(grade, retaken) {
    if (retaken) return 'row-retaken';
    if (grade === 'IP') return 'row-ip';
    if (grade === 'F' || grade === 'UW') return 'row-f';
    if (grade === 'A' || grade === 'A-' || grade === 'P') return 'row-a';
    if (grade.startsWith('B')) return 'row-b';
    if (grade.startsWith('C')) return 'row-c';
    return '';
}

function getGradeClass(grade, retaken) {
    if (retaken) return 'grade-retaken';
    if (grade === 'IP') return 'grade-ip';
    if (grade === 'F' || grade === 'UW') return 'grade-f';
    if (grade === 'A' || grade === 'A-' || grade === 'P') return 'grade-a';
    if (grade.startsWith('B')) return 'grade-b';
    if (grade.startsWith('C')) return 'grade-c';
    return '';
}

// Calculate semester statistics
function calculateSemesterStats(courses) {
    return courses.reduce((acc, course) => {
        if (course.transfer === 'N' && course.grade !== 'IP' && !course.retaken) {
            if (course.grade !== 'P') {
                acc.attempted += course.credits;
                if (course.grade !== 'F' && course.grade !== 'UW') {
                    acc.earned += course.credits;
                }
                if (gradePoints[course.grade]) {
                    acc.points += gradePoints[course.grade] * course.credits;
                }
            } else {
                acc.earned += course.credits;
            }
        }
        if (course.transfer === 'Y' && !course.retaken) {
            acc.transferCredits += course.credits;
        }
        return acc;
    }, { attempted: 0, earned: 0, points: 0, transferCredits: 0 });
}

// Create row for a course
function createCourseRow(course) {
    const row = document.createElement('tr');
    row.className = getRowClass(course.grade, course.retaken);
    
    row.innerHTML = `
        <td>${course.code}</td>
        <td>${course.name}</td>
        <td class="text-center">${course.credits}</td>
        <td class="text-center ${getGradeClass(course.grade, course.retaken)}">${course.grade}</td>
        <td class="text-center">${course.transfer}</td>
    `;
    
    return row;
}

// Create semester table
function createSemesterTable(semester, courses) {
    const template = document.getElementById('semesterTemplate');
    const semesterElement = template.content.cloneNode(true);
    const stats = calculateSemesterStats(courses);
    const isInProgress = semester.includes('Progress');

    // Set semester title
    semesterElement.querySelector('.semester-title').textContent = semester;

    // Set semester stats if not in progress
    const statsContainer = semesterElement.querySelector('.semester-stats');
    if (!isInProgress) {
        statsContainer.innerHTML = `
            <span class="attempted">Attempted: ${stats.attempted}</span>
            <span class="earned">Earned: ${stats.earned}</span>
            <span class="points">Quality Points: ${stats.points.toFixed(2)}</span>
            <span class="gpa">GPA: ${stats.attempted > 0 ? (stats.points / stats.attempted).toFixed(2) : 'N/A'}</span>
        `;
    } else {
        statsContainer.style.display = 'none';
    }

    // Populate courses
    const tbody = semesterElement.querySelector('tbody');
    courses.forEach(course => {
        tbody.appendChild(createCourseRow(course));
    });

    // Set footer totals if not in progress
    const tfoot = semesterElement.querySelector('tfoot');
    if (!isInProgress) {
        const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
        tfoot.querySelector('.total-credits').textContent = totalCredits;
        tfoot.querySelector('.semester-gpa').textContent = 
            stats.attempted > 0 
                ? `${stats.points.toFixed(2)} / ${stats.attempted} = ${(stats.points / stats.attempted).toFixed(2)} GPA`
                : 'Transfer Only';
    } else {
        tfoot.style.display = 'none';
    }

    return semesterElement;
}

// Calculate cumulative statistics
function calculateCumulativeStats() {
    return Object.entries(courseBySemester).reduce((acc, [semester, courses]) => {
        if (!semester.includes('Progress')) {
            const stats = calculateSemesterStats(courses);
            acc.totalAttempted += stats.attempted;
            acc.totalEarned += stats.earned;
            acc.totalPoints += stats.points;
            acc.totalTransferCredits += stats.transferCredits;
        }
        return acc;
    }, { totalAttempted: 0, totalEarned: 0, totalPoints: 0, totalTransferCredits: 0 });
}

// Update cumulative statistics display
function updateCumulativeStats() {
    const cumStats = calculateCumulativeStats();
    const cumGPA = cumStats.totalAttempted > 0 
        ? (cumStats.totalPoints / cumStats.totalAttempted).toFixed(2)
        : "N/A";

    document.getElementById('totalAttempted').textContent = cumStats.totalAttempted;
    document.getElementById('totalEarned').textContent = cumStats.totalEarned;
    document.getElementById('totalTransfer').textContent = cumStats.totalTransferCredits;
    document.getElementById('cumGPA').textContent = cumGPA;
}

// Initialize the grade calculator
function initGradeCalculator() {
    const container = document.getElementById('semestersContainer');
    
    // Create and append semester tables
    Object.entries(courseBySemester).forEach(([semester, courses]) => {
        container.appendChild(createSemesterTable(semester, courses));
    });

    // Update cumulative statistics
    updateCumulativeStats();
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', initGradeCalculator);