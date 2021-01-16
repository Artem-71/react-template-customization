import './db/auth-db';
import './db/calendar-db';
import './db/chat-db';
import './db/contacts-db';
import './db/purchases-db';
import './db/faq-db';
import './db/icons-db';
import './db/invoices-db';
import './db/profile-db';
import './db/project-dashboard-db';
import './db/scrumboard-db';
import './db/completed-game-db';
import './db/scheduled-game-db';
import './db/schedule-db'
import './db/post-game-db'
import mock from './mock';

mock.onAny().passThrough();
