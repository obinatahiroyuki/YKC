import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

// ----------------------------------------------------
// Users (Admin and Members)
// ----------------------------------------------------
export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  role: text('role', { enum: ['ADMIN', 'USER'] }).default('USER').notNull(),
  
  // Profile Information
  name: text('name'),
  corporateName: text('corporate_name'),
  industry: text('industry'),
  selfIntroduction: text('self_introduction'),
  profileImageUrl: text('profile_image_url'),
  
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
});

// ----------------------------------------------------
// Events
// ----------------------------------------------------
export const events = sqliteTable('events', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  venue: text('venue'),
  eventDate: text('event_date').notNull(),
  maxParticipants: integer('max_participants').notNull(),
  externalPaymentUrl: text('external_payment_url'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
});

// ----------------------------------------------------
// Event Participants (Waitlist support)
// ----------------------------------------------------
export const eventParticipants = sqliteTable('event_participants', {
  id: text('id').primaryKey(),
  eventId: text('event_id').notNull().references(() => events.id),
  userId: text('user_id').notNull().references(() => users.id),
  status: text('status', { enum: ['ATTENDING', 'WAITLIST', 'CANCELLED'] }).default('WAITLIST').notNull(),
  registeredAt: text('registered_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
});

// ----------------------------------------------------
// Bulletin Board (Posts)
// ----------------------------------------------------
export const bulletinPosts = sqliteTable('bulletin_posts', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id),
  title: text('title').notNull(),
  content: text('content').notNull(),
  status: text('status', { enum: ['PUBLISHED', 'DELETED'] }).default('PUBLISHED').notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
});

// ----------------------------------------------------
// Enterprise PR (企業クローズアップ)
// ----------------------------------------------------
export const enterprisePrs = sqliteTable('enterprise_prs', {
  id: text('id').primaryKey(),
  companyName: text('company_name').notNull(),
  description: text('description').notNull(),
  videoUrl: text('video_url'), // YouTube/Vimeo等
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
});

// ----------------------------------------------------
// Notifications
// ----------------------------------------------------
export const notifications = sqliteTable('notifications', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id),
  title: text('title').notNull(),
  message: text('message').notNull(),
  isRead: integer('is_read', { mode: 'boolean' }).default(false).notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
});
