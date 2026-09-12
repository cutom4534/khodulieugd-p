const fs = require('fs');

let appContent = fs.readFileSync('./src/App.tsx', 'utf8');

// The label for the tab needs to match "Tiến trình Lịch sử" but we are now covering both Quang Binh and Quang Tri.
// Let's change the tab label slightly or leave it as "Tiến trình Lịch sử".
// Actually, it already says "Tiến trình Lịch sử". I'll leave it as is or change it to "Tiến trình Lịch sử QB-QT" if space is short. Let's keep "Tiến trình Lịch sử"

