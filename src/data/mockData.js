import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import {
  BarChart3,
  BellRing,
  CalendarCheck2,
  Church,
  CreditCard,
  Home,
  LogIn,
  Plus,
  Search,
  Settings,
  Users,
} from 'lucide-react';
import {
  attendanceRecords,
  dashboardStats,
  events,
  finances,
  members,
} from './data/mockData';

const navItems = [
  { label: 'Dashboard', icon: Home, to: '/' },
  { label: 'Members', icon: Users, to: '/members' },
  { label: 'Attendance', icon: CalendarCheck2, to: '/attendance' },
  { label: 'Finance', icon: CreditCard, to: '/finance' },
  { label: 'Events', icon: Church, to: '/events' },
  { label: 'Settings', icon: Settings, to: '/settings' },
];

function StatCard({ title, value, subtitle, tone = 'primary' }) {
  return (
    <div className={`stat-card ${tone}`}>
      <div className="stat-header">
        <span>{title}</span>
        <span className="trend">+12.4%</span>
      </div>
      <h3>{value}</h3>
      <p>{subtitle}</p>
    </div>
  );
}

function SectionCard({ title, action, children, className = '' }) {
  return (
    <div className={`panel ${className}`}>
      <div className="panel-header">
        <h3>{title}</h3>
        {action}
      </div>
      {children}
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="page-stack">
      <div className="page-top">
        <div>
          <p className="eyebrow">Overview</p>
          <h1>Church Dashboard</h1>
        </div>
        <button className="primary-button">
          <Plus size={16} />
          Add Record
        </button>
      </div>

      <div className="stats-grid">
        <StatCard title="Total Members" value="1,284" subtitle="+48 since last month" tone="primary" />
        <StatCard title="Attendance" value="86%" subtitle="Average weekly participation" tone="success" />
        <StatCard title="Monthly Tithe" value="RWF 6.9M" subtitle="Compared to last month" tone="warning" />
        <StatCard title="Upcoming Events" value="09" subtitle="3 this week" tone="neutral" />
      </div>

      <div className="two-col-grid">
        <SectionCard title="Recent Attendance" action={<button className="pill-button">View all</button>}>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Group</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.slice(0, 5).map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.group}</td>
                    <td>
                      <span className={`badge ${item.status === 'Present' ? 'present' : 'late'}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard title="Upcoming Programs" action={<button className="pill-button">Manage</button>}>
          <div className="event-list">
            {events.slice(0, 4).map((event) => (
              <div key={event.title} className="event-item">
                <div className="event-date">
                  <span>{event.day}</span>
                  <strong>{event.date}</strong>
                </div>
                <div>
                  <h4>{event.title}</h4>
                  <p>{event.time} • {event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}

function MembersPage() {
  return (
    <div className="page-stack">
      <div className="page-top">
        <div>
          <p className="eyebrow">Directory</p>
          <h1>Church Members</h1>
        </div>
        <button className="primary-button">
          <Users size={16} />
          New Member
        </button>
      </div>

      <SectionCard
        title="Member Records"
        action={
          <div className="search-box">
            <Search size={15} />
            <input type="text" placeholder="Search by name" />
          </div>
        }
      >
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Cell</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.name}>
                  <td>{member.name}</td>
                  <td>{member.cell}</td>
                  <td>{member.role}</td>
                  <td>
                    <span className={`badge ${member.status === 'Active' ? 'present' : 'late'}`}>
                      {member.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}

function AttendancePage() {
  return (
    <div className="page-stack">
      <div className="page-top">
        <div>
          <p className="eyebrow">Monitoring</p>
          <h1>Attendance</h1>
        </div>
        <button className="primary-button">
          <CalendarCheck2 size={16} />
          Mark Attendance
        </button>
      </div>

      <div className="stats-grid mini">
        <StatCard title="Sunday Service" value="248" subtitle="Present members" tone="primary" />
        <StatCard title="Choir" value="92" subtitle="Choir members present" tone="success" />
        <StatCard title="Youth" value="76" subtitle="Youth attendance" tone="warning" />
      </div>

      <SectionCard title="Attendance Log">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Group</th>
                <th>Leader</th>
                <th>Attendance</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.group}</td>
                  <td>{item.leader}</td>
                  <td>{item.total}</td>
                  <td>{item.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}

function FinancePage() {
  return (
    <div className="page-stack">
      <div className="page-top">
        <div>
          <p className="eyebrow">Finance</p>
          <h1>Church Finance</h1>
        </div>
        <button className="primary-button">
          <CreditCard size={16} />
          New Record
        </button>
      </div>

      <div className="stats-grid mini">
        <StatCard title="Income" value="RWF 14.8M" subtitle="This month" tone="success" />
        <StatCard title="Expenses" value="RWF 8.2M" subtitle="Project spending" tone="warning" />
        <StatCard title="Balance" value="RWF 6.6M" subtitle="Available funds" tone="neutral" />
      </div>

      <SectionCard title="Recent Transactions">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {finances.map((item) => (
                <tr key={item.title}>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td className={item.type === 'income' ? 'positive' : 'negative'}>
                    {item.type === 'income' ? '+' : '-'} {item.amount}
                  </td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}

function EventsPage() {
  return (
    <div className="page-stack">
      <div className="page-top">
        <div>
          <p className="eyebrow">Programs</p>
          <h1>Church Events</h1>
        </div>
        <button className="primary-button">
          <Church size={16} />
          Add Event
        </button>
      </div>

      <div className="event-grid">
        {events.map((event) => (
          <div key={event.title} className="event-card">
            <div className="event-card-date">
              <span>{event.day}</span>
              <strong>{event.date}</strong>
            </div>
            <div className="event-card-body">
              <h3>{event.title}</h3>
              <p>{event.time}</p>
              <p>{event.location}</p>
              <span className="badge present">{event.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="page-stack">
      <div className="page-top">
        <div>
          <p className="eyebrow">Configuration</p>
          <h1>System Settings</h1>
        </div>
      </div>

      <div className="settings-grid">
        <SectionCard title="Church Profile">
          <ul className="settings-list">
            <li><strong>Name:</strong> ADEPR Mashenyi</li>
            <li><strong>District:</strong> Ngororero</li>
            <li><strong>Sector:</strong> Gatumba</li>
            <li><strong>Cell:</strong> Cyome</li>
            <li><strong>Village:</strong> Rusumu</li>
          </ul>
        </SectionCard>

        <SectionCard title="Access Control">
          <ul className="settings-list">
            <li>Admin dashboard enabled</li>
            <li>Role-based access configured</li>
            <li>Supabase authentication ready</li>
            <li>Mobile responsive layout enabled</li>
          </ul>
        </SectionCard>
      </div>
    </div>
  );
}

function AppLayout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-box">
          <div className="brand-mark">A</div>
          <div>
            <strong>ADEPR</strong>
            <small>Mashenyi</small>
          </div>
        </div>

        <nav className="nav">
          {navItems.map(({ label, icon: Icon, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-card">
          <div className="card-icon">
            <BellRing size={18} />
          </div>
          <div>
            <strong>System Status</strong>
            <p>All modules online</p>
          </div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Good morning</p>
            <h2>Welcome, Admin</h2>
          </div>

          <div className="topbar-actions">
            <button className="ghost-button">Reports</button>
            <button className="ghost-button signed-out">
              <LogIn size={16} />
              Sign out
            </button>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
