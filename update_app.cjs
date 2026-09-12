const fs = require('fs');
let content = fs.readFileSync('./src/App.tsx', 'utf8');

// 1. Add HomeSection import
if (!content.includes('HomeSection')) {
  content = content.replace("import TimelineSection from './components/TimelineSection';", "import TimelineSection from './components/TimelineSection';\nimport HomeSection from './components/HomeSection';");
}

// 2. Change initial state of setActiveTab to 'home'
content = content.replace("const [activeTab, setActiveTab] = useState<TabType>('timeline');", "const [activeTab, setActiveTab] = useState<TabType>('home');");

// 3. Add Home tab to the nav
if (!content.includes("id: 'home'")) {
  content = content.replace("{ id: 'timeline', icon: Clock, label: 'Tiến trình Lịch sử' },", "{ id: 'home', icon: Home, label: 'Trang chủ' },\n              { id: 'timeline', icon: Clock, label: 'Tiến trình Lịch sử' },");
}

// 4. Update the switch block inside the return statement to handle activeTab === 'home'
// Let's find where timeline is rendered
const renderMainStart = content.indexOf('{activeTab === \'timeline\' && (');
if (renderMainStart !== -1) {
  const renderHomeStr = `
        {activeTab === 'home' && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="w-full mt-6"
          >
            <HomeSection onTabChange={setActiveTab} />
          </motion.div>
        )}
`;
  content = content.substring(0, renderMainStart) + renderHomeStr + content.substring(renderMainStart);
}

// Also, the click handler on the Home icon in the header should set activeTab to 'home' instead of 'figures'
content = content.replace("setActiveTab('figures');", "setActiveTab('home');");


fs.writeFileSync('./src/App.tsx', content);
